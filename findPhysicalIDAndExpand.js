var requestOri = require('request')
var request = requestOri.defaults({jar: true})
var parseString = require('xml2js').parseString

const fs = require('fs')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

var requestToURL = (req) => {
    return new Promise((resolve, reject) => {
        request(req, (err, response, body) => {
            if (err && response.statusCode !== 200) {
                console.log('### Reject from : requestToURL')
                reject(err)
            } else {
                var answer = {
                    error: err,
                    response: response,
                    body: body
                }
                resolve(answer)
            }
        })
    })
}

var parseXml = (stringXml) => {
    return new Promise((resolve,reject) => {
        parseString(stringXml, function (err, result) {
            if (err) throw reject(err)
            resolve(result)
        })
    })
}

var findPhysicalId = (hostname,productName) => {
    return new Promise((resolve,reject) => {
        requestToURL({
            uri: 'http://' + hostname + ':19010/search-api/search?q=' + productName,
            method: 'GET',
            timeout : 300000
        }).then((ans) => {
            return parseXml(ans.body)
        }).then((xmlObj) => {
            var metas = xmlObj.Answer.hits[0].Hit[0].metas[0].Meta
            var selected = metas.filter(element => element.$.name === 'physicalid' )
            var physicalId = selected[0].MetaString[0]._
            resolve(physicalId)
        }).catch((e) => {
            reject(e)
        })
    })
}

var start = (URL_PASS, URL_SPACE, username, password, productName, round) => {
    const URL_GET_PARAMS = URL_PASS + '/login?action=get_auth_params'
    const URL_PASSPORT_LOGIN = URL_PASS + '/login'
    const URL_GO_TO_SPACE = URL_SPACE + '/common/emxNavigator.jsp?collabSpace=Default'
    const URL_TO_EXPAND = URL_SPACE + '/resources/enopad/navigate/expand?tenant=OnPremise&xrequestedwith=xmlhttprequest'
    const URL_LOGOUT = URL_PASS + '/logout'
 
    console.log(`[${round}][${username}] Request to ${URL_GET_PARAMS} ...`)
    requestToURL({
        uri: URL_GET_PARAMS,
        method: 'GET',
        timeout : 300000
    }).then((result) => {
        if(result.body.includes('404 Not Found')){
            throw ('ERROR : 404 Not Found. 3DPassport url may be incorrect, or service is down.')
        }
        // console.log(result.body)
        return (JSON.parse(result.body))
    }).then((ans) => {
        var willSendBody = 'lt=' + ans.lt + '&username=' + username + '&password=' + password
        var encoded = encodeURI(willSendBody)
        return requestToURL({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            uri: URL_PASSPORT_LOGIN,
            body: encoded,
            method: 'POST',
            timeout : 300000
        })
    }).then((ans) =>{
        if (ans.body) {
            throw (`[${round}][${username}] ERROR : Logged-in Failed!`)
        }
        console.log(`[${round}] Logged-in Successfully with ${username}!`)
        // console.log(`[${round}] Request to ${URL_GO_TO_SPACE} ...`)
        return requestToURL({
            uri: URL_GO_TO_SPACE,
            method: 'GET',
            timeout : 300000
        })
    }).then((ans) => {
        if (!ans.body.includes('/3DSpace/emxLogin.jsp')) {
            throw (`[${round}][${username}] ERROR : Validated with 3DSpace Failed!`)
        }
        console.log(`[${round}][${username}] Validated with 3DSpace Successfully !`)
        return findPhysicalId(URL_SPACE.replace(/.*\/\/(.*)\/.*/,'$1'),productName)
    }).then((getPhysicalId) => {
        // console.log(`PhysicalId of ${productName} is ${getPhysicalId}`)

        // Prepare body
        var willSend = { 
            intent: 'explore_2D',
            'q.iterative_filter_query_bo': '[ds6w:globalType]:"ds6w:Document" OR [ds6w:globalType]:"ds6w:Part"',
            no_type_filter_rel: [ 'XCADBaseDependency' ],
            roots: [ { 
                id: getPhysicalId 
            }],
            level: '1',
            source: 'cstorage',
            authored: false 
        }
        
        return requestToURL({ 
            method: 'POST',
            url: URL_TO_EXPAND,
            headers: { 
                'content-type': 'application/json' 
            },
            body: willSend,
            json: true,
            time : true,
            timeout : 300000
        })
    }).then((ans) => {
        var resultArray = ans.body.results
        resultArray.forEach((element,i) => {
            if(i === 0 ){
                // Get Parent
                var getParent = resultArray[i].attributes
                var getParentLabel = getParent.filter((e) => e.name === 'ds6w:label')[i].value
                var getParentType = getParent.filter((e) => e.name === 'ds6w:type')[i].value
                console.log(`[${round}][${username}] expanded : ${getParentLabel} (${getParentType}) : ${resultArray.filter((e) => e.attributes).length - 1} children. [${ans.response.elapsedTime} ms]`)
            } else {
                // Check attributes existed
                if(resultArray[i].attributes) {
                    // Get Children
                    var getChild = resultArray[i].attributes
                    var getChildLabel = getChild.filter((e) => e.name === 'ds6w:label')[0].value
                    var getChildType = getChild.filter((e) => e.name === 'ds6w:type')[0].value
                    console.log(`   |- ${getChildLabel} (${getChildType}) `)
                }
            }
        })
        // console.log(`[${round}] Request time in ${ans.response.elapsedTime} ms.`)
        return requestToURL({ 
            method: 'GET',
            url: URL_LOGOUT,
        })
    }).catch((e) => {
        console.log(e)
    })
}

var passport = 'https://nag-infra11.kuma.lab.rnd.3ds.jp:453/3DPassport'
var space = 'https://nag-infra11.kuma.lab.rnd.3ds.jp/3DSpace'
var user = 'wpe1'
var pass = 'Passport1'
var productName = 'Physical Product00000003'
// var productName =  process.argv.slice(2)[0]

// Start
start(passport,space,user,pass,productName)

// Test user
// var users = ['d13','dya2','e4e','eru','gfn','h3h','hf2','hu2','ioe','ite2','jle7','kad','kmo1','kmz','lmt','mal6','mki5','myi2','nsg3','pla1','pph2','ppl','ppl13','q81','qg6','qxr','r5d','rcn16','rg6','rlv','rw8','sbi9','sni4','t94','t9a','thi2','ti8','tma3','tmt2','tsa2','tti1','ttu1','ujf','vbd2','vpw','wmt','wpe1','y5a','yf4','yh3','ynk','yti3','zuv','ama4','ard5','atv','bee','cco3']
// console.log(users.length)

// for(var i=0;i<200;i++){
//     start(passport,space,users[i%users.length],pass,productName,i+1)
// }

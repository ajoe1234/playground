// ############ DISCONTINUED ############
// Cannat do MQL by web API
// ######################################

var requestOri = require('request')
var request = requestOri.defaults({jar: true})
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

var startMQL = (URL_PASS, URL_SPACE, username, password, command) => {
    const URL_GET_PARAMS = URL_PASS + '/login?action=get_auth_params'
    const URL_PASSPORT_LOGIN = URL_PASS + '/login'
    const URL_EMX_LOGIN_JSP = URL_SPACE + '/emxLogin.jsp'
    const URL_MQL = URL_SPACE + '/common/emxRunMQL.jsp'

    console.log(`Request to ${URL_GET_PARAMS} ...`)
    requestToURL({
        uri: URL_GET_PARAMS,
        method: 'GET',
    }).then((result) => {
        if(result.body.includes('404 Not Found')){
            throw ('ERROR : 404 Not Found. 3DPassport url may be incorrect, or service is down.')
        }
        // console.log(result.body)
        return (JSON.parse(result.body))
    }).then((ans) => {
        var willSendBody = 'lt=' + ans.lt + '&username=' + username + '&password=' + password
        var encoded = encodeURI(willSendBody)
        console.log(encoded)
        return requestToURL({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            uri: URL_PASSPORT_LOGIN,
            body: encoded,
            method: 'POST'
        })
    }).then((ans) =>{
        if (ans.body) {
            throw ('ERROR : Logged-in Failed!')
        }
        console.log(`Logged-in Successfully with ${username}!`)
        console.log(`Request to ${URL_EMX_LOGIN_JSP} ...`)
        return requestToURL({
            uri: URL_EMX_LOGIN_JSP,
            method: 'GET'
        })
    }).then((ans) => {
        if (!ans.body.includes('common/emxSecurityContextSelection.jsp')) {
            throw ('ERROR : Validated with 3DSpace Failed!');
        }
        console.log(`Validated with emxLogin Successfully !`)
        console.log(ans.body)

        var willSendBody = 'mqlCommand=' + command + '&mqlResult='
        var encoded = encodeURI(willSendBody)
        console.log(encoded)
        return requestToURL({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri : 'https://nag-infra11.kuma.lab.rnd.3ds.jp/3DSpace/common/emxRunMQL.jsp',
            method: 'POST',
            body : encoded,
            form : {
                mqlCommand : 'help',
            }
        })
    }).then((ans) => {
        console.log(ans.body)
        fs.writeFile('mqlPage.html',ans.body, () => console.log('DONE'))

    }).catch((e) => {
        console.log(e)
    })
}

var passport = 'https://nag-infra11.kuma.lab.rnd.3ds.jp:453/3DPassport'
var space = 'https://nag-infra11.kuma.lab.rnd.3ds.jp/3DSpace'
var user = 'admin_platform'
var pass = 'Passport1'
var mql = 'help'
startMQL(passport,space,user,pass,mql)
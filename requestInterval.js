var request = require('request')


var makeRequest = () => {
        // To do write more log to file!
        console.log('Starts at function')
        request({
            headers: {
                'connection': 'close',
                'cache-control': 'no-cache'
            },
            uri: 'https://httpstat.us/200?sleep=9000',
            method: 'GET'
        }, (error, response, body) => {
            if(error){
                console.log(error)
            } else {
                console.log(body)
                console.log('Will wait 5 seconds')
                setTimeout(()=>{
                    console.log('Done wait 5 seconds')
                    makeRequest()
                },5000)
            }
        })
}

makeRequest()
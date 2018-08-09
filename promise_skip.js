var printA = () => {
    return new Promise((resolve,reject) => {
        resolve('a')
    })
}

var printB = () => {
    return new Promise((resolve,reject) => {
        resolve('b')
    })
}

var printC = () => {
    return new Promise((resolve,reject) => {
        resolve('c')
    })
}

var printD = () => {
    return new Promise((resolve,reject) => {
        resolve('d')
    })
}



var test = () => {
    return new Promise((resolve,reject) =>{
        printA().then((ans) => {
            console.log(ans)
            return printB()
        }).then((ans) => {
            // resolve(ans)
            console.log(ans)
            if(ans === 'c'){
                console.log('will skipp')
                // throw ('this is error')
                return ('skipped!')
            }
            return printA().then((a1) => {
                console.log(a1)
                return printC().then((a2) =>{
                    console.log(a1 + a2)
                    return 1
                })
            })
        }).then((ans) => {
            console.log(ans)
            return printD()
        }).then((ans) => {
            console.log(ans)
            console.log('done')
        }).catch((e) => {
            console.log(e)
        })
    })
}

test()
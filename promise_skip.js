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

printA().then((ans) => {
    console.log(ans)
    return printB()
}).then((ans) => {
    console.log(ans)
    if(ans === 'b'){
        console.log('will skipp')
        return ('skipped!')
    }
    return printC()
}).then((ans) => {
    console.log(ans)
    return printD()
}).then((ans) => {
    console.log(ans)
    console.log('done')
}).catch((e) => {
    console.log(e)
})
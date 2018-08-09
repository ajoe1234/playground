var fs = require('fs')
var parseString = require('xml2js').parseString
var xml2js = require('xml2js')

// Start timer
var hrstart = process.hrtime()

// Read GeneratedXPDM_PS.xml
var xmlString = fs.readFileSync('GeneratedXPDM_PS.xml').toString()

// Read id want to remove as Array
var wantToRemoveId = fs.readFileSync('wantToRemoveId.txt').toString().split('\r\n')

parseString(xmlString, function (err, result) {
    if(err) throw err
    var xmlObjArrayOfProduct = result.XPDMXML.ProductStructure[0].Product
    var xmlObjArrayOfRep3DAggr = result.XPDMXML.ProductStructure[0].Rep3DAggr
    var xmlObjArrayOfRepProductInst = result.XPDMXML.ProductStructure[0].ProductInst

    // var wantToRemoveId = Array.from(xmlObjArrayOfRep3DAggr,(e) => e.$.id )
    // console.log(wantToRemoveId.length)
    // fs.writeFile('tmp.txt',wantToRemoveId, () => console.log('Finished'))

    // ID want to remove
    console.log('==========================')
    console.log(`ID To Remove : ${wantToRemoveId.length}`)

    // Remove Product based-on ID
    var newXmlObjArrayOfProduct = xmlObjArrayOfProduct.filter((e) => !wantToRemoveId.includes(e.$.id))
    console.log('==========================')
    console.log(`Product Original : ${xmlObjArrayOfProduct.length}`)
    console.log(`Product New : ${newXmlObjArrayOfProduct.length}`)

    // Remove Rep3DAggr based-on ID
    var newXmlObjArrayOfRep3DAggr = xmlObjArrayOfRep3DAggr.filter((e) => !wantToRemoveId.includes(e.Owned[0]))
    console.log('==========================')
    console.log(`Rep3DAggr Original : ${xmlObjArrayOfRep3DAggr.length}`)
    console.log(`Rep3DAggr New : ${newXmlObjArrayOfRep3DAggr.length}`)
    
    // Remove ProductInst based-on ID
    var newXmlObjArrayOfRepProductInst = xmlObjArrayOfRepProductInst.filter((e) => !wantToRemoveId.includes(e.Instancing[0]))
    console.log('==========================')
    console.log(`ProductInst Original : ${xmlObjArrayOfRepProductInst.length}`)
    console.log(`ProductInst New : ${newXmlObjArrayOfRepProductInst.length}`)

    // Assign new array backs
    // Empty File
    result.XPDMXML.File = []
    result.XPDMXML.ProductStructure[0].Product = newXmlObjArrayOfProduct
    result.XPDMXML.ProductStructure[0].Rep3DAggr = newXmlObjArrayOfRep3DAggr
    result.XPDMXML.ProductStructure[0].ProductInst = newXmlObjArrayOfRepProductInst

    console.log('==========================')
    console.log('Generating XML ... ')

    // Generated XML
    var builder = new xml2js.Builder()
    var xml = builder.buildObject(result)

    const used = process.memoryUsage().heapUsed / 1024 / 1024
    console.log(`used approximately ${Math.round(used * 100) / 100} MB`);
    fs.writeFile('fromWpe1.txt',xml, () => console.log('Finished'))
    var hrend = process.hrtime(hrstart)
    console.log(`Execution time : ${hrend[0]}s ${hrend[1]/1000000} ms `)
});

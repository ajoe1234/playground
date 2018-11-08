// One line command
// require('fs').writeFile('result.txt',require('fs').readFileSync('userslist.txt').toString().split('\r\n').map(e => '*PERSON ' + e.split(',')[2] + ';Company Name;$;0\r\n' + '+PASSWORD Passport1\r\n+ATTRIBUTE Country;JPN\r\n+ATTRIBUTE Email Address;' + e.split(',')[2] + '@3ds.com\r\n+ATTRIBUTE First Name;' +  e.split(',')[1] + '\r\n+ATTRIBUTE Icon Mail;FALSE\r\n+ATTRIBUTE JT Viewer Type;None\r\n+ATTRIBUTE Last Name;' + e.split(',')[0] + '\r\n+ATTRIBUTE Login Type;Standard\r\n+ATTRIBUTE Originator;admin_platform\r\n+MEMBER Company Name\r\n+CONTEXT VPLMCreator.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+CONTEXT VPLMProjectAdministrator.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+CONTEXT VPLMProjectLeader.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+PREFERREDCONTEXT VPLMCreator.Company Name.Common Space\r\n' ).join('\r\n'), () => console.log('done'))
// console.log(test)

const fs = require('fs')

// create 
var readStringArry = fs.readFileSync('userslist.1.txt').toString().split('\r\n')
var readyToWriteString = readStringArry.map((e) => {
    return '*PERSON ' + e.toLowerCase().split(',')[2] + ';Company Name;$;0\r\n'
         +  '+PASSWORD' + e.split(',')[3] +'\r\n+ATTRIBUTE Country;JPN\r\n' 
         +  '+ATTRIBUTE Email Address;' + e.toLowerCase().split(',')[2] + '@3ds.com\r\n'
         +  '+ATTRIBUTE First Name;' +  e.split(',')[1] + '\r\n'
         +  '+ATTRIBUTE Icon Mail;FALSE\r\n'
         +  '+ATTRIBUTE JT Viewer Type;None\r\n'
         +  '+ATTRIBUTE Last Name;' + e.split(',')[0] + '\r\n'
         +  '+ATTRIBUTE Login Type;Standard\r\n'
         +  '+ATTRIBUTE Originator;admin_platform\r\n'
         +  '+MEMBER Company Name\r\n'
         +  '+CONTEXT VPLMCreator.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+CONTEXT VPLMProjectAdministrator.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+CONTEXT VPLMProjectLeader.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+PREFERREDCONTEXT VPLMCreator.Company Name.Common Space\r\n'
}).join('\r\n')

fs.writeFile('GeneratedPOSUsers.txt',readyToWriteString, () => console.log('DONE'))

// // create 
// var readStringArry = fs.readFileSync('inactivelist.txt').toString().split('\r\n')
// var readyToWriteString = readStringArry.map((e) => {
//     return '*PERSON ' + e.toLowerCase() + ';Company Name;$;0\r\n'
//         +   '+INACTIVE\r\n'
// }).join('\r\n')

// fs.writeFile('result.txt',readyToWriteString, () => console.log('DONE'))
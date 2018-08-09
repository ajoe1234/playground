// One line command
// require('fs').writeFile('result.txt',require('fs').readFileSync('userslist.txt').toString().split('\r\n').map(e => '*PERSON ' + e.split(',')[2] + ';Company Name;$;0\r\n' + '+PASSWORD Passport1\r\n+ATTRIBUTE Country;JPN\r\n+ATTRIBUTE Email Address;' + e.split(',')[2] + '@3ds.com\r\n+ATTRIBUTE First Name;' +  e.split(',')[1] + '\r\n+ATTRIBUTE Icon Mail;FALSE\r\n+ATTRIBUTE JT Viewer Type;None\r\n+ATTRIBUTE Last Name;' + e.split(',')[0] + '\r\n+ATTRIBUTE Login Type;Standard\r\n+ATTRIBUTE Originator;admin_platform\r\n+MEMBER Company Name\r\n+CONTEXT VPLMCreator.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+CONTEXT VPLMProjectAdministrator.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+CONTEXT VPLMProjectLeader.Company Name.Common Space;,;CDR,CSV,DRW,IFW,PAU,CFG,MUX,EXH,MDG,KPT,KPZ,PDM,S1X,SDV,TXO\r\n+PREFERREDCONTEXT VPLMCreator.Company Name.Common Space\r\n' ).join('\r\n'), () => console.log('done'))
// console.log(test)

const fs = require('fs')

// create 
var users = []
for(var i=0;i<200;i++) {
    users.push('psc'+ (i<10 ? '0'+(i+1) : i+1))
}
var readyToWriteString = users.map((e) => {
    return '*PERSON ' + e + ';Company Name;$;0\r\n'
         +  '+PASSWORD Passport1\r\n+ATTRIBUTE Country;JPN\r\n' 
         +  '+ATTRIBUTE Email Address;' + e + '@3ds.com\r\n'
         +  '+ATTRIBUTE First Name;' +  e + '\r\n'
         +  '+ATTRIBUTE Icon Mail;FALSE\r\n'
         +  '+ATTRIBUTE JT Viewer Type;None\r\n'
         +  '+ATTRIBUTE Last Name;' + e + '\r\n'
         +  '+ATTRIBUTE Login Type;Standard\r\n'
         +  '+ATTRIBUTE Originator;admin_platform\r\n'
         +  '+MEMBER Company Name\r\n'
         +  '+CONTEXT VPLMCreator.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+CONTEXT VPLMProjectAdministrator.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+CONTEXT VPLMProjectLeader.Company Name.Common Space;,;CDR,CSV,IFW,PAU,CFG,MUX,MDG,KPT,PDM,SDV\r\n'
         +  '+PREFERREDCONTEXT VPLMCreator.Company Name.Common Space\r\n'
}).join('\r\n')

fs.writeFile('GeneratedPOSUsers1-200.txt',readyToWriteString, () => console.log('DONE'))

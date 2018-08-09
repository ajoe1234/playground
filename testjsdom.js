
const jsdom = require('jsdom')
const {
  JSDOM
} = jsdom

var dom = new JSDOM(`<body>
<script>document.body.appendChild(document.createElement("hr"));</script>
</body>`)

console.log(dom.window.document.body.children.length)

// Answer for question about finding the incorrectly recorded that made by Alex.

// original product'sname
var name = ['a','b','c','d']
// original product'sprice
var price = [1,2,3,4]

//product's name of Alex recorded
var nameA = ['a','b','c','d','a','b','c','d']
//product's price of Alex recorded
var priceA = [1,2,3,4,1,1,1,1]

//create arrays for pairing product name and price
var products = []
for(var i=0;i<name.length;i++){
    var product = {
        name: name[i],
        price: price[i]
    }
    products.push(product)
}

// create arrays for pairing records of Alex
var transactions = []
for(var i=0;i<nameA.length;i++){
    var transaction = {
        name: nameA[i],
        price: priceA[i]
    }
    transactions.push(transaction)
}

var checking = (transactions, products, cb) => {
    var found = 0
    for (var i = 0; i < transactions.length; i++) {
        for (var j = 0; j < products.length; j++) {
            if (transactions[i].name === transactions[j].name) {
                if (transactions[i].price.toString() !== transactions[j].price.toString()) {
                    found = found + 1
                }
            }
        }
    }
    cb(found)
}

checking(transactions, products, (ans) => {
    console.log(ans)
})
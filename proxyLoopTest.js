
for(var i=5001;i<=5100;i++){
    console.log(`proxy.register("client.wpe1.net/${i}/update_bet/history", "http://localhost:${i}/update_bet/history")`)
}   
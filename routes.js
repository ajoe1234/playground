module.exports = function(app) {
    app.get('/', function(req, res) {
        res.write("I am a new route")
        res.end();
    });

    app.get('/bx', function(req, res) {
        res.write("BX")
        res.end();
    });
}
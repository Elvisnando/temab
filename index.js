const express = require('express'),
    bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const getArea = require('./area.js');

app.get('/getArea', function (req, res) {
    var side1 = parseInt(req.query.side1);
    var side2 = parseInt(req.query.side2);
    var sides = [side1,side2];
    var ris = getArea(sides);
    if(ris != -1){
        res.status('200');
        res.json(ris);
    }else {
        res.status('400');
        res.json('area:'+ris);
    }
})





app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
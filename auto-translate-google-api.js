const translate = require('google-translate-api');
var fs = require("fs");

var data = fs.readFileSync('data.txt');
data_list = data.toString().split('\n');
var lenght = data_list.lenght
var result = []

data_list.forEach(function(element) {
    translate(element, {from: 'en', to: 'vi'}).then(res => {
        var r = {
            'en': element,
            'vi': res.text 
        }
        // result.push(r);
        fs.appendFile('result.json', JSON.stringify(r)+ ',\n', function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log(r)
            }
          })        
    }).catch(err => {
        console.log(err)
    });
}, this);
const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://youla.ru/web-api/auth/request_code',
        form: {
            phone:`${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}

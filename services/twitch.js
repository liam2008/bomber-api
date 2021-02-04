const request = require("request");
const { charsGen } = require("../index.js")

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url: `https://passport.twitch.tv/register?trusted_request=true`,
			json: true,
			body:{
				birthday:{
					day: 11,
					month: 11,
					year: 1998
				},
				client_id:`kd1unb4b3q4t58fwlpcbzcbnm76a8fp`,
				include_verification_code: true,
				password: charsGen(),
				phone_number:`${number}`,
				username: charsGen()
			}}, 
			function(err, res, json){
				/**/
		});
	}
}
// mycode.js
var usernames = ["mitchelllillie", "patharryux", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano", "jasonsiren", "jtz1983", "erikphansen", "tybrenner"];
var users = [];

usernames.forEach(function(name) {
    $.get('http:/teamtreehouse.com/'+name+'.json').
        done(importUser);
});

function importUser(user) {
	var obj = {};
	obj.name = (user.name);
	obj.badges = [];
	for(var i = 0; i < user.badges.length; i++) {
		obj.badges.push(user.badges[i].icon_url);
	}
	users.push(obj);

	if(users.length >= usernames.length) {
		badgeCtor(users);
	}
  //add additional recommend/simliarity function
}

var master = ['izelnakri'];
var arrayOfAll = [];
var object = $.get('http://teamtreehouse.com/izelnakri.json');

function arrayMaker() {
for (var i = 0; i < 322; i ++) {
  arrayOfAll.push(object.responseJSON.badges[i].icon_url);
}
console.log(arrayOfAll);
return arrayOfAll;

}

console.log(object.responseJSON.badges);

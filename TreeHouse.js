// mycode.js
var usernames = ['kathleenkent', 'adamtaitano', 'tybrenner'];
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

// mycode.js
var usernames = ["mitchelllillie", "patharryux", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano", "jasonsiren", "jtz1983", "erikphansen", "tybrenner"];
var users = [];
var master = ['izelnakri'];
var arrayOfAll = [];
var object = {};
var newObj = {};

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

}


function loadMaster() {
  $.ajax(
  {
  	url: "http://teamtreehouse.com/izelnakri.json",
  	dataType: "json",
  	async: false,
  	success: function(data)
  	{
  		object = data;
  	}
  });
  for (var i = 0; i < 322; i ++) {
    arrayOfAll.push(object.badges[i].icon_url);
  }
  return arrayOfAll;
}



window.onload = function() {
  console.log("loaded!");
  loadMaster();
};

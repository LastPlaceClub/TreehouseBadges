// Variable Declarations:
var usernames = ["mitchelllillie", "patharryux", "jeffdunn", "donguyen", "mkelley2", "josephfraley2", "kathleenkent", "adamtaitano", "jasonsiren", "jtz1983", "erikphansen", "tybrenner"];
var users = [];
var master = ['izelnakri'];
var arrayOfAll = [];
var object = {};
var newObj = {};
var inputValue;
var arr = [ {val : -1, text: 'Select A User'},];
var obj = {};


//Allows for each JSON data to be used, starting with usernames array
usernames.forEach(function(name) {
    $.get('http:/teamtreehouse.com/'+name+'.json').
        done(importUser);
});
// Called upon to parse JSON data into useable format
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

//Loads Data of Izel that contains most (if not all) badges
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

// Function called upon once user enters a new username:
function myFunction() {
  var x = document.getElementById("myText").value;
  var y = 12;
    if (x === "") {
      return false;
    }
    usernames.push(x);
    var ajax = $.ajax(
      {
      url: 'http://teamtreehouse.com/'+x+'.json',
      dataType: "json",
      async: false,
      success: function(data)
      {
        var newUser = data;
        importUser(newUser);
      },
      error: function(){
        alert("Not A Real User!");
      }
      });
      if (ajax.error) {
        return false;
      }
      else if (ajax.success) {
        $( "div" ).remove();
    }
}

//Allows for select drop down menu to run recommendBadgesFor
function run() {
  var text = $("#something option:selected").text();
  text = "" + text;
  console.log(text);
  recommendBadgesFor(text);
}


//Loads page with master data (can be turned off to increase loading speed):
window.onload = function() {
  console.log("loaded!");
  loadMaster();
};

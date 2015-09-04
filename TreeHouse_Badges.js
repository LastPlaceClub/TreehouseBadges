//var _ = require('lodash')

var badgeCtor = function(users) {

	var $div = $('<div id=something>');
	$div.appendTo('body');

	for(var i = 0; i < (users.length); i++) {
		var $h1 = $('<h1>');
		$h1.appendTo($div);

		 obj = {val: i, text: users[i].name};
		 arr.push(obj);


		var userName = users[i].name;
		$h1.html(userName);

		var $p = $('<p>');
		$p.appendTo($h1);

		for(var j = 0; j < users[i].badges.length; j++) {

			var $badge_img = $('<img src="' + users[i].badges[j] + '">');
			// $p.html($badge_img);
			$p.append($badge_img);

		}
	}

	var sel = $('<select class="target">').appendTo('#awesome');
	$(arr).each(function() {
	 sel.append($("<option value='option1' id='option'>").attr('value',this.val).text(this.text));
	});
};

function badgeEarnedBy(badgeURL) {
var array = [];
	for (var i = 0; i < users.length; i ++) {
		for (var k = 0; k < users[i].badges.length; k ++) {
			if (badgeURL === users[i].badges[k]) {
				array.push(users[i].name);
			}
		}
}
return array;
}


function intersectBadges(usernameA, usernameB) {
	result1 = [];
	result2 = [];
	for (var i = 0; i < users.length; i ++) {
		if (usernameA === users[i].name) {
			result1.push(users[i].badges);
			console.log(result1)
		}
	}
	for (var k = 0; k < users.length; k ++) {
		if (usernameB === users[k].name) {
			result2.push(users[k].badges);
			console.log(result2)
		}
	}

	var same = _.intersection(result1, result2);
	return same
}


function similarity(usernameA, usernameB){
var one;
var two;
		for (var i = 0; i < users.length; i ++) {
			if (usernameA === users[i].name) {
				one = Object.keys(users[i].badges).length;
			}
		}
		for (var j = 0; j < users.length; j ++) {
			if (usernameB === users[j].name) {
				two = Object.keys(users[j].badges).length;
			}
		}
    if (one > two) {
       return ((intersectBadges(usernameA, usernameB).length) / one);
    } else {
        return ((intersectBadges(usernameA, usernameB).length) / two);
    }
}


// function score(badgeName, username) {
//     var array = [];
//     var test = [];

//     badgeURL = 
//     var comparePerson = intersectBadges()
// }
// 		result1.push(users[i].badges);
//     for(var key1 in name1){
//         result1.push(jobs[key1]);
//     }
//
//     for(var key2 in name2) {
//         result2.push(jobs[key2]);
//     }

function score(badgeURL, username) {
    var array = [];
    var test = [];
		var names = badgeEarnedBy(badgeURL);
		for (var i = 0; i < names.length; i ++) {
			if (username != names[i]) {


			test.push(similarity(username, names[i]));
		}
		else {
			console.log("poop");
		}
	}
		return _.round(_.sum(test), 3);
}

//
function recommendBadgesFor(username) {
	var badges = [];
	var array = [];
	for (var i = 0; i < users.length; i ++) {
		if (username === users[i].name) {
			for (var k = 0; k < users[i].badges.length; k ++) {
		  badges.push(users[i].badges[k]);
	 }
	 }
	}
	var potentialBadges = _.difference(arrayOfAll, badges);
	// push into an array, the badge and the score
	for (var j = 0; j < potentialBadges.length; j ++) {
		array.push({badge:potentialBadges[j], score: score(potentialBadges[j], username)});
	}
	return array;
}
//     var array = [];
//     var potentialJobs = _.omit(jobs, Object.keys(does))
//
//     for(var key in potentialJobs) {
//         array.push({job: key, score: score(key, (person.name))})
//     }
//

// }


// badgeUrl to badgeName for multiple users
function badgeNameMultiple(usersObject) {
	var userBadges = [];
	var shortURL = [];
	var shortestURL = [];

	for(var i = 0; i < users.length; i ++) {
		var badges = users[i].badges;

		for (var j = 0; j < badges.length; j++) {
			var longURL = badges[j].split('/')
			shortURL.push(longURL[longURL.length - 1])
		}		
	}

	for(var k = 0; k < shortURL.length; k++) {
		var su = (shortURL[k].split('.')[0]);
		shortestURL.push(su)	
	}

	return shortestURL
}

// badgeURL to badgeName for single badgeURL
function badgeNameSingle(badgeURL) {
	var tets = badgeURL.split('/');
	var bName = (tets[tets.length-1]);

	console.log(bName.split('.')[0])
}

//    return array.sort(function(a, b){
//         return array[1].score - array[0].score
//     })


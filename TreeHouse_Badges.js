//var _ = require('lodash')

var badgeCtor = function(users) {

	var $div = $('<div>');
	$div.appendTo('body');

	for(var i = 0; i < (users.length); i++) {
		var $h1 = $('<h1>');
		$h1.appendTo($div);

		var userName = users[i].name
		$h1.html(userName);

		var $p = $('<p>')
		$p.appendTo($h1)

		for(var j = 0; j < users[i].badges.length; j++) {

			var $badge_img = $('<img src="' + users[i].badges[j] + '">');
			// $p.html($badge_img);
			$p.append($badge_img);

		}
	}

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
//
//
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
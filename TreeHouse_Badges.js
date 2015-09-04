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

	var sel = $('<select>').appendTo('#awesome');
	$(arr).each(function() {
	 sel.append($("<option>").attr('value',this.val).text(this.text));
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
// 	array = [];
// 	for (var i = 0; i < users.length; i ++) {
// 		for (var k = 0; k < users[i].badges.length; k++) {
// 		array.push(users[i].badges[k]);
// 		console.log(users[i].badges[k]);
// 	}
// }
// console.log(array);
// }
function intersectBadges(usernameA, usernameB) {
    var result1 = [];
    var result2 = [];
		var a = [];
		var b = [];

	for (var i = 0; i < users.length; i ++) {
		if (usernameA === users[i].name)
				result1.push(users[i].badges);
	}
	for (var k = 0; k < users.length; k ++) {
		if (usernameB === users[k].name)
			result2.push(users[k].badges);
}
  for (var h = 0; h < result1[0].length; h ++) {
		a.push(result1[0][h]);
	}
	for (var j = 0; j < result2[0].length; j ++) {
		b.push(result2[0][j]);
	}

	var same = _.intersection(a, b);
	   return same;
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
//    return array.sort(function(a, b){
//         return array[1].score - array[0].score
//     })

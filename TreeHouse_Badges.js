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

function score(badgeName, username) {
    var array = [];
    var test = [];

}
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

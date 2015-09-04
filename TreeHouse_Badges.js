var badgeCtor = function(users) {

	var $div = $('<div>');
	$div.appendTo('body');

	var $table = $('<table>');
	$table.appendTo($div);

	for(var i = 0; i < (users.length); i++) {
		var $tr = $('<tr>');
		$tr.appendTo($table);

		var $th = $('<th>');
		$th.appendTo($tr);

		var userName = users[i].name;
		$th.html(userName);

		for(var j = 0; j < users[i].badges.length; j++) {

			var $td = $('<td>');
			$td.appendTo($tr);

			var $badge_img = $('<img src="' + users[i].badges[j] + '">');
			$td.html($badge_img);

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
	for (var i = 0; i < users.length; i ++) {
		if (usernameA === users[i].name) {
				result1.push(users[i].badges);
		}
	}
	for (var k = 0; k < users.length; k ++) {
		if (usernameB === users[k].name) {
			result2.push(users[k].badges);
		}
	}
	console.log(result1)
	var same = _.union(result1, result2)
	console.log(same)
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


// badgeUrl to badgeName
function badge() {
	var userBadges = [];
	var shortURL = [];

	for(var i = 0; i < users.length; i ++) {
		var badges = users[i].badges;

		for (var j = 0; j < badges.length; j++) {
			var ble = badges[j].split('/')
			shortURL.push(ble[ble.length - 1])

			//var boo = shortURL.split('.');
			
		}
	}
	console.log(shortURL)

}
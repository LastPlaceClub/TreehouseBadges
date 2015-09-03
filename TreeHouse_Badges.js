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

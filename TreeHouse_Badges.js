var badgeCtor = function(users) {

	var $div = $('<div>')
	$div.appendTo('body')

	var $table = $('<table>')
	$table.appendTo($div)

	for(var i = 0; i < (users.length); i++) {
		var $tr = $('<tr>');
		$tr.appendTo($table);

		var $th = $('<th>')
		$th.appendTo($tr)

		var userName = users[i].name
		$th.html(userName);

		for(var j = 0; j < users[i].badges.length; j++) {

			var $td = $('<td>');
			$td.appendTo($tr);

			var $badge_img = $('<img src="' + users[i].badges[j] + '">');
			$td.html($badge_img);

		}
		
	}
		
}

var badgeCtor = function(users) {

	var $div = $('<div>')
	$div.appendTo('body')


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

}

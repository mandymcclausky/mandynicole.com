$(document).ready(function() {

	// tagline variables
	var tagline = $(".tagline"),
			original = tagline.clone(true),
			who = tagline.attr("data-who");

	// typewrite.js
	$(tagline).typewrite();


	// letterhead hover
	$("header h1").hover(
		function() {
			tagline.remove();
			$(this).append(tagline.html(who).typewrite());
		}, function() {
			tagline.remove();
			$(this).append(tagline.html(original).typewrite());
		}
	);

	// $(document).on('mouseenter', 'header',
	// 	function() {
	// 		tagline.html(who).stop().typewrite();
	// 	});
	// $(document).on('mouseleave', 'header',
	// 	function() {
	// 		tagline.html( tagline.data(original) );
	// 	});

	// .more buttons variables
	var container = $(".details"),
			content = $(".details p"),
			text = $(".more .text"),
			icon = $(".more .icon");

	// manipulate .more onClick
	function open() {
		$(container).slideDown(600);
		$(content).hide().delay(300).fadeIn(400);
		$(text).text("Close");
		$(icon).html("&#10060;");
		$(this).one("click", close);
	}
	function close() {
		$(content).fadeOut(200);
		$(container).delay(200).slideUp(400);
		$(text).text("More");
		$(icon).html("&#59228;");
		$(this).one("click", open);
	}

	$("#about #bio").one("click", open);


	//jRibbble
	var callback = function (playerShots) {
	var html = '';
	$.each(playerShots.shots,
		function (i, shot) {
			html += '<li>';
			html += '<a href="' + shot.url + '">';
			html += '<img src="' + shot.image_url + '" ';
			html += 'alt="' + shot.title + '"></a>';
		});

		$('#dribbble').html(html);
	};

	$.jribbble.getShotsByPlayerId('mandynicole', callback, {page: 1, per_page: 4});

});
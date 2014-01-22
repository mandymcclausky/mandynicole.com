$(document).ready(function() {
	// typewrite.js
	$("header .tagline").typewrite({
		'delay': 50,
		'cursor': '|'
	});

	// letterhead hover
	var b = '$(".box")',
			m = 'M<sup>2</sup>';
	$("header h1").hover(
		function() {
			b.addClass("hover", function(e) {
				if (b.width() > 100) {
					b.html(m + " is Mandy McClausky");
				}
			});
		},
		function() {
			b.removeClass("hover").html(m);
		}
	);
		//	b.addClass("hover");
		// });

		// $(document).on("");



	// manipulate .more onClick
		function bioOpen() {
			$(".extra").stop().slideDown(800);
			$(".more .text").text("Close");
			$(".more .icon").html("&#10060;");
			$(this).one("click", bioClose);
		}
		function bioClose() {
			$(".extra").stop().slideUp(500);
			$(".more .text").text("More");
			$(".more .icon").html("&#59228;");
			$(this).one("click", bioOpen);
		}

		$("#about a").one("click", bioOpen);

	// scroll .more

	var $more = $("#about a .more:not(.extra)");
 
	$(window).scroll(function(){
		$more
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "fast" );
	});

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
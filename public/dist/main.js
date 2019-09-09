console.log('june');

$(document).ready(function() {
	$(window).scroll(function() {
		let position = $(this).scrollTop();

		if (position > 50) {
			$(".navigation").addClass("navigation-toggle");
		} else {
			$(".navigation").removeClass("navigation-toggle");
		}
	})
})
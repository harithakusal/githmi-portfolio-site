(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);


function viewImg(img) {
	$(".img-viewer-container").css("display", "grid");
	$('#viewd-img').attr('src',img);
}

$(document).ready(function () {
    $("#close-btn").click(function () {
		$(".img-viewer-container").css("display", "none");
    });
});
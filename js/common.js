head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	//
	function map_height() {
		var map = $('.map__el'),
				map_top = map.offset().top,
				footer = $('.footer'),
				footer_height = footer.outerHeight(),
				window_height = $(window).height();
		map.height(window_height - (map_top + footer_height));
	};
	map_height();

	$(window).resize(function(){
		map_height();
	});
	
});
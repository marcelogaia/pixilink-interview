(function ($) {
	$('.tree-toggle').click(function () {
		$(this).toggleClass('open').parent().children('ul.tree').toggle(200);
	});

	$('.tree-toggle').parent().children('ul.tree').toggle(0);

}(window.jQuery));
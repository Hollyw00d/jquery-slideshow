$(document).ready(function () {   
	
function equalHeight(group) {
	var windowWidth = $(window).width();
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	if(windowWidth > 768) {
		group.height(tallest);
	}
	else {
		group.css('height', 'auto');
	}
}

$(window).on('load resize', function() {
	equalHeight($('.sameHeight'));
});	

});
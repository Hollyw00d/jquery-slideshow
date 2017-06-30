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
	group.height(tallest);
}

equalHeight($('.sameHeight'));
		

});
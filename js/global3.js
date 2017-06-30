$(document).ready(function () {   
	
		function matchWidth() {
			var windowWidth = $( window ).width();

			var $sameHeightDivs = $('.sameHeight');
			var maxHeight = 0;
			$sameHeightDivs.each(function() {

				if(maxHeight < $(this).outerHeight(true)) {
					maxHeight = $(this).outerHeight(true);
				}	

			});

			if(windowWidth > 768) {
				$sameHeightDivs.css({ height: maxHeight + 'px' });
			}
			else {
				$sameHeightDivs.css({ height: 'auto'});	
			}

		}
		

		$(window).on('load', matchWidth);
		$(window).on('resize', matchWidth);
		

});
(function() {
 
    $(function() {

        function slideshowMJ() {

            var getSlideshow = $('.slideshow_mj');
            var getSlideshowLi = getSlideshow.find('li');
            var slideshowImgs = getSlideshow.find('img');
            var sum = 0; 

            // Add data attributes to images
            getSlideshowLi.map(function() {
                sum++;
                return $(this).attr('data-num', sum);
            });

        }
        slideshowMJ();

    });

})();
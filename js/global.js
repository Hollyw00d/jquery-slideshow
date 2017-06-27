(function() {
 
    $(function() {

        function slideshowMJ() {

            var getSlideshow = $('.slideshow_mj');
            var getSlideshowLi = getSlideshow.find('li');
            var slideshowImgs = getSlideshow.find('img');
            var sum = 0; 

            var previousSymbol = $('<a class="slideshow_mj_prev" href="#">&lt;</a>')
            var nextSymbol = $('<a class="slideshow_mj_next" href="#">&lt;</a>')

            previousSymbol.css('position', 'absolute');
            
            getSlideshow.prepend(previousSymbol);


            // Add data attributes to images
            getSlideshowLi.map(function() {
                
            });

        }
        slideshowMJ();

    });

})();
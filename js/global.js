(function() {
 
    $(function() {

        function slideshowMJ() {

            var getSlideshow = $('.slideshow_mj');
            var getSlideshowUl = getSlideshow.find('ul');
            var getSlideshowLi = getSlideshow.find('li');
            var slideshowImgs = getSlideshow.find('img');            

            var sum = 0; 

            var previousSymbol = $('<a class="slideshow_mj_prev" href="#">&lt;</a>')
            var nextSymbol = $('<a class="slideshow_mj_next" href="#">&gt;</a>')

            previousSymbol.css({
                position: 'absolute',
                fontSize: '20px',
                backgroundColor: '#fff',
                border: '1px solid #000',
                textDecoration: 'none',
                left: 0,
                marginBottom: '50px',
                marginTop: '50px',
                fontWeight: 'bold'
            });

            nextSymbol.css({
                position: 'absolute',
                fontSize: '20px',
                backgroundColor: '#fff',
                border: '1px solid #000',
                textDecoration: 'none',
                right: 0,
                marginBottom: '50px',
                marginTop: '50px',
                fontWeight: 'bold'
            });
            
            getSlideshow.prepend(previousSymbol);

            getSlideshow.prepend(nextSymbol);

            var getSlideshowLiLength = getSlideshowLi.length;
            

            previousSymbol.on('click', function(e) {
                e.preventDefault();

                var getSlideshowUlMarginLeft = Number(getSlideshowUl.css('margin-left').slice(0, -2));

                getSlideshowUl.animate({'margin-left': '+=204'});            
                
                console.log(getSlideshowUlMarginLeft);
                console.log(typeof getSlideshowUlMarginLeft);
                console.log(getSlideshowLiLength * 204);
                
            });

            nextSymbol.on('click', function(e) {
                e.preventDefault();
                getSlideshowUl.animate({'margin-left': '-=204'});
            });

        }
        slideshowMJ();

    });

})();
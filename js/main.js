

$(function(){
    var mobileActive = false;
	var desktopActive = false;
    
    $(document).ready(function () {

        $(document).on('click', '.nav-items a', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 600);

            $(".nav-menu").removeClass('open');
            event.preventDefault();
        });
 
        var controller = new ScrollMagic.Controller();

         var scene = new ScrollMagic.Scene({
            triggerElement: '.header',
            offset: 600,
            triggerHook: .6
        })
        .setClassToggle('.nav-menu', 'fixed')  
        .addTo(controller);


        $('.nav-items li').each(function (index, element) {
            
            var className = element.getAttribute("class");
             
            var controller1 = new ScrollMagic.Controller();

            var scene = new ScrollMagic.Scene({
                triggerElement: '#'+className,
                offset: 0,
                triggerHook: .6
            }) 
            .removeClassToggle('.nav-menu .active')
            .setClassToggle('.nav-menu .'+className, 'active')  
            .addTo(controller1);

        });
 
       

        $('.project-items, .testimonials-items').slick({
            dots: true,
            prevArrow: false,
            nextArrow: false
        });

        $("html").on("click", ".mobile-menu", function(){
            $(".nav-menu").toggleClass('open');
        }) 


       
 
       
        $('.services-list').each(function (index, element) {
            var listX1Tl = new TimelineMax();
            var childElement = $(element).find('.item');

            listX1Tl
                .staggerFrom(childElement, 0.5, { y: 20, autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');

            new ScrollMagic.Scene({ triggerElement: element, offset: -100 })
                .setTween(listX1Tl)
                .addTo(controller);
        });

        $('.tech-content').each(function (index, element) {
            var listX1Tl = new TimelineMax();
            var childElement = $(element).find('li');

            listX1Tl
                .staggerFrom(childElement, 0.5, { y: 10, autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');

            new ScrollMagic.Scene({ triggerElement: element, offset: -100 })
                .setTween(listX1Tl)
                .addTo(controller);
        });

         $('section').each(function (index, element) {
            var listX1Tl = new TimelineMax();
            var listX1T2 = new TimelineMax();
            var listX1T3 = new TimelineMax();
            var listX1T4 = new TimelineMax();

            var childElement1 = $(element).find('.left');
            var childElement2 = $(element).find('h2');
            var childElement3 = $(element).find('.title');
            var childElement4 = $(element).find('.right');

            listX1Tl.staggerFrom(childElement1, 0.5, { x: -20, autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');
            listX1T2.staggerFrom(childElement2, 0.5, { autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');
            listX1T3.staggerFrom(childElement3, 0.5, { autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');
            listX1T4.staggerFrom(childElement4, 0.5, { x: 20, autoAlpha: 0, ease: Power1.ease }, 0.3, 'scene1');

            new ScrollMagic.Scene({ triggerElement: element, offset: 100 })
                .setTween(listX1Tl) 
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: element, offset: 100 })
                .setTween(listX1T2) 
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: element, offset: 100 })
                .setTween(listX1T3) 
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: element, offset: 100 })
                .setTween(listX1T4) 
                .addTo(controller);
        });

        
        $('.top-to-bottom').each(function (index, element) {
            var blockY2Tl = new TimelineMax();
    
            blockY2Tl
                .from($(element), 1, { y: '+=100', opacity: 0, ease: Power1.easeNone });
    
            new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 })
                .setTween(blockY2Tl)
                .addTo(controller);
        });
            
        
    });
});
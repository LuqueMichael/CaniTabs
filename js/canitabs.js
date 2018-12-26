$(function () {
    $('#navbar-principal').find('.nav-link.product-list').on('mouseover', function () {
        $(this).addClass('active');
        $('#products-list-navbar').slideDown();
    });
    $('#products-list-navbar').on('mouseleave', function () {
        $('#navbar-principal').find('.nav-link.product-list').removeClass('active');
        $('#products-list-navbar').slideUp();
    });

    //CLICK COLLAPSE BUTTONS
    $('.show-more-click').on('click', function (e) {
        e.preventDefault();
        let direction = $(this).attr('data-direction') + '';
        let divId = $(this).attr('data-idDiv') + '';
        if ($(this).hasClass('collapsed')) {
            $(this).removeClass('collapsed');
            $(divId).slideUp();
        } else {
            $(this).addClass('collapsed');
            $(divId).slideDown();
        }

        console.log(divId);
    });

    //SMOOOTH SCROLL
    $('.test, .nav-link, .navbar-brand, .new-button').click(function () {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1500);
    });

    //SCROLL TOP
    var btnTop = $('#btn-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btnTop.addClass('show');
        } else {
            btnTop.removeClass('show');
        }
    });
    btnTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //SHOW MORE SLIDES
    $('.show-more-items').on('click',function(e){
        e.preventDefault();
        let $content = $(this).closest('ul');
        $content.find('li').not(':last').each(function(){
            let $slide1 = $(this).find('.slide-1');
            let $slide2 = $(this).find('.slide-2');

            if( $slide1.hasClass('show') ){
                $slide1.removeClass('show');  $slide2.addClass('show');
                //hide 
                $slide1.animate({ opacity: '0', height: '0', left: '250px', }, 500, function(){
                    $slide2.animate({ opacity: '1', height: '100%' });
                });
               
                /*
                $(this).find('.slide-1').removeClass('slide-hide'); //remove
                $(this).find('.slide-2').addClass('slide-hide'); //hide slide 2*/
            }else{
                /*$(this).find('.slide-2').removeClass('slide-hide'); //remove
                $(this).find('.slide-1').addClass('slide-hide'); //hide slide 2*/
                $slide2.removeClass('show');  $slide1.addClass('show');
                //hide
                $slide2.animate({ opacity: '0', height: '0' }, 500, function(){
                    $slide1.animate({ opacity: '1', height: '100%' });
                });
                
            }
        });
    });


    //
});
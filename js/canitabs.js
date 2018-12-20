$(function(){
    $('#navbar-principal').find('.nav-link.product-list').on('mouseover',function(){
        $(this).addClass('active');
        $('#products-list-navbar').slideDown();
    });
    $('#products-list-navbar').on('mouseleave',function(){
        $('#navbar-principal').find('.nav-link.product-list').removeClass('active');
        $('#products-list-navbar').slideUp();
    });

    //CLICK COLLAPSE BUTTONS
    $('.show-more-click').on('click',function(e){
        e.preventDefault();
        let direction = $(this).attr('data-direction') + '';
        let divId = $(this).attr('data-idDiv') + '';
        if( $(this).hasClass('collapsed') ){
            $(this).removeClass('collapsed');
            $(divId).slideUp();
        }else{
            $(this).addClass('collapsed');
            $(divId).slideDown();
        }

        console.log(divId);
    });


    //
});
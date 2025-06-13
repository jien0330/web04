jQuery(document).ready(function(){
    $('nav>ul>li').on('mouseenter', function() {
        $(this).find('.submenu').stop().fadeIn(200);
        $('#bg').stop().fadeIn(200);
    });

    $('nav>ul>li').on('mouseleave', function() {
        $(this).find('.submenu').stop().fadeOut(200); 
        $('#bg').stop().fadeOut(200); 
    });

    var t = 0;
    function slide(){
        if(t<3){
            t++;
        }else{
            t = 0;
        }

        $('.imgslide ul li').fadeOut()
        $('.imgslide ul li').eq(t).fadeIn()
    }
    setInterval(slide, 3000)
})
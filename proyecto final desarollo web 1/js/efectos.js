$(document).ready(function(){
    $('.nav li a').each(function(index, elemento){
        $(this).css({
        'top':'-200px'
         });
        $(this).animate({
            top:'0'
        },2000 +(index*500))
    })

    if($(window).width()>800){

        $('header .title').animate({
            opacity:1,
            marginTop:'-52px'
        }, 1500)
    }

})
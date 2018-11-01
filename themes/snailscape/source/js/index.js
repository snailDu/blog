$(function(){
    $('.banner>a').hover(function(){
        $(this).addClass('blur');
        $(this).find('dl').css('margin','300px 60px 0');
    },function(){
        $('.blur').removeClass('blur');
        $(this).find('dl').removeAttr('style');
    });
});
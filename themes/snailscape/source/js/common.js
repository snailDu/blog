$(function () {
    $(window).scroll(function () {
        var dobody = document.documentElement.scrollTop == 0 ? $('body') : $(document.documentElement);
        if(dobody.scrollTop()!==0){
            $('.nav').css('background','rgba(100,100,100,.4)');
        }else {
            $('.nav').removeAttr('style');
        }
    });
});

$(function(){
    $('.nav-work-text,.nav-life-text').hover(function(){
        $(this).prev().css({'left':0,'opacity':'1'});
        (function(that){
            timer = setTimeout(function(){
                $(that).css('color','#16a085');
            },480)
        }(this));
    },function(){
        $(this).css('color','#fff');
        $(this).prev().removeAttr('style');
        if(timer){
            clearTimeout(timer);
        }
    })
});
$(function(){
   $('.nav-me-box').hover(function(){
       $('.nav-me-text').css('top','0');
   },function(){
       $('.nav-me-text').removeAttr('style');
   });
});
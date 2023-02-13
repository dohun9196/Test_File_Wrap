$(function () {

    $('.main_side_nav .page_nav li a').click(function () {
        // $('.main_side_nav .page_nav li a').removeClass('on');
        // $(this).addClass('on');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;


    });
});
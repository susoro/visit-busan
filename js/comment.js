$(document).ready(function () {

    // 상단메뉴
    $(".dp2,.dp2-bg").hide();

    $(".gnb>li").mouseover(function () {
        $(".dp2,.dp2-bg").stop().slideDown();
    });
    $(".gnb>li").mouseout(function () {
        $(".dp2,.dp2-bg").stop().slideUp();
    });

    // 메인슬라이드
    $(".mv").bxSlider({
        auto: true
    });

    $(".banner-icon").bxSlider({
        auto: true,
        pager: false,
        slideWidth: 180,
        maxSlides: 6,
        moveSlides: 1,
        speed: 400
    });
    $('.bx-prev').on('click', function () {
        mySlider.goToPrevSlide();
        return false;
    });
    $('.bx-next').on('click', function () {
        mySlider.goToNextSlide();
    });
});
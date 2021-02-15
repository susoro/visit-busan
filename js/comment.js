$(document).ready(function () {
        // 맨위로가기 버튼
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#gotop").fadeIn();
            } else {
                $("#gotop").fadeOut();
            }
        });
    
        $("#gotop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

        
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

    // 관공서슬라이드
    $(".banner-icon").bxSlider({
        auto: true,
        pager: false,
        slideWidth: 180,
        maxSlides: 6,
        moveSlides: 1,
        speed: 400
    });
});
    //관공서 돌리기
    $('.footer-banner').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        auto: true
    });
    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.footer-banner').slick('slickGoTo', slideno - 1);
    });
$(document).ready(function () {
    $(document.body).removeClass('hide');
    
    $('.slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.button').click(function () {
        window.open('https://calendar.google.com/calendar/ical/0ae6b0ac465bdaf7e1f15372af6d0a704c230e00f43d743938ef51873cb06ea0%40group.calendar.google.com/public/basic.ics');
    });
});

$(document).ready(function () {
    $('.slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
    });

    $('.button').click(function () {
        window.open('https://calendar.google.com/calendar/ical/0ae6b0ac465bdaf7e1f15372af6d0a704c230e00f43d743938ef51873cb06ea0%40group.calendar.google.com/public/basic.ics');
    });
});

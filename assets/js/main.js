// Добавить плавную прокрутку до всех ссылок
$("a").on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию
        event.preventDefault();

        // Хранить хэш
        var hash = this.hash;

        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
            window.location.hash = hash;
        });
    } // Конец, если
});
$('.mobile-hamburger').click(function() {
    $('#hamburger-id').toggleClass('is-active');
    $('.mobile-menu').toggleClass('mb-active');
    $('.mobile-menu > li').css('display', 'block')
})
var w = $('body').width()
if (w < 768) {
    $('.about-tatoo-filer > a').css('display', 'none');
    $('.about-makeup-filer > a').css('display', 'none');
}

// TATTOO - SLIDER //
var slider1 = $('#slider1');
var slider2 = $('#slider2');
var slider3 = $('#slider3');
var sliderBG1 = $('#slider1-bg');
var sliderBG2 = $('#slider2-bg');
var sliderBG3 = $('#slider3-bg');
var slideNow = 1;
slideNow = 2;
nextSlide()

function nextSlide() {
    if (slideNow == 1) {
        // IMG
        slider2.removeClass("imageOut");
        slider2.css('display', 'none');
        slider3.addClass("imageOut");
        slider3.removeClass("imageIn");
        slider1.css('display', 'flex');
        slider1.addClass("imageIn");
        // BG 
        sliderBG3.addClass('sliderOut').css('display', 'none').removeClass('sliderIn')
        sliderBG1.addClass('sliderIn').css('display', 'inline').removeClass('sliderOut')
        slideNow = 2;
    } else if (slideNow == 2) {
        //IMG
        slider3.css('display', 'none');
        slider3.removeClass("imageOut");
        slider2.css('display', 'flex');
        slider1.addClass("imageOut");
        slider1.removeClass("imageIn");
        slider2.addClass("imageIn");
        //BG
        sliderBG1.addClass('sliderOut').css('display', 'none').removeClass('sliderIn')
        sliderBG2.addClass('sliderIn').css('display', 'inline').removeClass('sliderOut')
        slideNow = 3;
    } else if (slideNow == 3) {
        //IMG
        slider1.css('display', 'none');
        slider1.removeClass("imageOut");
        slider2.addClass("imageOut");
        slider2.removeClass("imageIn");
        slider3.css('display', 'flex');
        slider3.addClass("imageIn");
        //BG
        sliderBG2.addClass('sliderOut').css('display', 'none').removeClass('sliderIn')
        sliderBG3.addClass('sliderIn').css('display', 'inline').removeClass('sliderOut')
        slideNow = 1;
    }
    console.log(slideNow)
}
setInterval(nextSlide, 4000);
$('.s-left').click(function() {
    nextSlide();
});
$('.s-right').click(function() {
    nextSlide();
});

// SERVICES BUTTONS
$("#serv-makeup").click(function() {
    $("#serv-tattoo").removeClass("services-buttons-active");
    $("#serv-makeup").addClass("services-buttons-active");
    $('.main-services-viewport').addClass('services-viewport-left')
    $('.main-services-viewport').removeClass('services-viewport-right')
});
$("#serv-tattoo").click(function() {
    $("#serv-makeup").removeClass("services-buttons-active");
    $("#serv-tattoo").addClass("services-buttons-active");
    $('.main-services-viewport').addClass('services-viewport-right')
    $('.main-services-viewport').removeClass('services-viewport-left')
});
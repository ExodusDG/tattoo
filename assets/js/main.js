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
    $('.mobile-menu ul > li').toggleClass('mobile-menu-open')
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

function createSlider() {

}
// SERVICES BUTTONS
function servButton() {
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
}

function createMap() {
    $('.contacts').prepend(`<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4490.842928754301!2d37.53729527952037!3d55.751180446276!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1610882291256!5m2!1sru!2sua" width="800" height="600" frameborder="0" style="border:0;"
    allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
}
setTimeout(createMap, 1000);
setTimeout(servButton, 1000);

$('.galleryContainer').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.gallery-left'),
    nextArrow: $('.gallery-right')
});

$('#sorter-t-1').click(function() {
    $('.tatoo-info > div:not(.about-tattoo)').fadeOut();
    $('.about-tattoo').fadeIn()
});
$('#sorter-t-2').click(function() {
    $('.tatoo-info > div:not(.before-tattoo)').fadeOut();
    $('.before-tattoo').fadeIn()
});
$('#sorter-t-3').click(function() {
    $('.tatoo-info > div:not(.after-tattoo)').fadeOut();
    $('.after-tattoo').fadeIn()
});
$('#sorter-t-4').click(function() {
    $('.tatoo-info > div:not(.done-tattoo)').fadeOut();
    $('.done-tattoo').fadeIn()
});
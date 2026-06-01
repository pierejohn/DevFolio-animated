new WOW().init();


var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

let navHeight = $('.navbar').outerHeight(true);
console.log(navHeight);

let offset = $('#About').offset().top-navHeight;
let offsetServices = $('#Services').offset().top-navHeight;
let offsetPortfolio = $('#Portfolio').offset().top-navHeight;
let offsetContact = $('#Contact').offset().top-navHeight;


$('#home-nav').addClass('navbar-nav-white');
$(window).scroll(function () {

    offset = $('#About').offset().top-navHeight;
    offsetServices = $('#Services').offset().top-navHeight;
    offsetPortfolio = $('#Portfolio').offset().top-navHeight;
    offsetContact = $('#Contact').offset().top-navHeight;

    let Scroll = $(window).scrollTop();
    // console.log(Scroll);  
    // console.log(offset);  
    if (Scroll >= offset) {
        $('.navbar').css('background-color', 'white');
        $('.navbar').find('a').css('color', 'black');
        $('#DevFolio').css('color', 'black');

        $('#navbar-nav').addClass('navbar-nav-black');

    } else {
        $('.navbar').css('background-color', 'black');
        $('.navbar-nav').find('a').css('color', 'white');
        $('#DevFolio').css('color', 'white');

        $('#navbar-nav').removeClass('navbar-nav-black');


    }

    scrollBehave(Scroll, offset)



});


$('.scrollUp').click(function () {
    $(window).scrollTop(0)
}
)

function scrollBehave(Scroll, offset) {

    if (Scroll <= offset) {
        $('.scrollUp').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });


    } else if (Scroll >= offset && Scroll < offsetServices) {
        $('.nav-item').removeClass('navbar-nav-active-black');
        $('#home-nav').removeClass('navbar-nav-white');
        $('#home-nav').addClass('navbar-nav-black');
        $('#About-nav').addClass('navbar-nav-active-black');
        $('.scrollUp').fadeIn(500).addClass('d-flex');
    } else if (Scroll >= offsetServices && Scroll < offsetPortfolio) {
        $('.nav-item').removeClass('navbar-nav-active-black');
        $('#Services-nav').addClass('navbar-nav-active-black');
    } else if (Scroll >= offsetPortfolio && Scroll < offsetContact) {
        $('.nav-item').removeClass('navbar-nav-active-black');
        $('#Portoflio-nav').addClass('navbar-nav-active-black');
    } else if (Scroll >= offsetContact) {
        $('.nav-item').removeClass('navbar-nav-active-black');
        $('#Contact-nav').addClass('navbar-nav-active-black');
    } if (Scroll >= 0) {
        $('#home-nav').addClass('navbar-nav-white');
    }
}
// $('.nav-item').click(function () { 


//      $(this).offset().top+0.001

// });
$(document).ready(function () {
    $('.loading').fadeOut(500, function () {
        $('body').css('overflow', 'auto');
    })

})
let colors = ['#0078ff', 'rgba(173, 23, 23, 0.726)', 'rgba(23, 173, 60, 0.726)', 'rgba(235, 197, 29, 0.726)', 'rgba(185, 17, 201, 0.726)']


$('.palete span').each(function (index, element) {
    $(element).css('background-color', colors[index])
});

function ChangeColorSeting(color) {
    $(':root').css('--blue-color', color)
    $('.progress-bar').css('background-color', color)
    $('h2').css('color', color)
}

if (localStorage.getItem('color')) {
    ChangeColorSeting(localStorage.getItem('color'))

    //     $(':root').css('--blue-color',localStorage.getItem('color'))
    // $('.progress-bar').css('background-color',localStorage.getItem('color'))
    // $('h1').css('color',localStorage.getItem('color'))

}


$('.palete span').click(function () {
    new WOW().init();
    ChangeColorSeting($(this).css('background-color'))
    localStorage.setItem('color', $(this).css('background-color'))
$('#changeColor').animate({ 'left': -`${width}` }, 500)


});

let width = $('#setting').outerWidth(true)
$('#changeColor').animate({ 'left': -`${width}` }, 0)

$('#settingsIcon').click(function () {
    width = $('#setting').outerWidth(true)
    if ($('#changeColor').css('left') == '0px') {
        $('#changeColor').animate({ 'left': -`${width}` }, 500)
    } else {
        $('#changeColor').animate({ 'left': '0px' }, 500)
    }

});

$('#navbar-nav .nav-link').click(function (e) { 
    

e.preventDefault();
  console.log($($(this).attr('href')).outerHeight(true));
    let scrollTo=$($(this).attr('href')).offset().top
scrollTo-=navHeight-2
    window.scrollTo({top: scrollTo});
    
    
});




// $('#navbar-nav .nav-link').click(function (e) { 
//     e.preventDefault();

//     let scrollTo = $($(this).attr('href')).offset().top - navHeight + 2;
// $('html').animate({ scrollTop: '1000px' }, 500);
//     // window.scrollTo({top: scrollTo,behavior: "smooth"});
// });



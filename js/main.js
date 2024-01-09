var citiesArray = [
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Нижний Новгород'
    ];
    
    function addCitiesToDropdown() {
    var dropdown = document.getElementById("cities");
    for (var i = 0; i < citiesArray.length; i++) {
    var option = document.createElement("option");
    option.text = citiesArray[i];
    dropdown.appendChild(option);
    }
    }
    addCitiesToDropdown();




// hamburger Qj

    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('#nav-bar').toggleClass('nav-bar--open');
        $('body, html').toggleClass('none-scroll');
      });





// swiper
var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   when window width is >= 320px
  //   820: {
  //     navigation: false,
  //   },
  // },
});
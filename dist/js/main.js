$(function () {

  /*input mask*/
  $(".input-mask").inputmask("+7(999)999-99-99");
  $(".form-service__input-mask").inputmask("+7(999)999-99-99");
  $(".offers-modal-form__input-mask").inputmask("+7(999)999-99-99");
  $(".popup-form__input-mask").inputmask("+7(999)999-99-99");

  /* burger */
  var toggles = $(".navbar-toggle");
  toggles.on("click", function() {
    $(this).toggleClass('navbar-toggle_close');
  });

  /*main slider*/
  $('.js-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplaySpeed: 5000,
    //autoplay: true
  });

  /*modal*/
  var modalVerticalCenterClass = ".modal";
  function centerModals($element) {
    var $modals;
    if ($element.length) {
      $modals = $element;
    } else {
      $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each( function(i) {
      var $clone = $(this).clone().css('display', 'block').appendTo('body');
      var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
      top = top > 0 ? top : 0;
      $clone.remove();
      $(this).find('.modal-content').css("margin-top", top);
    });
  }
  $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
    centerModals($(this));
  });
  $(window).on('resize', centerModals);

  /*slider-brands*/
  $('.js-brands').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $(".js-slider-prev").on("click", function() {
    $('.js-brands').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('.js-brands').slick("slickNext");
  });

  /*slider gallery*/

  $('.js-gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $(".js-slider-prev").on("click", function() {
    $('.js-gallery').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('.js-gallery').slick("slickNext");
  });

  /*js all brands*/

  $('.js-all-brands').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: false
  });
  $(".js-slider-prev").on("click", function() {
    $('.js-all-brands').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('.js-all-brands').slick("slickNext");
  });



  /*form valid*/
  $('.footer-form').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });

  /*slide form*/
  $('.slider-form').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });

  /*slide form two*/
  $('.slider-form-two').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });

  /*slide form three*/
  $('.slider-form-three').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });

  $('.offers-modal-form-one').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });
  $('.offers-modal-form-two').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });
  $('.offers-modal-form-three').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });
  $('.offers-modal-form-four').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });
  $('.offers-modal-form-five').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });
  $('.offers-modal-form-six').validate({
    rules: {
      phone: {
        required: true,
      }
    },
    messages: {
      phone: {
        required: "Введите Ваше телефон"
      }
    }
  });

  $('.form-service__form').validate({
    rules: {
      auto: {
        required: true,
      },
      work: {
        required: true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      auto: {
        required: "Выберите авто"
      },
      work: {
        required: "Выберите тип работы"
      },
      phone: {
        required: "Введите ваш телефон"
      }
    }
  });

  $('.popup-form-form').validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "Введите Ваше имя"
      },
      phone: {
        required: "Введите Ваш телефон"
      }
    }
  });

  $('.contacts-form__form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      }
    },
    messages: {
      name: {
        required: "Введите Ваше Имя"
      },
      email: {
        required: "Введите Ваш email",
        email: "Это не корректный email"
      },
      message: {
        required: "Введите Ваше сообщение"
      }
    }
  });

  /*button to top*/
  var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
//grab the "back to top" link
    $back_to_top = $('.cd-top');

//hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('cd-fade-out');
    }
  });
//smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
  /*end button to top*/

  /*form-parts*/
  /*form-parts dropdown-brands*/
  $('.form-parts__input_brands').on('click', function () {
    $('.form-parts__dropdown-brands').slideToggle();
    $('.form-parts__dropdown-model').slideUp();
    $('.form-parts__dropdown-year').slideUp();
    $('.form-parts__dropdown-modification').slideUp();
    $('.form-parts__dropdown-work').slideUp();
  })
  $('.dropdown-brands-item').bind('click',function(){
    var val = $('.form-parts__input_brands').val();
    var brand = $(this).text();
    $('.form-parts__input_brands').val(val + brand);
    $('.form-parts__dropdown-brands').slideUp();
  });
  /*end form-parts dropdown-brands*/
  /*form-parts dropdown-model*/
  $('.form-parts__input_model').on('click', function () {
    $('.form-parts__dropdown-model').slideToggle();
    $('.form-parts__dropdown-brands').slideUp();
    $('.form-parts__dropdown-year').slideUp();
    $('.form-parts__dropdown-modification').slideUp();
    $('.form-parts__dropdown-work').slideUp();
  })
  $('.dropdown-model-item').bind('click',function(){
    var val = $('.form-parts__input_model').val();
    var brand = $(this).text();
    $('.form-parts__input_model').val(val + brand);
    $('.form-parts__dropdown-model').slideUp();
  });
  /*end form-parts dropdown-model*/
  /*form-parts dropdown-year*/
  $('.form-parts__input_year').on('click', function () {
    $('.form-parts__dropdown-year').slideToggle();
    $('.form-parts__dropdown-brands').slideUp();
    $('.form-parts__dropdown-model').slideUp();
    $('.form-parts__dropdown-modification').slideUp();
    $('.form-parts__dropdown-work').slideUp();
  })
  $('.dropdown-year-item').bind('click',function(){
    var val = $('.form-parts__input_year').val();
    var brand = $(this).text();
    $('.form-parts__input_year').val(val + brand);
    $('.form-parts__dropdown-year').slideUp();
  });
  /*end form-parts dropdown-year*/
  /*form-parts dropdown-modification*/
  $('.form-parts__input_modification').on('click', function () {
    $('.form-parts__dropdown-modification').slideToggle();
    $('.form-parts__dropdown-brands').slideUp();
    $('.form-parts__dropdown-model').slideUp();
    $('.form-parts__dropdown-year').slideUp();
    $('.form-parts__dropdown-work').slideUp();
  })
  $('.dropdown-modification-item').bind('click',function(){
    var val = $('.form-parts__input_modification').val();
    var brand = $(this).text();
    $('.form-parts__input_modification').val(val + brand);
    $('.form-parts__dropdown-modification').slideUp();
  });
  /*end form-parts dropdown-modification*/
  /*form-parts dropdown-work*/
  $('.form-parts__input_work').on('click', function () {
    $('.form-parts__dropdown-work').slideToggle();
    $('.form-parts__dropdown-brands').slideUp();
    $('.form-parts__dropdown-model').slideUp();
    $('.form-parts__dropdown-year').slideUp();
    $('.form-parts__dropdown-modification').slideUp();
  })
  $('.dropdown-works-item').bind('click',function(){
    var val = $('.form-parts__input_work').val();
    var brand = $(this).text();
    $('.form-parts__input_work').val(val + brand);
    $('.form-parts__dropdown-work').slideUp();
  });
  /*end form-parts dropdown-work*/

  /*reset form*/
  $('.reset-form-parts').on('click', function () {

    $(".form-parts__form")[0].reset();
    $('.form-parts__dropdown-work').slideUp();
    $('.form-parts__dropdown-brands').slideUp();
    $('.form-parts__dropdown-model').slideUp();
    $('.form-parts__dropdown-year').slideUp();
    $('.form-parts__dropdown-modification').slideUp();
    $('.form-parts__input').css({
      'background':'#fff'
    });
  });

  /*bg input form  service*/

  $('.form-parts__input').on('click', function () {
    $(this).css({
      'background':'#ebeaea'
    });
  });

  /*show result
  $('.form-parts__input_work').on('input', function () {
    var valInputWork = $(this).val();
    if (valInputWork.length >= 5) {
      $('.form-parts__result-wrapper').slideDown();
    } else {
      $('.form-parts__result-wrapper').slideUp();
    }
    console.log(valInputWork.length);
  })
   */
  /*     end-form-parts
  ==========================*/
  /*form service dropdown-brands*/
  $('.form-service__input_brands').on('click', function () {
    $('.form-service__dropdown-brands').slideToggle();
    $('.form-service__dropdown-work').slideUp();
  })

  $('.dropdown-brands-item').bind('click',function(){
    var val = $('.form-service__input_brands').val();
    var brand = $(this).text()
    $('.form-service__input_brands').val(val + brand);
    $('.form-service__dropdown-brands').slideUp();
  });
  /*end form service dropdown-brands*/

  /*form service dropdown-work*/
  $('.form-service__input_work').on('click', function () {
    $('.form-service__dropdown-work').slideToggle();
    $('.form-service__dropdown-brands').slideUp();
  })

  $('.dropdown-work-item').bind('click',function(){
    var val = $('.form-service__input_work').val();
    var work = $(this).text()
    $('.form-service__input_work').val(val + work);
    $('.form-service__dropdown-work').slideUp();
  });
  /*end form service dropdown-work*/

  /*form service dropdown-phone*/
  $('.form-service__input_phone').on('click', function () {
    $('.form-service__dropdown-work').slideUp();
    $('.form-service__dropdown-brands').slideUp();
  })

  /*end form service dropdown-phone*/

  /*reset form*/
  $('.reset-form').on('click', function () {
    $(".form-service__form")[0].reset();
    $('.form-service__input').css({
      'background':'#fff'
    });
  });

  /*bg input form  service*/

  $('.form-service__input').on('click', function () {
    $(this).css({
      'background':'#ebeaea'
    });
  });

  /*show button service*/
  $('.form-service__input_phone').on('keyup', function () {
    var valInputPhone = $(this).val();
    if (valInputPhone.length == 16) {
      $('.form-service__submit').slideDown();
    } else {
      $('.form-service__submit').slideUp();
    }
  })


  /*offers main madal-one*/
  $('.modal-one-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-one-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-one-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });

  /*offers main madal-two*/
  $('.modal-two-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-two-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-two-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });

  /*offers main madal-three*/
  $('.modal-three-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-three-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-three-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });

  /*offers main madal-four*/
  $('.modal-four-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-four-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-four-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });

  /*offers main madal-five*/
  $('.modal-five-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-five-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-five-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });

  /*offers main madal-six*/
  $('.modal-six-link').on('click', function (event){
    event.preventDefault();

    $('.offers-list').fadeOut();
    $('.modal-six-overlay').fadeIn();
  })
  $('.offers-modal__close').on('click', function (event){
    event.preventDefault();

    $('.modal-six-overlay').fadeOut();
    $('.offers-list').fadeIn();
  });



})

/*google map*/
function initialize() {
  var myLatlng = new google.maps.LatLng(55.604756, 37.019425);
  var myOptions = {
    zoom: 15,
    scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    styles: [
      {
        "stylers": [
          {
            "saturation": -100
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": 50
          },
          {
            "gamma": 0
          },
          {
            "hue": "#50a5d1"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#333333"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
          {
            "weight": 0.5
          },
          {
            "color": "#333333"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
          {
            "gamma": 1
          },
          {
            "saturation": 50
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("map_container"), myOptions);

  var markerImage = new google.maps.MarkerImage(
    'dist/images/map-icon.png',
    new google.maps.Size(38, 47),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 38)
  );

  var marker = new google.maps.Marker({
    icon: markerImage,
    position: myLatlng,
    map: map,
    title: "АвтоВизит"
  });
};
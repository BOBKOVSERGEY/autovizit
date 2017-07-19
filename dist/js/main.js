$(function () {
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
    slidesToScroll: 1,
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
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
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
    $('.js-brands').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('.js-brands').slick("slickNext");
  });

  /*input mask*/
  $(".input-mask").inputmask("+7(999)999-99-99");

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
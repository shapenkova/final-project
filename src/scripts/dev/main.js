(function() {
   "use strict";

   //навигационное меню
   const root = document.documentElement;
   const navToggle = document.querySelector("#js-navToggle");
   navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
   });

   //слайдер №1 на декстопе
   const swiper1 = document.querySelectorAll(".js-swiper1");
      swiper1.forEach(function (swpr) {
         new Swiper (swpr, {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 2,
            allowTouchMove: true,
            grabCursor: true,
            keyboard: {
               enabled: true,
            },
            pagination: {
               el: ".swiper-pagination",
               clickable: true,
               renderBullet: function (index, className) {
                  let customIndex = [82, 85, 87, 88, 89];
                  return '<span class="' + className + '">' + customIndex[index] + "</span>";
               },
            },
            on: {
               slideChange: function () {
                  let year = document.querySelector('.collection__button-year');
                  let currentSlideIndex = this.activeIndex;
                  if (currentSlideIndex === 0) {
                     year.textContent = '1982'; 
                  } else if (currentSlideIndex === 1) {
                     year.textContent = '1985'; 
                  } else if (currentSlideIndex === 2) {
                     year.textContent = '1987'; 
                  } else if (currentSlideIndex === 3) {
                     year.textContent = '1988'; 
                  } else if (currentSlideIndex === 4) {
                     year.textContent = '1989';
                  }
               }
            }
      });
   });

   //слайдер №2 на декстопе
   const paginationText = [
      "Lucky Strike, 1987",
      "Statue of Liberty, 1986",
      "Andy Mouse, 1986",
      "Crack Down, 1986",
      "Paris poster, 1986"
   ];

   $('#js-sliderSlick').slick({
      slidesToShow: 4,
      centerMode: true,
      variableWidth: true,
      initialSlide: 2,
      centerPadding: '0px',
      speed: 1000,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
         {
            breakpoint: 1660,
            settings: {
               slidesToShow: 3,
               
            }
         },
         {
            breakpoint: 1020,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });
      
   $('#js-sliderSlick').on('afterChange', function(event, slick, currentSlide){
      $('#paginationText').text(paginationText[currentSlide]);
   });


   //продолжить)
   
//    function updateSliderPosition() {
//       const sliderd = $(".slick-track");
//       const items = sliderd.children(); // Получаем элементы слайдера
//       console.log(items)
//       if ($(window).width() <= 1660) {
//           if (items.length === 14) {
//               // Перемещаем пятый элемент перед первым
//               items.eq(5).insertBefore(items.eq(3));
//           }
//       } else {
//           // Если ширина больше 1340px, возвращаем порядок слайдов в исходное состояние, если необходимо
//           // Здесь можно реализовать логику для возврата слайдов в исходное состояние
//       }
//   }

//   // Запускаем функцию при загрузке страницы и при изменении размера окна
//   $(document).ready(function() {
//       updateSliderPosition();
//       $(window).resize(function() {
//           updateSliderPosition();
//       });
//   });



   //карта
   const contactsMap = document.querySelector("#js-contactsMap");
   if (contactsMap) {
      const mapStyles = [{
            elementType: "geometry",
            stylers: [
               {
                  color: "#242f3e"
               }
            ]
         },
         {
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#746855"
               }
            ]   
         },
         {
            elementType: "labels.text.stroke",
            stylers: [
               {
                  color: "#242f3e"
               }
            ]
         },
         {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#d59563"
               }
            ]
         },
         {
            featureType: "poi",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#d59563"
               }
            ]
         },
         {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
               {
                  color: "#263c3f"
               }
            ]
         },
         {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#6b9a76"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "geometry",
            stylers: [
               {
                  color: "#38414e"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
               {
                  color: "#212a37"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#9ca5b3"
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
               {
                  color: "#746855"
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
               {
                  color: "#1f2835"
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#f3d19c"
               }
            ]
         },
         {
            featureType: "transit",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
            {
                  color: "#2f3948"
               }
            ]
         },
         {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
               { 
               color: "#d59563"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "geometry",
            stylers: [
               {
                  color: "#ABBBF5"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#515c6d"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
               {
                  color: "#17263c"
            }
            ]
         }
      ]; //JSON со стилями
      const mapCenter = new google.maps.LatLng(56.490274731442135,84.949110617926);
      const mapOptions = {
         center: mapCenter,
         disableDefaultUI: true,
         draggable: true,
         gestureHandling: "cooperative",
         scrollwheel: false,
         styles: mapStyles,
         zoom: 15,
         zoomControl: true,
         zoomControlOptions: {
         position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
      };
      const map = new google.maps.Map(contactsMap, mapOptions);

      const point = new google.maps.LatLng(56.4902500913657,84.94910993794092);
      const mapPin = new google.maps.MarkerImage(
         "/assets/images/mark.jpg",
         new google.maps.Size(74, 63), //size
         new google.maps.Point(0, 0),  //origin point
         new google.maps.Point(0, 63)  //offset point
      );
      new google.maps.Marker({
         position: point,
         map: map,
         icon: mapPin,
         title: "Collection"
      });
   }

   //Фильтр на странице Каталог
   const rangeSlider = document.querySelector('#range-slider');

   if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
      start: [650, 5000],
		connect: true,
		step: 1,
      range: {
			'min': [0],
			'max': [5670]
      }
	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
   }

   //слайдер-детальная страница
   const swipers = document.querySelectorAll(".js-swiper");
   swipers.forEach(function (swpr) {
      new Swiper(swpr, {
         updateOnWindowResize: true,
         slidesPerView: "auto",
         freeMode: true,
         spaceBetween: 0,
         speed: 500,
         grabCursor: true,
         allowTouchMove: true,
         keyboard: {
            enabled: true,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
         },
         navigation: {
            nextEl: ".swiper-arrow-next",
            prevEl: ".swiper-arrow-prev",
            disabledClass: "arrow--disabled"
         }
      });
   });

   //попап
   const eventPP = document.querySelector("#js-productPP");
   if (eventPP) {
      const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

      const closeEventPP = function (event) {
         function close() {
            document.removeEventListener("keyup", closeEventPP);
            eventPP.removeEventListener("click", closeEventPP);
            root.classList.remove("show-product-pp");
         }
         switch (event.type) {
            case "keyup":
               if (event.key === "Escape" || event.keyCode === 27) close();
               break;
            case "click":
               if (
                  event.target === this ||
                  event.target.classList.contains("js-ppCloseBtn")
               )
               close();
               break;
         }
      };
      eventOpenBtn.addEventListener("click", function () {
         root.classList.add("show-product-pp");
         document.addEventListener("keyup", closeEventPP);
         eventPP.addEventListener("click", closeEventPP);
      });
   }


   const item1 = $(".nav-icon1");
   const item2 = $(".nav-icon2");
   
   if (item1.length) {
      item1.on("mouseover", function() {
         item1.css("fill", "#0154bb");
      });
      item1.on("mouseout", function() {
         item1.css("fill", "");
      });
   }
   if (item2.length) {
      item2.on("mouseover", function() {
         item2.css("fill", "#0154bb"); 
      });
      item2.on("mouseout", function() {
         item2.css("fill", "");
      });
   }

   

   const filterBtn = document.getElementById("js-btnFilter");
   const filterPopup = document.getElementById("filterPopup");
   const closePopup = document.getElementById("js-closePopup");

   // Открываем попап при нажатии на кнопку "Фильтр"
   filterBtn.addEventListener("click", function() {
      filterPopup.style.display = "flex"; // Показываем попап
   });

   // Закрываем попап при нажатии на кнопку закрытия
   closePopup.addEventListener("click", function() {
      filterPopup.style.display = "none"; // Скрываем попап
   });

   // Закрываем попап при клике вне области контента (опционально)
   window.addEventListener("click", function(event) {
      if (event.target === filterPopup) {
         filterPopup.style.display = "none"; // Скрываем попап
      }
   });
}) ();
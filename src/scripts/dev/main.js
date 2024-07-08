(function() {
   "use strict";

   //навигационное меню
   const root = document.documentElement;
   const navToggle = document.querySelector("#js-navToggle");
   navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
   });

   //слайдер
   


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
                  color: "#17263c"
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
         title: "POSTER Collection"
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
}) ();
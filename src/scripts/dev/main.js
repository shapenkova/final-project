(function() {
   "use strict";

   //навигационное меню
   const root = document.documentElement;
   const navToggle = document.querySelector("#js-navToggle");
   navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
   });

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

      function getMarkerImage() {
         const screenWidth = window.innerWidth;

         if (screenWidth > 1340) {
               return new google.maps.MarkerImage(
                  "/assets/images/mark-1.png",
                  new google.maps.Size(74, 63),  
                  new google.maps.Point(0, 0),  
                  new google.maps.Point(0, 63)  
               );
         } else if (screenWidth <= 768) {
               return new google.maps.MarkerImage(
                  "/assets/images/mark-3.png",
                  new google.maps.Size(37, 34),  
                  new google.maps.Point(0, 0),   
                  new google.maps.Point(0, 34) 
               );
         } else {
               return new google.maps.MarkerImage(
                  "/assets/images/mark-2.png",
                  new google.maps.Size(67, 57), 
                  new google.maps.Point(0, 0),  
                  new google.maps.Point(0, 57) 
               );
         }
      }

      const marker = new google.maps.Marker({
            position: point,
            map: map,
            icon: getMarkerImage(),
            title: "Collection"
      });

      window.addEventListener('resize', () => {
            marker.setIcon(getMarkerImage());
      });
   }

   const elem1 = $('.page-header__nav--heart');
   const elem2 = $('.page-header__nav--basket');

   elem1.on('click', function() {
      if (elem1) {
         elem1.css('fill', '#1066d0');
         elem1.css('color', '#1066d0');
      }
   });
   elem2.on('click', function() {
      if (elem2) {
         elem2.css('fill', '#1066d0');
         elem2.css('color', '#1066d0');
      }
   });
   //иконки в header
   // const item1 = $(".page-header__nav--heart");
   // const item2 = $(".page-header__nav--basket");
   
   // if (item1.length) {
   //    item1.on("mouseover", function() {
   //       item1.css("fill", "#0154bb");
   //    });
   //    item1.on("mouseout", function() {
   //       item1.css("fill", "");
   //    });
   // }
   // if (item2.length) {
   //    item2.on("mouseover", function() {
   //       item2.css("fill", "#0154bb"); 
   //    });
   //    item2.on("mouseout", function() {
   //       item2.css("fill", "");
   //    });
   // }

}) ();
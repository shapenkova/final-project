(function() {
   "use strict";

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
               slidesToShow: 2,
               
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
}) ();
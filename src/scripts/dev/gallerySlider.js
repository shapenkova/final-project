(function() {
   "use strict";

   //навигационное меню
   const root = document.documentElement;
   const navToggle = document.querySelector("#js-navToggle");
   navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
   });

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
      const hideButton = document.querySelector(".product__breadcrumbs");
      const closeEventPP = function (event) {
         function close() {
            document.removeEventListener("keyup", closeEventPP);
            eventPP.removeEventListener("click", closeEventPP);
            root.classList.remove("show-product-pp");
            hideButton.classList.remove("hidden");
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
         hideButton.classList.add("hidden");
         document.addEventListener("keyup", closeEventPP);
         eventPP.addEventListener("click", closeEventPP);
      });
   }
   const heartColor = document.querySelector('.product-card__icon-heart');
   if(heartColor) {
      heartColor.style.fill = "#0154bb";
   }
   
   //счетчик количество
   const increaseBtn = document.querySelector('#increaseBtn');
   const decreaseBtn = document.querySelector('#decreaseBtn');
   const cardQty = document.querySelector('#cardQty');

   let quantity = 1;
   increaseBtn.addEventListener('click', function() {
      quantity++;
      cardQty.textContent = quantity; 
   });
   decreaseBtn.addEventListener('click', function() {
      if (quantity > 1) { 
         quantity--;
         cardQty.textContent = quantity; 
      }
   });

   //иконки в шапке
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
}) ();
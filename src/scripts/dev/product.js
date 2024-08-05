(function() {
   "use strict";
   const root = document.documentElement;
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


   const buttons = Array.from(document.querySelectorAll('.product-slide__btn--heart'));
   const buttons2 = Array.from(document.querySelectorAll('.product-slide__btn--basket'));
   const qtyDisplay = document.querySelector('.page-header__qty');
   const qtyDisplay2 = document.querySelector('.page-header__qty2');
   const svg = document.querySelector('.page-header__nav--heart');
   const svg2 = document.querySelector('.page-header__nav--basket');
   let counter = 0;
   let counter2 = 0;
   const updateQtyDisplay = () => {
      qtyDisplay.style.display = counter > 0 ? 'inline' : 'none';
   };

   const updateQtyDisplay2 = () => {
      qtyDisplay2.style.display = counter2 > 0 ? 'inline' : 'none';
   };

   buttons.forEach(button => {
      button.addEventListener('click', function() {
         if (button.classList.contains('active')) {
            counter--;
            button.classList.remove('active');
         } else {
            counter++; 
            button.classList.add('active');
         }
         qtyDisplay.textContent = counter;
         if (svg) {
            svg.style.fill = counter > 0 ? '#1066d0' : 'transparent';
            svg.style.color = counter > 0 ? '#1066d0' : '#111';
         }
         updateQtyDisplay();
      });
   });
      
   buttons.forEach(button => {
      button.addEventListener('click', function() {
         let svg = this.querySelector('.product-slide__icon1');
         if (svg) {
            let fill = svg.getAttribute('fill');
            svg.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
            svg.style.color = counter > 0 ? '#1066d0' : '#111';
         }
      });
   });

   buttons2.forEach(button => {
      button.addEventListener('click', function() {
         if (button.classList.contains('active')) {
            counter2--;
            button.classList.remove('active');
         } else {
            counter2++;
            button.classList.add('active');
         }
         qtyDisplay2.textContent = counter2;
         if (svg2) {
            svg2.style.fill = counter2 > 0 ? '#1066d0' : 'transparent';
            svg2.style.color = counter2 > 0 ? '#1066d0' : '#111';
         }
         updateQtyDisplay2();
      });
   });
   buttons2.forEach(button => {
      button.addEventListener('click', function() {
         let svg2 = this.querySelector('.product-slide__icon2');
         if (svg2) {
            let fill = svg2.getAttribute('fill');
            svg2.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
            svg2.style.color = counter > 0 ? '#1066d0' : '#111';
         }
      });
   });
   updateQtyDisplay();
   updateQtyDisplay2();

   $('.product__breadcrumbs-btn').on('click', function() {
      window.location.href = 'index.html';
   });

}) ();
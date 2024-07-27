(function() {
   "use strict";

   //фильтр
   const root = document.documentElement;
   const rangeSlider = document.querySelector('#range-slider');
   const filterForm = document.querySelector("#js-filter");
   const jsForm = document.querySelector("#js-filterForm");

   if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
      start: [650, 5000],
		connect: true,
		step: 1,
      range: {
			'min': [0],
			'max': [5650]
      }
      });

      const input0 = document.querySelector('#input-0');
      const input1 = document.querySelector('#input-1');
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

   if (filterForm) {
      const filterBtn = document.querySelector("#js-btnFilter");
      const closeEventPP = function (event) {
         function close() {
            document.removeEventListener("keyup", closeEventPP);
            filterBtn.removeEventListener("click", closeEventPP);
            root.classList.remove("show-filter-pp");
         }
      switch (event.type) {
         case "keyup":
            if (event.key === "Escape" || event.keyCode === 27) close();
            break;
         case "click":
            if (
               event.target === this ||
               event.target.classList.contains("js-filterCloseBtn")
            )
               close();
            break;
         }
      };
      filterBtn.addEventListener("click", function () {
         root.classList.add("show-filter-pp");
         document.addEventListener("keyup", closeEventPP);
         filterForm.addEventListener("click", closeEventPP);
      });
   }
   if(jsForm) {
      const resetBtn = document.querySelector(".js-resetBtn");
      resetBtn.addEventListener("click", function () {
         jsForm.reset();
         rangeSlider.noUiSlider.set([650, 5000]); 
      });
   }

   let buttons = Array.from(document.querySelectorAll('.catalog-card__btn-heart'));
   let buttons2 = Array.from(document.querySelectorAll('.catalog-card__btn-basket'));
   const qtyDisplay = document.querySelector('.page-header__qty');
   const qtyDisplay2 = document.querySelector('.page-header__qty2');
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
         let svg = document.querySelector('.nav-icon1');
         if (svg) {
            svg.style.fill = counter > 0 ? '#1066d0' : 'transparent';
         }
         updateQtyDisplay();
      });
   });
      
   buttons.forEach(button => {
      button.addEventListener('click', function() {
         let svg = this.querySelector('.svgElement1');
         if (svg) {
            let fill = svg.getAttribute('fill');
            svg.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
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
         let svg2 = document.querySelector('.nav-icon2');
         if (svg2) {
            svg2.style.fill = counter2 > 0 ? '#1066d0' : 'transparent';
         }
         updateQtyDisplay2();
      });
   });
   buttons2.forEach(button => {
      button.addEventListener('click', function() {
         let svg2 = this.querySelector('.svgElement2');
         if (svg2) {
            let fill = svg2.getAttribute('fill');
            svg2.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
         }
      });
   });
   updateQtyDisplay();
   updateQtyDisplay2();
})()
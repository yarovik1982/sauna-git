
function InitModal(){
   const body = document.querySelector("body");
   // const offer = document.querySelector("[data-id=offer");
   const modal = document.querySelector(".modal");
   const modalCallback = document.querySelector(".modal__callback");
   const modalView = document.querySelector(".modal-view");
   let scrolling = function(event){
      window.scrollTo(0, 0);
   }
   

   function addClassElement (element, _class){
      element.classList.add(_class);
   }

   function removeClassElement(element, _class){
      element.classList.remove(_class);
   }

   // function disableScroll(){
   //    window.scrollTo(0,0);
   // }

   document.addEventListener("click", function(event){
      let elem = event.target;
      if(elem.closest('[data-id=book]')){
         
         addClassElement(body, "lock");
         addClassElement(modal, "visible");
         // disableScroll();
         window.addEventListener("scroll", scrolling);
      }
      if(elem.closest('[data-id=callback]')){
         
         addClassElement(body, "lock");
         addClassElement(modalCallback, "visible");
         window.addEventListener("scroll", scrolling);
      }
      if(elem.closest("[data-id=review]")){
         addClassElement(body, "lock");
         addClassElement(modalView, "visible");
         window.addEventListener("scroll", scrolling);
      }
      if(elem.closest(".modal__item-close") || elem.classList.contains("modal") || elem.classList.contains("modal__callback")){
         
         removeClassElement(body, "lock");
         removeClassElement(modal, "visible");
         removeClassElement(modalCallback, "visible");
         window.removeEventListener("scroll", scrolling);
      }
   })
}
export default InitModal;

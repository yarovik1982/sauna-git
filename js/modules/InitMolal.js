
function InitModal(){
   const body = document.querySelector("body");
   // const offer = document.querySelector("[data-id=offer");
   const modal = document.querySelector(".modal");
   const modalCallback = document.querySelector(".modal__callback");
   

   function addClassElement (element, _class){
      element.classList.add(_class);
   }

   function removeClassElement(element, _class){
      element.classList.remove(_class);
   }

   function disableScroll(){
      window.scrollTo(0,0);
   }

   document.addEventListener("click", function(event){
      let elem = event.target;
      if(elem.closest('[data-id=book]')){
         
         addClassElement(body, "lock");
         addClassElement(modal, "visible");
         disableScroll();
      }
      if(elem.closest('[data-id=callback]')){
         
         addClassElement(body, "lock");
         addClassElement(modalCallback, "visible");
         disableScroll();
      }
      if(elem.closest(".modal__item-close") || elem.classList.contains("modal") || elem.classList.contains("modal__callback")){
         
         removeClassElement(body, "lock");
         removeClassElement(modal, "visible");
         removeClassElement(modalCallback, "visible");
      }
   })
}
export default InitModal;

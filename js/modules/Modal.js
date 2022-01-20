function Modal (){
   const btnView = document.querySelector("[data-id=review]");
   const options = [
      {
         "id": "view",
         "elementHtml": "div",
         "_classMain": "modal",
         "_classSecond": "modal-view", 
         "strHtml": `<div class="modal__container modal-view__container"><form action="#" class="modal__form modal-view__form"><div class="modal__item modal-view__item"><div class="modal__item-row modal-view__item-row"><p class="modal__item-text modal-view__item-text">Оставьте свой отзыв</p><span class="modal__item-close modal-view__item-close"><img src="images/close.svg" alt=""></span></div><div class="modal__form-data modal-view__form-data"><input type="text" class="modal__form-inp modal-view__form-inp" placeholder="Ваше имя"><input type="tel" class="modal__form-inp modal-view__form-inp" placeholder="Ваш телефон"></div><div class="modal__item-row modal-view__item-row"><textarea name="view-textarea" id="view-textarea" class="modal-view__item-textarea" placeholder="Ваш отзыв"></textarea></div><div class="modal__item-row modal-view__item-row flex-start"><span class="modal-view__item-text">Ваша оценка</span><div class="modal-view__item-icons"><span class="modal-view__item-icon"><svg class="icon" width="20px"height="18px" ><use xlink:href="images/sprite.svg#star-1"></use></svg></span><span class="modal-view__item-icon"><svg class="icon" width="20" height="18"><use xlink:href="images/sprite.svg#star-2"></use></svg></span><span class="modal-view__item-icon"><svg class="icon" width="20" height="18"><use xlink:href="images/sprite.svg#star-3" ></use></svg></span><span class="modal-view__item-icon"><svg class="icon" width="20" height="18"><use xlink:href="images/sprite.svg#star-4"></use></svg></span><span class="modal-view__item-icon"><svg class="icon" width="20" height="18"><use xlink:href="images/sprite.svg#star-5"></use></svg></span></div></div><div class="modal__form-agreement modal-view__form-fgreement"><input type="checkbox" name="modal__form-checkbox modal-view__form-checkbox" id="modal__form-checkbox" class="modal__form-checkbox"><p class="modal__form-agree modal-view__form-agree">Согласен на обработку и передачу персональных данных в соответствии с <a href="#" class="modal__form-agree-link modal-view__form-agree-link">пользовательским соглашением</a></p></div></div><div class="modal__form-btn modal-view__form-btn"><button type="submit" class="modal__form-button modal-view__form-button is-button bg-green w-100-percents"><span class="btn__text">Получить код</span></button></div></form></div>`,
      }
   ];

  function renderModal(name,elementHtml,classMan,classSecond,html){
   const modalContainer = document.createElement(elementHtml);
   modalContainer.className = classMan;
   modalContainer.setAttribute("id", name);
   document.querySelector(#name).classList.add(classSecond);
   modalContainer.innerHTML = html;
   document.body.append(modalContainer);
  }

  document.addEventListener("click", event=>{
     el = event.target;
     if(el.closest("[data-id=review]")){
        renderModal(options[id], options[elementHtml], options[_classMain])
     }
  })
  renderModal();
}
export default Modal;
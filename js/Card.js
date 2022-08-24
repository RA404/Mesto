class Card {
  constructor(container, popupImage) { 
    this.container = container;
    this.popupImage = popupImage;
    // Надо исправить : Нельзя вызывать или создавать реализацию в конструторе класса
    // Вызывая реализацию в конструторе класса, при наследовании, вы не сможите вызвать другой метод не вызвав реализацию в конструкторе
    // Если Вам необходимо будет вызвать конструктор родителя при наследовании в одном из классов
    // так же, вы заведомо делаете класс не тестируемым, так как всегда при инициализации будет вызываться конструктор класса

    //RA404: Перенес в метод create

  }

  create(name, link) {
    /*  Можно лучше: 
    *  Альтернативный способ создания карточки. При нем не требуется создавать вручную все
    * Вы можете реализовать функцию, которая сразу же возвращает “кусок” разметки. Это решает проблему постоянного createElement DOM-элементов. 
     function getTemplate(data){ 
       const template = `<div class="place-card"> 
                   <div class="place-card__image" style="background: url(${data.link})"> 
                     <button class="place-card__delete-icon"></button>
                   </div>
                   <div class="place-card__description">
                     <h3 class="place-card__name">${data.name}</h3>
                     <button class="place-card__like-icon"></button>
                   </div>
                 </div>`
     return template;
     } 
    *  Этот кусок разметки в дальнейшем можно вставить в DOM, воспользовавшись методом insertAdjacentHTML().
    *  https: //developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
    *    pointElement.insertAdjacentHTML('afterend', getTemplate(data));
    */
    const cardContainer = document.createElement('div');
    const cardImageElement = document.createElement('div');
    const delButtonElement = document.createElement('button');
    const cardDescriptionElement = document.createElement('div');
    const cardTitleElement = document.createElement('h3');
    const likeButtonElement = document.createElement('button');


    cardContainer.classList.add('place-card');

    cardImageElement.classList.add('place-card__image');
    cardImageElement.style.backgroundImage = `url('${link}')`;
    delButtonElement.classList.add('place-card__delete-icon');

    cardDescriptionElement.classList.add('place-card__description');
    cardTitleElement.classList.add('place-card__name');
    cardTitleElement.textContent = name;
    likeButtonElement.classList.add('place-card__like-icon');


    cardContainer.appendChild(cardImageElement);
    cardImageElement.appendChild(delButtonElement);
    cardContainer.appendChild(cardDescriptionElement);
    cardDescriptionElement.appendChild(cardTitleElement);
    cardDescriptionElement.appendChild(likeButtonElement);

    //listener for like icon
    this.likeIcon = cardContainer.querySelector('.place-card__like-icon');
    this.likeIcon.addEventListener('click', this.like.bind(this));
    //listener for delete icon   
    this.delIcon = cardContainer.querySelector('.place-card__delete-icon');
    this.delIcon.addEventListener('click', this.remove.bind(this));
    //listener for image click
    this.picturePlace = cardContainer.querySelector('.place-card__image');
    this.picturePlace.addEventListener('click', this.showFullSizeImage.bind(this));    

    return cardContainer;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    this.container.removeChild(event.target.parentElement.parentElement);
  }

  showFullSizeImage(event) {
    let pictureLink = event.target.style.backgroundImage;
    if (pictureLink) {
      //RA404:Исправил
      this.popupImage.setImage(pictureLink.replace(/\(|\)|\"|url/gi, ''));
      this.popupImage.openClosePopup();      
    }
  }
}
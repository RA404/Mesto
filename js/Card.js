class Card {
  constructor(container, popupImage) { 
    this.container = container;
    this.popupImage = popupImage;
  }

  create(name, link) {
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
      this.popupImage.setImage(pictureLink.replace(/\(|\)|\"|url/gi, ''));
      this.popupImage.openClosePopup();      
    }
  }
}

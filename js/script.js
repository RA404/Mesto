const container = document.querySelector('.places-list');// место куда записывать карточки
const userInfoContainer = document.querySelector('.user-info'); //контейнер информации о пользователе

//DOM формы попапов для передачи их в соответствующий класс
const popupFormNewPlace = document.querySelector('.popup');
const popupFormEditInfo = document.querySelector('.popup_editForm');
const popupImageForm =  document.querySelector('.popupFullSizeImage');

const cards = initialCards; // массив с карточками 

const validation = new FormValidator(); 
const userInfo = new UserInfo();

const popupImage = new PopupImage(popupImageForm);
const card = new Card(container, popupImage);
const cardList = new CardList(card, cards, container); //передаем классы Card и PopupNewPlace, а также контейнер куда записывать карточки и список карточек

const popupCard = new PopupNewPlace(validation, userInfoContainer, cardList, popupFormNewPlace);
const popupProfile = new PopupEditInfo(validation, userInfoContainer, userInfo, popupFormEditInfo); 

cardList.renderCards(container, cards, card);

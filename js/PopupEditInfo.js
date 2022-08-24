class PopupEditInfo {
  constructor(formValidator, userInfoContainer, userInfo, formEditInfo) {
    this.userInfoContainer = userInfoContainer;
    this.formEditInfo = formEditInfo;
    this.popupCloseButton = this.formEditInfo.querySelector('.popup__close_editForm');
    this.popupCloseButton.addEventListener('click', this.openClosePopup.bind(this));

    this.formValidator = formValidator;
    this.userInfo = userInfo;

    /** Надо исправить: вы обращаетесь в классе к переменной userInfoContainer объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов
    объявленных глобально, а только от тех данных которые были переданны через параметры
    */
    //RA404:Исправил
    this.popupEditButton = this.userInfoContainer.querySelector('.user-info__edit-btn');
    this.popupEditButton.addEventListener('click', this.openClosePopup.bind(this));
    this.form = document.forms.editForm;
    this.form.addEventListener('submit', this.saveUserInfo.bind(this));
    this.nameResearcherField = this.form.elements.nameResearcher;
    this.nameResearcherField.addEventListener('input', this.volidation.bind(this, this.nameResearcherField));
    this.aboutResearcherField = this.form.elements.aboutResearcher;
    this.aboutResearcherField.addEventListener('input', this.volidation.bind(this, this.aboutResearcherField));
  }

  openClosePopup() {
    this.formEditInfo.classList.toggle('popup_is-opened');

    /** Надо исправить: вы обращаетесь в классе к переменной userInfo объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов
    объявленных глобально, а только от тех данных которые были переданны через параметры
    */
   //RA404: исправвил
    this.form.elements.nameResearcher.value = this.userInfo.nameResearcher;
    this.form.elements.aboutResearcher.value = this.userInfo.aboutResearcher;

  }

  saveUserInfo() {
    event.preventDefault();
    //const userInfo = new UserInfo();
    /** Надо исправить: вы обращаетесь в классе к переменной userInfo объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов
    объявленных глобально, а только от тех данных которые были переданны через параметры
    */
   //RA404: исправил
    this.userInfo.setUserInfo(this.form.elements.nameResearcher.value, this.form.elements.aboutResearcher.value);
    this.userInfo.updateUserInfo();

    this.openClosePopup();
  }

  volidation(elem) {
    /** Надо исправить: вы обращаетесь в классе к переменной formValidator объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов
    объявленных глобально, а только от тех данных которые были переданны через параметры
    */
    //RA404: исправил  
    this.formValidator.setEventListeners(elem);
  }
}
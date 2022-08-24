class UserInfo {
  constructor() {
    const userInfoContainer = document.querySelector('.user-info');
    this.userNameContainer = userInfoContainer.querySelector('.user-info__name');
    /** Надо исправить: вы обращаетесь в классе к переменной userInfoContainer объявленной глобально,
    так делать нельзя. Вы можете передать эту переменную в качестве параметров, а потом уже обращаться к ней 
    Стремитесь к тому чтобы класс у вас был самодостаточным, и не зависел от глобальных переменных или классов 
    объявленных глобально, а только от тех данных которые были переданны через параметры 
    */
   //RA404: Исправил
    this.userDescriptionContainer = userInfoContainer.querySelector('.user-info__job');
    this.nameResearcher = this.userNameContainer.textContent;
    this.aboutResearcher = this.userDescriptionContainer.textContent;
  }

  setUserInfo(nameResearcher, aboutResearcher) {
    this.nameResearcher = nameResearcher;
    this.aboutResearcher = aboutResearcher;
  }

  updateUserInfo() {
    this.userNameContainer.textContent = this.nameResearcher;
    this.userDescriptionContainer.textContent = this.aboutResearcher;
  }

}
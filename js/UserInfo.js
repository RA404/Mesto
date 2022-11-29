class UserInfo {
  constructor() {
    const userInfoContainer = document.querySelector('.user-info');
    this.userNameContainer = userInfoContainer.querySelector('.user-info__name');

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

import DomString from "./dom_string.js";
export default class DomElement {
  get dom() {
    return new DomString();
  }
  get file() {
    return {
      avatarImage: document.getElementById(this.dom.id.file),
      audioSource: document.getElementById(this.dom.id.musicSource),
    };
  }

  get btn() {
    return {
      cancel: document.getElementById(this.dom.id.cancel),
      discard: document.getElementById(this.dom.id.discard),
      login: document.getElementById(this.dom.id.login),
      logout: document.getElementById(this.dom.id.logout),
      menu: document.getElementById(this.dom.id.menu),
      play: document.getElementById(this.dom.id.playBtn),
      register: document.getElementById(this.dom.id.register),
      signup: document.getElementById(this.dom.id.signUp),
      start: document.getElementById(this.dom.id.start),
      submitLogin: document.getElementById(this.dom.id.btnLogin),
      upload: document.getElementById(this.dom.id.upload),
    };
  }
  get checkBox() {
    return {
      acceptTerm: document.getElementById(this.dom.id.acceptTerm),
    };
  }

  get frame() {
    return {
      banner: document.getElementById(this.dom.id.banner),
      botSect: document.getElementById(this.dom.id.botSect),
      btnWrap: document.getElementById(this.dom.id.btnWrap),
      dialog: document.getElementById(this.dom.id.dialog),
      leftPart: document.getElementById(this.dom.id.leftPart),
      listContainer: document.getElementById(this.dom.id.listContainer),
      listWrap: document.getElementById(this.dom.id.listWrap),
      loginWrap: document.getElementById(this.dom.id.loginWrap),
      midSect: document.getElementById(this.dom.id.midSect),
      modal: document.getElementById(this.dom.id.modal),
      navBar: document.getElementById(this.dom.id.navBar),
      navWrap: document.getElementById(this.dom.id.navWrap),
      rightPart: document.getElementById(this.dom.id.rightPart),
      signUpWrap: document.getElementById(this.dom.id.signUpWrap),
      smallPart: document.getElementById(this.dom.id.smallPart),
      topBar: document.getElementById(this.dom.id.topBar),
      topSect: document.getElementById(this.dom.id.topSect),
    };
  }
  get image() {
    return {
      avatar: document.getElementById(this.dom.id.avatar),
      avatarVal: document.getElementById(this.dom.id.avatarVal),
      logo: document.getElementById(this.dom.id.logo),
      logoWrap: document.getElementById(this.dom.id.logoWrap),
      cd: document.getElementById(this.dom.id.cd),
    };
  }
  get page() {
    return {
      home: document.getElementById(this.dom.id.home),
      login: document.getElementById(this.dom.id.loginPage),
      signUp: document.getElementById(this.dom.id.signUpPage),
      music: document.getElementById(this.dom.id.musicPage),
    };
  }
  get radio() {
    return {
      female: document.getElementById(this.dom.id.female),
      male: document.getElementById(this.dom.id.male),
    };
  }
  get text() {
    return {
      confirmPasswordValidate: document.getElementById(
        this.dom.id.confirmPasswordValidate
      ),
      currentUser: document.getElementById(this.dom.id.currentUser),
      female: document.getElementById(this.dom.id.textFemale),
      listTitle: document.getElementById(this.dom.id.listTitle),
      listData: Array.from(
        document.getElementsByClassName(this.dom.className.listData)
      ),
      loginTitle: document.getElementById(this.dom.id.loginTitle),
      loginValidate: document.getElementById(this.dom.id.loginValidate),
      mailValidate: document.getElementById(this.dom.id.mailValidate),
      male: document.getElementById(this.dom.id.textMale),
      passwordValidate: document.getElementById(this.dom.id.passwordValidate),
      phoneValidate: document.getElementById(this.dom.id.phoneValidate),
      processTeller: document.getElementById(this.dom.id.processTeller),
      signUpTitle: document.getElementById(this.dom.id.signUpTitle),
      siteName: document.getElementById(this.dom.id.siteName),
      usernameValidate: document.getElementById(this.dom.id.usernameValidate),
      bigLetters: Array.from(
        document.getElementsByClassName(this.dom.className.bigLetter)
      ),
      smallLetters: Array.from(
        document.getElementsByClassName(this.dom.className.smallLetter)
      ),
    };
  }
  get textBox() {
    return {
      birthDate: document.getElementById(this.dom.id.birthDate),
      confirmPassword: document.getElementById(this.dom.id.confirmPassword),
      loginPassword: document.getElementById(this.dom.id.loginPassword),
      loginUserName: document.getElementById(this.dom.id.loginUserName),
      mail: document.getElementById(this.dom.id.mail),
      password: document.getElementById(this.dom.id.password),
      phone: document.getElementById(this.dom.id.phone),
      username: document.getElementById(this.dom.id.username),
    };
  }
  get util() {
    return {
      bars: Array.from(document.getElementsByClassName(this.dom.className.bar)),
      circle: document.getElementById(this.dom.id.circle),
      currentPlay: document.getElementById(this.dom.id.currentPlay),
      indicators: Array.from(
        document.getElementsByClassName(this.dom.className.indicator)
      ),
      search: document.getElementById(this.dom.id.searchWrap),
      svg: document.getElementById(this.dom.id.svg),
    };
  }
}

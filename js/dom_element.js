import DomString from "./dom_string.js";
export default class DomElement {
  get dom() {
    return new DomString();
  }
  get file() {
    return {
      avatarImage: document.getElementById(this.dom.id.file),
    };
  }

  get btn() {
    return {
      discard: document.getElementById(this.dom.id.discard),
      login: document.getElementById(this.dom.id.login),
      register: document.getElementById(this.dom.id.register),
      signup: document.getElementById(this.dom.id.signUp),
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
      botSect: document.getElementById(this.dom.id.botSect),
      btnWrap: document.getElementById(this.dom.id.btnWrap),
      leftPart: document.getElementById(this.dom.id.leftPart),
      midSect: document.getElementById(this.dom.id.midSect),
      navWrap: document.getElementById(this.dom.id.navWrap),
      rightPart: document.getElementById(this.dom.id.rightPart),
      signUpWrap: document.getElementById(this.dom.id.signUpWrap),
      smallPart: document.getElementById(this.dom.id.smallPart),
      topSect: document.getElementById(this.dom.id.topSect),
    };
  }
  get image() {
    return {
      avatar: document.getElementById(this.dom.id.avatar),
      avatarVal: document.getElementById(this.dom.id.avatarVal),
    };
  }
  get page() {
    return {
      home: document.getElementById(this.dom.id.home),
      signUp: document.getElementById(this.dom.id.signUpPage),
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
      female: document.getElementById(this.dom.id.textFemale),
      mailValidate: document.getElementById(this.dom.id.mailValidate),
      male: document.getElementById(this.dom.id.textMale),
      passwordValidate: document.getElementById(this.dom.id.passwordValidate),
      phoneValidate: document.getElementById(this.dom.id.phoneValidate),
      signUpTitle: document.getElementById(this.dom.id.signUpTitle),
      usernameValidate: document.getElementById(this.dom.id.usernameValidate),
    };
  }
  get textBox() {
    return {
      birthDate: document.getElementById(this.dom.id.birthDate),
      confirmPassword: document.getElementById(this.dom.id.confirmPassword),
      mail: document.getElementById(this.dom.id.mail),
      password: document.getElementById(this.dom.id.password),
      phone: document.getElementById(this.dom.id.phone),
      username: document.getElementById(this.dom.id.username),
    };
  }
}

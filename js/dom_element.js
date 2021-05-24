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
      signup: document.getElementById(this.dom.id.signUp),
      upload: document.getElementById(this.dom.id.upload),
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
      male: document.getElementById(this.dom.id.male),
      female: document.getElementById(this.dom.id.female),
    };
  }
  get text() {
    return {
      female: document.getElementById(this.dom.id.textFemale),
      male: document.getElementById(this.dom.id.textMale),
      signUpTitle: document.getElementById(this.dom.id.signUpTitle),
    };
  }
  get textBox() {
    return {
      birthDate: document.getElementById(this.dom.id.birthDate),
      datePicker: MCDatepicker.create({ el: this.dom.id.q.birthDate }),
    };
  }
}

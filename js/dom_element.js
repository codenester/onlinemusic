import DomString from "./dom_string.js";
export default class DomElement {
  get dom() {
    return new DomString();
  }
  get btn() {
    return {
      login: document.getElementById(this.dom.id.login),
      signup: document.getElementById(this.dom.id.signUp),
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
      smallPart: document.getElementById(this.dom.id.smallPart),
      topSect: document.getElementById(this.dom.id.topSect),
    };
  }
  get page() {
    return {
      home: document.getElementById(this.dom.id.home),
      signUp: document.getElementById(this.dom.id.signUpPage),
    };
  }
  get textBox() {
    return {
      birthDate: document.getElementById(this.dom.id.birthDate),
      datePicker: MCDatepicker.create({ el: this.dom.id.q.birthDate }),
    };
  }
}

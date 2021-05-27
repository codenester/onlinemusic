import DomElement from "./dom_element.js";
export default class DataEvent {
  constructor() {
    this.dom = new DomElement();
  }
  get readSignUpState() {
    let user = { ...window.history.state.user };
    let validation = { ...window.history.state.validation };
    if (user.gender === "Male") {
      this.dom.radio.male.checked = true;
    } else {
      this.dom.radio.female.checked = true;
    }
    this.dom.checkBox.acceptTerm.checked = user.term;
    if (user.term) {
      this.dom.btn.register.removeAttribute("disabled");
    } else {
      this.dom.btn.register.setAttribute("disabled", true);
    }
    if (!user.image.bytes) {
      this.dom.image.avatar.style.backgroundImage = user.image;
    } else {
      this.dom.image.avatarVal.src = URL.createObjectURL(
        new Blob([user.image.bytes.buffer], { type: user.image.type })
      );
    }
    if (user.username) this.dom.textBox.username.value = user.username;
    if (user.password) this.dom.textBox.password.value = user.password;
    if (user.mail) this.dom.textBox.mail.value = user.mail;
    if (user.phone) this.dom.textBox.phone.value = user.phone;
    if (user.birthDate) this.dom.textBox.birthDate.value = user.birthDate;

    this.dom.text.usernameValidate.innerText = validation.username;
    this.dom.text.passwordValidate.innerText = validation.password;
    this.dom.text.mailValidate.innerText = validation.mail;
    this.dom.text.phoneValidate.innerText = validation.phone;
    return user;
  }
  writeSignUpState(state) {
    let oldState = { ...window.history.state };
    for (var st in state) {
      oldState[st] = state[st];
    }
    window.history.replaceState(oldState, "signup page");
  }
}

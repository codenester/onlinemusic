import DomElement from "./dom_element.js";
import ViewEvent from "./view_event.js";
import HelperEvent from "./helper_event.js";
import HelperString from "./helper_string.js";
export default class Controller {
  constructor() {
    this.dom = new DomElement();
    this.viewEvent = new ViewEvent();
    this.helperEvent = new HelperEvent();
    this.helperString = new HelperString();
  }
  get start() {
    this.viewEvent.leaveTransition;
    if (window.history.state) {
      for (var step in this.viewEvent.leaveHome)
        this.viewEvent.leaveHome[step]();
      for (var step in this.viewEvent.enterSignup)
        this.viewEvent.enterSignup[step]();
    } else {
      for (var step in this.viewEvent.leaveSignup)
        this.viewEvent.leaveSignup[step]();
      for (var step in this.viewEvent.enterHome)
        this.viewEvent.enterHome[step]();
    }
    window.onpopstate = async () => {
      console.log(window.history.state);
      if (window.history.state) {
        this.viewEvent.takeTransition;
        this.viewEvent.animateFromHome;
        await this.helperEvent.timeOut;
        this.viewEvent.animateToSignup;
      } else {
        this.viewEvent.takeTransition;
        this.viewEvent.animateFromSignup;
        await this.helperEvent.timeOut;
        this.viewEvent.animateToHome;
      }
    };
    this.dom.btn.login.onclick = async () => {};
    this.dom.btn.signup.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToSignup;
      window.history.pushState({ page: "signup" }, "signup page");
    };
    this.dom.btn.discard.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromSignup;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToHome;
      window.history.back();
    };
    this.dom.textBox.birthDate.onclick = () =>
      this.dom.textBox.datePicker.open();
    [this.dom.radio.male, this.dom.text.male].forEach(
      (v, i) =>
        (v.onclick = () => {
          this.dom.image.avatar.style.backgroundImage = `url(${this.helperString.filePath.maleAvatar})`;
          if (i === 1) this.dom.radio.male.checked = true;
        })
    );
    [this.dom.radio.female, this.dom.text.female].forEach(
      (v, i) =>
        (v.onclick = () => {
          this.dom.image.avatar.style.backgroundImage = `url(${this.helperString.filePath.femaleAvatar})`;
          if (i === 1) this.dom.radio.female.checked = true;
        })
    );
    this.dom.btn.upload.onclick = () => this.dom.file.avatarImage.click();
  }
}

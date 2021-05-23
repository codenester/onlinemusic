import DomElement from "./dom_element.js";
import ViewEvent from "./view_event.js";
import HelperEvent from "./helper_event.js";
export default class Controller {
  constructor() {
    this.dom = new DomElement();
    this.viewEvent = new ViewEvent();
    this.helperEvent = new HelperEvent();
  }
  get start() {
    this.viewEvent.whenHistoryPop;
    if (window.history.state) {
      this.viewEvent.homeOutState;
    } else {
      this.viewEvent.homeInState;
    }
    this.dom.btn.login.onclick = async () => {};
    this.dom.btn.signup.onclick = async () => {
      this.dom.frame.smallPart.style.transition = "0.4s";
      this.dom.frame.smallPart.style.width = 0;
      this.dom.frame.smallPart.style.minWidth = 0;
      await this.helperEvent.timeOut;
      this.viewEvent.homeOut;
      await this.helperEvent.timeOut;
      this.dom.page.home.style.display = "none";
      this.dom.page.signUp.style.display = "flex";
      window.history.pushState({ page: "signup" }, "signup");
      await this.helperEvent.timeOut;
      this.dom.page.signUp.style.transition = "0.4s";
      this.dom.page.signUp.style.opacity = 1;
    };
    this.dom.textBox.birthDate.onclick = () =>
      this.dom.textBox.datePicker.open();
  }
}

import DomElement from "./dom_element.js";
import HelperEvent from "./helper_event.js";
export default class ViewEvent {
  constructor() {
    this.dom = new DomElement();
    this.helperEvent = new HelperEvent();
  }
  get whenHistoryPop() {
    window.onpopstate = async () => {
      if (!window.history.state) {
        this.dom.page.signUp.style.transition = "0.4s";
        this.dom.page.signUp.style.opacity = 0;
        this.dom.page.signUp.style.display = "none";
        await this.helperEvent.timeOut;
        this.dom.page.home.style.display = "flex";
        await this.helperEvent.timeOut;
        this.homeIn;
        this.dom.frame.smallPart.style.transition = "0.4s";
        this.dom.frame.smallPart.style.width = "25%";
        this.dom.frame.smallPart.style.minWidth = "250px";
      } else {
        this.dom.frame.smallPart.style.transition = "0.4s";
        this.dom.frame.smallPart.style.width = 0;
        this.dom.frame.smallPart.style.minWidth = 0;
        await this.helperEvent.timeOut;
        this.homeOut;
        await this.helperEvent.timeOut;
        this.dom.page.home.style.display = "none";
        this.dom.page.signUp.style.display = "flex";
        this.dom.page.signUp.style.transition = "0.4s";
        this.dom.page.signUp.style.opacity = 1;
      }
    };
  }
  get homeInState() {
    this.dom.page.home.style.display = "flex";
    this.dom.page.signUp.style.transition = "0s";
    this.dom.page.signUp.style.display = "none";
    this.dom.page.signUp.style.opacity = 0;
    this.dom.frame.smallPart.style.transition = "0s";
    this.dom.frame.smallPart.style.width = "25%";
    this.dom.frame.smallPart.style.minWidth = "250px";
    this.dom.frame.leftPart.style.transition = "0s";
    this.dom.frame.rightPart.style.transition = "0s";
    this.dom.frame.topSect.style.transition = "0s";
    this.dom.frame.midSect.style.transition = "0s";
    this.dom.frame.botSect.style.transition = "0s";
    this.dom.frame.navWrap.style.transition = "0s";
    this.dom.frame.btnWrap.style.transition = "0s";
    this.dom.frame.leftPart.style.marginLeft = "0";
    this.dom.frame.rightPart.style.marginLeft = "0";
    this.dom.frame.navWrap.style.transform = "translateY(0)";
    this.dom.frame.btnWrap.style.transform = "translateY(0)";
    this.dom.frame.botSect.style.transform = "translateY(0)";
    this.dom.frame.midSect.style.transform = "translateX(0)";
  }
  get homeOutState() {
    this.dom.page.signUp.style.transition = "0s";
    this.dom.page.signUp.style.display = "flex";
    this.dom.page.signUp.style.opacity = 1;
    this.dom.page.home.style.display = "none";
    this.dom.frame.smallPart.style.transition = "0s";
    this.dom.frame.smallPart.style.width = 0;
    this.dom.frame.smallPart.style.minWidth = 0;
    this.dom.frame.leftPart.style.transition = "0s";
    this.dom.frame.rightPart.style.transition = "0s";
    this.dom.frame.topSect.style.transition = "0s";
    this.dom.frame.midSect.style.transition = "0s";
    this.dom.frame.botSect.style.transition = "0s";
    this.dom.frame.navWrap.style.transition = "0s";
    this.dom.frame.btnWrap.style.transition = "0s";
    this.dom.frame.leftPart.style.marginLeft = "-100%";
    this.dom.frame.rightPart.style.marginLeft = "100%";
    this.dom.frame.navWrap.style.transform = "translateY(-100%)";
    this.dom.frame.btnWrap.style.transform = "translateY(200%)";
    this.dom.frame.botSect.style.transform = "translateY(100%)";
    this.dom.frame.midSect.style.transform = "translateX(100%)";
  }
  get homeIn() {
    this.dom.frame.leftPart.style.transition = "0.4s";
    this.dom.frame.rightPart.style.transition = "0.4s";
    this.dom.frame.topSect.style.transition = "0.4s";
    this.dom.frame.midSect.style.transition = "0.4s";
    this.dom.frame.botSect.style.transition = "0.4s";
    this.dom.frame.navWrap.style.transition = "0.4s";
    this.dom.frame.btnWrap.style.transition = "0.4s";
    this.dom.frame.leftPart.style.marginLeft = "0";
    this.dom.frame.rightPart.style.marginLeft = "0";
    this.dom.frame.navWrap.style.transform = "translateY(0)";
    this.dom.frame.btnWrap.style.transform = "translateY(0)";
    this.dom.frame.botSect.style.transform = "translateY(0)";
    this.dom.frame.midSect.style.transform = "translateX(0)";
  }
  get homeOut() {
    this.dom.frame.leftPart.style.transition = "0.8s";
    this.dom.frame.rightPart.style.transition = "0.4s";
    this.dom.frame.topSect.style.transition = "0.4s";
    this.dom.frame.midSect.style.transition = "0.4s";
    this.dom.frame.botSect.style.transition = "0.4s";
    this.dom.frame.navWrap.style.transition = "0.4s";
    this.dom.frame.btnWrap.style.transition = "0.4s";
    this.dom.frame.leftPart.style.marginLeft = "-100%";
    this.dom.frame.rightPart.style.marginLeft = "100%";
    this.dom.frame.navWrap.style.transform = "translateY(-100%)";
    this.dom.frame.btnWrap.style.transform = "translateY(200%)";
    this.dom.frame.botSect.style.transform = "translateY(100%)";
    this.dom.frame.midSect.style.transform = "translateX(100%)";
  }
}

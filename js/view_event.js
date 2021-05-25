import DomElement from "./dom_element.js";
import HelperEvent from "./helper_event.js";
export default class ViewEvent {
  constructor() {
    this.dom = new DomElement();
    this.helperEvent = new HelperEvent();
  }
  get takeTransition() {
    this.dom.text.bigLetters.forEach((v) => (v.style.transition = "0.4s"));
    this.dom.text.smallLetters.forEach((v) => (v.style.transition = "0.4s"));
    this.dom.frame.banner.style.transition = "0.4s";
    this.dom.image.logo.style.transition = "0.4s";
    this.dom.page.signUp.style.transition = "0.4s";
    this.dom.page.home.style.transition = "0.4s";
    this.dom.page.login.style.transition = "0.4s";
    this.dom.text.signUpTitle.style.transition = "0.4s";
    this.dom.text.loginTitle.style.transition = "0.4s";
    this.dom.frame.signUpWrap.style.transition = "0.4s";
    this.dom.frame.btnWrap.style.transition = "0.4s";
    this.dom.frame.navWrap.style.transition = "0.4s";
    this.dom.frame.topSect.style.transition = "0.4s";
    this.dom.frame.midSect.style.transition = "0.4s";
    this.dom.frame.botSect.style.transition = "0.4s";
    this.dom.frame.smallPart.style.transition = "0.4s";
    this.dom.frame.leftPart.style.transition = "0.4s";
    this.dom.frame.loginWrap.style.transition = "0.4s";
  }
  get leaveTransition() {
    this.dom.text.bigLetters.forEach((v) => (v.style.transition = "0s"));
    this.dom.text.smallLetters.forEach((v) => (v.style.transition = "0s"));
    this.dom.frame.banner.style.transition = "0s";
    this.dom.image.logo.style.transition = "0s";
    this.dom.page.signUp.style.transition = "0s";
    this.dom.page.home.style.transition = "0s";
    this.dom.page.login.style.transition = "0s";
    this.dom.text.signUpTitle.style.transition = "0s";
    this.dom.text.loginTitle.style.transition = "0s";
    this.dom.frame.signUpWrap.style.transition = "0s";
    this.dom.frame.btnWrap.style.transition = "0s";
    this.dom.frame.navWrap.style.transition = "0s";
    this.dom.frame.topSect.style.transition = "0s";
    this.dom.frame.midSect.style.transition = "0s";
    this.dom.frame.botSect.style.transition = "0s";
    this.dom.frame.smallPart.style.transition = "0s";
    this.dom.frame.loginWrap.style.transition = "0s";
  }
  get enterHome() {
    return {
      step1: () => {
        this.dom.page.home.style.display = "flex";
      },
      step2: () => {
        this.dom.frame.smallPart.style.transform = "translateX(0)";
        this.dom.frame.navWrap.style.transform = "translateY(0)";
        this.dom.frame.btnWrap.style.transform = "translateY(0)";
        this.dom.frame.botSect.style.transform = "translateY(0)";
        this.dom.frame.leftPart.style.transform = "translateX(0)";
        this.dom.frame.midSect.style.transform = "translateX(0)";
      },
    };
  }
  get leaveHome() {
    return {
      step1: () => {
        this.dom.frame.smallPart.style.transform = "translateX(-100%)";
      },
      step2: () => {
        this.dom.frame.navWrap.style.transform = "translateY(-100%)";
        this.dom.frame.btnWrap.style.transform = "translateY(200%)";
        this.dom.frame.leftPart.style.transform = "translateX(-100%)";
        this.dom.frame.botSect.style.transform = "translateY(100%)";
        this.dom.frame.midSect.style.transform = "translateX(100%)";
      },
      step3: () => {
        this.dom.page.home.style.display = "none";
      },
    };
  }
  get enterSignup() {
    return {
      step1: () => {
        this.dom.page.signUp.style.display = "flex";
      },
      step2: () => {
        this.dom.frame.signUpWrap.style.opacity = 1;
        this.dom.text.signUpTitle.style.transform = "translateX(0)";
      },
    };
  }
  get leaveSignup() {
    return {
      step1: () => {
        this.dom.frame.signUpWrap.style.opacity = 0;
        this.dom.text.signUpTitle.style.transform = "translateX(-100%)";
      },
      step2: () => {
        this.dom.page.signUp.style.display = "none";
      },
    };
  }
  get enterLogin() {
    return {
      step1: () => {
        this.dom.page.login.style.display = "flex";
      },
      step2: () => {
        this.dom.text.loginTitle.style.transform = "translateX(0)";
        this.dom.frame.loginWrap.style.opacity = 1;
      },
    };
  }
  get leaveLogin() {
    return {
      step1: () => {
        this.dom.text.loginTitle.style.transform = "translateX(-100%)";
        this.dom.frame.loginWrap.style.opacity = 0;
      },
      step2: () => {
        this.dom.page.login.style.display = "none";
      },
    };
  }
  get animateToHome() {
    return (async () => {
      this.enterHome.step1();
      await this.helperEvent.timeOut;
      this.enterHome.step2();
    })();
  }
  get animateFromHome() {
    return (async () => {
      this.leaveHome.step1();
      await this.helperEvent.timeOut;
      this.leaveHome.step2();
      await this.helperEvent.timeOut;
      this.leaveHome.step3();
    })();
  }
  get animateToSignup() {
    return (async () => {
      this.enterSignup.step1();
      await this.helperEvent.timeOut;
      this.enterSignup.step2();
    })();
  }
  get animateFromSignup() {
    return (async () => {
      this.leaveSignup.step1();
      await this.helperEvent.timeOut;
      this.leaveSignup.step2();
    })();
  }
  get animateToLogin() {
    return (async () => {
      this.enterLogin.step1();
      await this.helperEvent.timeOut;
      this.enterLogin.step2();
    })();
  }
  get animateFromLogin() {
    return (async () => {
      this.leaveLogin.step1();
      await this.helperEvent.timeOut;
      this.leaveLogin.step2();
    })();
  }
}

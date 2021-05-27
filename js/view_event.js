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
    this.dom.util.currentPlay.style.transition = "0.4s";
    this.dom.frame.navBar.style.transition = "0.4s";
    this.dom.image.cd.style.transition = "0.4s";
    this.dom.frame.listWrap.style.transition = "0.4s";
    this.dom.util.search.style.transition = "0.4s";
    this.dom.page.music.style.transition = "0.4s";
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
    this.dom.frame.navBar.style.transition = "0s";
    this.dom.util.currentPlay.style.transition = "0s";
    this.dom.image.cd.style.transition = "0s";
    this.dom.frame.listWrap.style.transition = "0s";
    this.dom.util.search.style.transition = "0s";
    this.dom.page.music.style.transition = "0s";
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
  get enterMusic() {
    return {
      step1: () => {
        this.dom.page.music.style.display = "flex";
        this.dom.frame.topBar.style.display = "flex";
      },
      step2: () => {
        this.dom.util.search.style.maxWidth = "200px";
        this.dom.frame.navBar.style.transform =
          "translate(calc(-100% + 110px))";
        this.dom.frame.listWrap.style.height = "100%";
      },
      step3: () => {
        this.dom.image.cd.style.opacity = 1;
        this.dom.util.currentPlay.style.transform =
          "translateY(-100%) translateX(0)";
      },
    };
  }
  get leaveMusic() {
    return {
      step1: () => {
        this.dom.image.cd.style.opacity = 0;
        this.dom.util.currentPlay.style.transform = "translate(100% -100%)";
        this.dom.frame.navBar.style.transform = "-100%";
      },
      step2: () => {
        this.dom.util.search.style.maxWidth = 0;
        this.dom.frame.listWrap.style.height = 0;
      },
      step3: () => {
        this.dom.page.music.style.display = "none";
        this.dom.frame.topBar.style.display = "none";
      },
    };
  }
  get animateToHome() {
    return (async () => {
      this.enterHome.step1();
      await this.helperEvent.timeOut();
      this.enterHome.step2();
    })();
  }
  get animateFromHome() {
    return (async () => {
      this.leaveHome.step1();
      await this.helperEvent.timeOut();
      this.leaveHome.step2();
      await this.helperEvent.timeOut();
      this.leaveHome.step3();
    })();
  }
  get animateToSignup() {
    return (async () => {
      this.enterSignup.step1();
      await this.helperEvent.timeOut();
      this.enterSignup.step2();
    })();
  }
  get animateFromSignup() {
    return (async () => {
      this.leaveSignup.step1();
      await this.helperEvent.timeOut();
      this.leaveSignup.step2();
    })();
  }
  get animateToLogin() {
    return (async () => {
      this.enterLogin.step1();
      await this.helperEvent.timeOut();
      this.enterLogin.step2();
    })();
  }
  get animateFromLogin() {
    return (async () => {
      this.leaveLogin.step1();
      await this.helperEvent.timeOut();
      this.leaveLogin.step2();
    })();
  }
  get animateToMusic() {
    return (async () => {
      this.enterMusic.step1();
      await this.helperEvent.timeOut();
      this.enterMusic.step2();
      await this.helperEvent.timeOut();
      this.enterMusic.step3();
    })();
  }
  get animateFromMusic() {
    return (async () => {
      this.leaveMusic.step1();
      await this.helperEvent.timeOut();
      this.leaveMusic.step2();
      await this.helperEvent.timeOut();
      this.leaveMusic.step3();
    })();
  }
  get openMenu() {
    return (async () => {
      this.dom.frame.navBar.style.transition = "0.25s";
      this.dom.frame.navBar.style.transform = "translateX(0)";
      this.dom.util.bars[0].style.transform = "translateY(8px)";
      this.dom.util.bars[2].style.transform = "translateY(-8px)";
      await this.helperEvent.timeOut(200);
      this.dom.util.bars[0].style.transform = "translateY(8px) rotate(45deg)";
      this.dom.util.bars[1].style.transform = "rotate(45deg)";
      this.dom.util.bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
      return true;
    })();
  }
  get closeMenu() {
    return (async () => {
      this.dom.frame.navBar.style.transition = "0.25s";
      this.dom.frame.navBar.style.transform = "translateX(calc(-100% + 110px))";
      this.dom.util.bars[0].style.transform = "translateY(8px) rotate(0)";
      this.dom.util.bars[1].style.transform = "rotate(0)";
      this.dom.util.bars[2].style.transform = "translateY(-8px) rotate(0)";
      await this.helperEvent.timeOut(200);
      this.dom.util.bars[0].style.transform = "translateY(0)";
      this.dom.util.bars[2].style.transform = "translateY(0)";
      return false;
    })();
  }
  async startDataProcess(processText) {
    let modal = document.createElement("div");
    modal.id = "modal";
    let dialog = document.createElement("div");
    dialog.id = "dialog";
    modal.appendChild(dialog);
    let svgWrapper = document.createElement("div");
    svgWrapper.style.width = "100px";
    svgWrapper.style.height = "100px";
    svgWrapper.id = "svg-wrapper";
    svgWrapper.innerHTML = `<svg width=100 height=100>
    <circle id='circle' cx=50 cy=50 r=30 stroke='green' stroke-width=10 fill='none'/>
    </svg>`;
    dialog.appendChild(svgWrapper);
    let processTeller = document.createElement("div");
    processTeller.id = "process-teller";
    processTeller.innerText = processText;
    dialog.appendChild(processTeller);
    document.body.appendChild(modal);
    await this.helperEvent.timeOut(100);
    dialog.style.transform = "scale(1)";
  }
  async stopDataProcess() {
    this.dom.frame.dialog.removeChild(this.dom.util.svg);
    let checker = document.createElement("div");
    checker.style.width = "100px";
    checker.style.height = "100px";
    this.dom.frame.dialog.appendChild(checker);
    let copy = this.dom.text.processTeller;
    this.dom.frame.dialog.removeChild(copy);
    this.dom.frame.dialog.appendChild(copy);
    checker.innerHTML = `<svg width=100 height=100>
      <path id='check' d='M20 60 L40 80 L85 30' stroke='green' fill='none' stroke-width=10>
    </svg>`;
    this.dom.text.processTeller.innerText = "Done";
    await this.helperEvent.timeOut(1000);
    this.dom.frame.dialog.style.transform = "scale(0)";
  }
}

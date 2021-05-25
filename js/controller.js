import DomElement from "./dom_element.js";
import ViewEvent from "./view_event.js";
import HelperEvent from "./helper_event.js";
import HelperString from "./helper_string.js";
import DataEvent from "./data_event.js";
import * as model from "./model.js";
export default class Controller {
  constructor() {
    this.dom = new DomElement();
    this.viewEvent = new ViewEvent();
    this.helperEvent = new HelperEvent();
    this.helperString = new HelperString();
    this.dataEvent = new DataEvent();
    let { User } = { ...model };
    this.user = new User();
    this.user.gender = "Male";
    this.user.image = `url(${this.helperString.filePath.maleAvatar})`;
    this.user.term = false;
    this.validationMsg = {
      username: "",
      password: "",
      mail: "",
      phone: "",
    };
    this.loginValidation = "";
    this.datePicker = MCDatepicker.create({
      el: "#birth-date",
      minDate: new Date(1960, 1, 1),
      maxDate: new Date(),
    });
  }
  get start() {
    //global
    this.viewEvent.leaveTransition;
    if (window.history.state) {
      for (var step in this.viewEvent.leaveHome)
        this.viewEvent.leaveHome[step]();
      if (window.history.state.page == "signup") {
        if (!window.history.state.user) {
          this.dataEvent.writeSignUpState({
            user: this.user,
          });
        }
        if (!window.history.state.validation) {
          this.dataEvent.writeSignUpState({
            validation: this.validationMsg,
          });
        }
        this.user = this.dataEvent.readSignUpState;
        for (var step in this.viewEvent.enterSignup)
          this.viewEvent.enterSignup[step]();
      } else if (window.history.state.page == "login") {
        for (var step in this.viewEvent.enterLogin) {
          this.viewEvent.enterLogin[step]();
        }
      }
    } else {
      for (var step in this.viewEvent.leaveSignup)
        this.viewEvent.leaveSignup[step]();
      for (var step in this.viewEvent.enterHome)
        this.viewEvent.enterHome[step]();
    }
    window.onpopstate = async () => {
      this.viewEvent.takeTransition;
      if (window.history.state) {
        this.viewEvent.animateFromHome;
        await this.helperEvent.timeOut;
        if (window.history.state.page == "signup") {
          this.viewEvent.animateToSignup;
        } else if (window.history.state.page == "login") {
          this.viewEvent.animateToLogin;
        }
      } else {
        this.viewEvent.animateFromSignup;
        this.viewEvent.animateFromLogin;
        await this.helperEvent.timeOut;
        this.viewEvent.animateToHome;
      }
    };

    //home page
    this.dom.btn.login.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToLogin;
      window.history.pushState({ page: "login" }, "login page");
    };
    this.dom.btn.signup.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToSignup;
      window.history.pushState({ page: "signup" }, "signup page");
    };
    this.dom.btn.start.onclick = () => {
      this.viewEvent.takeTransition;
      this.dom.frame.smallPart.style.minWidth = "100%";
      this.dom.frame.smallPart.style.height = "40px";
      this.dom.text.bigLetters.forEach((v) => {
        v.style.fontFamily = "ubuntu-light";
        v.style.fontSize = "14px";
      });
      this.dom.text.smallLetters.forEach((v) => {
        v.style.fontFamily = "ubuntu-light";
        v.style.fontSize = "14px";
      });
      this.dom.image.logo.style.width = "60px";
      this.dom.image.logo.style.height = "60px";
      let left = this.dom.frame.banner.getBoundingClientRect().left;
      let height = this.dom.frame.banner.getBoundingClientRect().height;
      this.dom.frame.banner.style.position = "absolute";
      this.dom.frame.banner.style.height = height + "px";
      this.dom.frame.banner.style.left = left + "px";
      this.dom.frame.navWrap.style.backgroundColor = "transparent";
      this.dom.frame.navWrap.style.height = "40px";
      setTimeout(() => {
        this.dom.frame.banner.style.height = "60px";
        this.dom.frame.banner.style.left = "10px";
      }, 100);
    };

    //signup page
    this.validationMsg = {
      username: this.dom.text.usernameValidate.innerText ?? "",
      password: this.dom.text.passwordValidate.innerText ?? "",
      mail: this.dom.text.mailValidate.innerText ?? "",
      phone: this.dom.text.phoneValidate.innerText ?? "",
    };
    this.dom.btn.discard.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromSignup;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToHome;
      window.history.back();
    };
    [this.dom.radio.male, this.dom.text.male].forEach(
      (v, i) =>
        (v.onclick = () => {
          this.user.image = `url(${this.helperString.filePath.maleAvatar})`;
          this.dom.image.avatar.style.backgroundImage = this.user.image;
          if (i === 1) this.dom.radio.male.checked = true;
          this.user.gender = "Male";
          this.dataEvent.writeSignUpState({ user: this.user });
        })
    );
    [this.dom.radio.female, this.dom.text.female].forEach(
      (v, i) =>
        (v.onclick = () => {
          this.user.image = `url(${this.helperString.filePath.femaleAvatar})`;
          this.dom.image.avatar.style.backgroundImage = this.user.image;
          if (i === 1) this.dom.radio.female.checked = true;
          this.user.gender = "Female";
          this.dataEvent.writeSignUpState({ user: this.user });
        })
    );
    this.dom.btn.upload.onclick = () => this.dom.file.avatarImage.click();
    this.dom.checkBox.acceptTerm.onclick = () => {
      if (this.dom.checkBox.acceptTerm.checked) {
        this.user.term = true;
        this.dom.btn.register.removeAttribute("disabled");
      } else {
        this.user.term = false;
        this.dom.btn.register.setAttribute("disabled", true);
      }
      this.dataEvent.writeSignUpState({ user: this.user });
    };
    this.dom.textBox.username.onchange = (e) => {
      this.user.username = e.target.value;
      let validate = this.helperEvent.validateUsername(e.target.value);
      if (!validate.valid) {
        this.dom.text.usernameValidate.innerText = validate.msg;
      } else {
        this.dom.text.usernameValidate.innerText = "";
      }
      this.validationMsg.username = this.dom.text.usernameValidate.innerText;
      this.dataEvent.writeSignUpState({
        user: this.user,
        validation: this.validationMsg,
      });
    };
    this.dom.textBox.password.onchange = (e) => {
      this.user.password = e.target.value;
      let validate = this.helperEvent.validatePassword(e.target.value);
      if (!validate.valid) {
        this.dom.text.passwordValidate.innerText = validate.msg;
      } else {
        this.dom.text.passwordValidate.innerText = "";
      }
      this.validationMsg.password = this.dom.text.passwordValidate.innerText;
      this.dataEvent.writeSignUpState({
        user: this.user,
        validation: this.validationMsg,
      });
    };
    this.dom.textBox.mail.onchange = (e) => {
      this.user.mail = e.target.value;
      if (e.target.value) {
        if (!this.helperEvent.validateMail(e.target.value)) {
          this.dom.text.mailValidate.innerText = "Invalid email!";
        } else {
          this.dom.text.mailValidate.innerText = "";
        }
      } else {
        this.dom.text.mailValidate.innerText = "";
      }
      this.validationMsg.mail = this.dom.text.mailValidate.innerText;
      this.dataEvent.writeSignUpState({
        user: this.user,
        validation: this.validationMsg,
      });
    };
    this.dom.textBox.phone.onchange = (e) => {
      this.user.phone = e.target.value;
      if (e.target.value) {
        let validate = this.helperEvent.validatePhone(e.target.value);
        if (!validate.valid) {
          this.dom.text.phoneValidate.innerText = validate.msg;
        } else {
          this.dom.text.phoneValidate.innerText = "";
        }
      } else {
        this.dom.text.phoneValidate.innerText = "";
      }
      this.validationMsg.phone = this.dom.text.phoneValidate.innerText;
      this.dataEvent.writeSignUpState({
        user: this.user,
        validation: this.validationMsg,
      });
    };
    this.dom.textBox.confirmPassword.onkeypress = () => {
      this.dom.text.confirmPasswordValidate.innerText = "";
    };

    this.datePicker.onSelect((date, formattedDate) => {
      this.user.birthDate = formattedDate;
      this.dataEvent.writeSignUpState({ user: this.user });
    });
    this.dom.file.avatarImage.onchange = (e) => {
      let f = e.target.files[0];
      if (f)
        this.helperEvent.imageToBytes(f, (bytes, type) => {
          let blob = new Blob([bytes.buffer], { type: type });
          this.dom.image.avatarVal.src = URL.createObjectURL(blob);
          this.user.image = { bytes: bytes, type: type };
          this.dataEvent.writeSignUpState({ user: this.user });
        });
    };
    this.dom.btn.register.onclick = () => {
      let valid =
        this.validationMsg.username == "" &&
        this.validationMsg.password == "" &&
        this.validationMsg.mail == "" &&
        this.validationMsg.phone == "";
      if (valid) {
        if (this.user.password != this.dom.textBox.confirmPassword.value) {
          this.dom.text.confirmPasswordValidate.innerText =
            "Password doesn't match!";
        } else {
        }
      }
    };

    //login page
    this.dom.btn.cancel.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromLogin;
      await this.helperEvent.timeOut;
      this.viewEvent.animateToHome;
      window.history.back();
    };
    this.dom.btn.submitLogin.onclick = () => {
      this.dom.text.loginValidate.innerText = "Incorrect username or password!";
    };
  }
}

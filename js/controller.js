import DomElement from "./dom_element.js";
import ViewEvent from "./view_event.js";
import HelperEvent from "./helper_event.js";
import HelperString from "./helper_string.js";
import DataEvent from "./data_event.js";
import * as model from "./model.js";
import API from "./api.js";
export default class Controller {
  constructor() {
    this.dom = new DomElement();
    this.viewEvent = new ViewEvent();
    this.helperEvent = new HelperEvent();
    this.helperString = new HelperString();
    this.dataEvent = new DataEvent();
    this.api = new API();
    let { User, Song } = { ...model };
    this.store = {
      user: null,
      songs: [],
      currentSong: null,
      playlists: [],
      currentPlaylist: null,
    };
    this.popularEngSongs = [];
    this.popularKhSongs = [];
    this.trendingEngSongs = [];
    this.trendingKhSongs = [];

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
    let audio = document.getElementById("music-player");
    let testGetUser = async () => {
      let res = await this.api.getUser({
        userName: "sreyvin",
        password: "Sreyvin123",
        login: true,
      });
      if (res.success) {
        console.log(res.result);
      } else console.log(res.msg);
    };
    testGetUser();
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
      } else if (window.history.state.page == "music") {
        for (var step in this.viewEvent.leaveSignup)
          this.viewEvent.leaveSignup[step]();
        for (var step in this.viewEvent.enterHome)
          this.viewEvent.enterHome[step]();
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
        await this.helperEvent.timeOut();
        if (window.history.state.page == "signup") {
          this.viewEvent.animateToSignup;
        } else if (window.history.state.page == "login") {
          this.viewEvent.animateToLogin;
        } else if (window.history.state.page == "music") {
          this.viewEvent.animateToMusic;
        }
      } else {
        audio.pause();
        audio.currentTime = 0;
        this.viewEvent.animateFromSignup;
        this.viewEvent.animateFromLogin;
        this.viewEvent.animateFromMusic;
        await this.helperEvent.timeOut();
        this.viewEvent.animateToHome;
      }
    };

    //home page
    this.dom.btn.login.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToLogin;
      window.history.pushState({ page: "login" }, "login page");
    };
    this.dom.btn.signup.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToSignup;
      window.history.pushState({ page: "signup" }, "signup page");
    };
    this.dom.btn.start.onclick = async () => {
      audio.play();
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromHome;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToMusic;
      window.history.pushState({ page: "music" }, "music page");
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
      await this.helperEvent.timeOut();
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
    this.dom.btn.register.onclick = async () => {
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
          let avatar = this.user.image;
          if (!avatar.bytes) {
            avatar = avatar.replace("url(", "");
            avatar = avatar.replace(")", "");
          }
          let user = {
            userName: this.user.username,
            userNameKh: null,
            realName: null,
            realNameKh: null,
            password: this.user.password,
            gender: this.user.gender,
            birthDate: this.user.birthDate ?? null,
            address: null,
            mail: this.user.mail ?? null,
            phone: this.user.phone ?? null,
            image: avatar,
          };
          user.joinedDate = this.helperEvent.dateConverter(new Date());
          this.viewEvent.startDataProcess("Saving...");
          await this.helperEvent.timeOut(1000);
          let getUserRes = await this.api.getUser({
            userName: user.userName,
            login: false,
          });
          let userExist = false;
          if (getUserRes.success && getUserRes.result.info.length > 0) {
            userExist = true;
          }
          if (userExist) {
            this.validationMsg.username = "This username already exists";
            this.dom.text.usernameValidate.innerText =
              this.validationMsg.username;
            this.dataEvent.writeSignUpState({ validation: this.validationMsg });
            document.body.removeChild(this.dom.frame.modal);
          } else {
            let res = await this.api.register(user);
            if (res.success) {
              this.viewEvent.takeTransition;
              await this.helperEvent.timeOut();
              await this.viewEvent.stopDataProcess();
              await this.viewEvent.animateFromSignup;
              await this.viewEvent.animateToHome;
              document.body.removeChild(this.dom.frame.modal);
              window.history.back();
            } else {
              console.log(res.msg);
              await this.viewEvent.stopDataProcess();
              document.body.removeChild(this.dom.frame.modal);
            }
          }
        }
      }
    };

    //login page
    this.dom.btn.cancel.onclick = async () => {
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromLogin;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToHome;
      window.history.back();
    };
    this.dom.btn.submitLogin.onclick = () => {
      this.dom.text.loginValidate.innerText = "Incorrect username or password!";
    };
    //music-page
    let openMenu = false;
    this.dom.btn.menu.onclick = async () => {
      if (openMenu) {
        openMenu = await this.viewEvent.closeMenu;
      } else {
        openMenu = await this.viewEvent.openMenu;
      }
    };
    this.dom.page.music.onwheel = (e) => {
      this.dom.image.cd.style.animationDuration = "0.5s";
      this.dom.image.cd.style.transition = "0.25s";
      this.dom.image.cd.style.filter = "brightness(10%)";
      audio.pause();
      this.dom.file.audioSource.src = "/assets/audio/queen_bee.mp3";
      setTimeout(() => {
        this.dom.image.cd.style.backgroundImage =
          "url(/assets/images/audio/time.jpg)";
        this.dom.image.cd.style.filter = "brightness(100%)";
        setTimeout(() => {
          this.dom.image.cd.style.animationDuration = "20s";
          audio.load();
          audio.play();
        }, 250);
      }, 250);
    };
    this.dom.image.logoWrap.onclick = async () => {
      audio.pause();
      audio.currentTime = 0;
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromMusic;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToHome;
      window.history.back();
    };
  }
}

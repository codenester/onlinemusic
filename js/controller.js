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
    this.allKhSongs = [];
    this.allEnSongs = [];
    this.topSongs = [];
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
    this.musicPageMode = "topSong";
    this.allSongMode = "kh";
    this.playlist = [];
  }
  get start() {
    //global

    let currentSongPos = 0;
    let currentTopCate = 0;
    let titles = [
      "Popular Khmer Songs",
      "Popular English Songs",
      "Trending Khmer Songs",
      "Trending English Songs",
    ];

    let login = false;
    let initUser = async () => {
      let userRes = await this.api.getUser({
        userName: currentUser,
        login: false,
      });
      if (userRes.success) {
        this.store.user = userRes.result.info[0];
        let playlistRes = await this.api.getPlaylist({
          user: this.store.user.id,
        });
        this.playlist = playlistRes.result.info;
      }
    };
    let extractTopSongs = async () => {
      let res = await this.api.getTopSongs();
      this.popularEngSongs = res.result.info.popularEn;
      this.popularKhSongs = res.result.info.popularKh;
      this.trendingEngSongs = res.result.info.trendingEn;
      this.trendingKhSongs = res.result.info.trendingKh;
      audio.pause();
      this.dom.file.audioSource.src = "/" + this.popularKhSongs[0].source;
      this.dom.image.cd.style.backgroundImage = `url(/${this.popularKhSongs[0].image})`;
      this.dom.text.listTitle.innerText = "Popular Khmer Songs";
      this.popularKhSongs.forEach((v, i) => {
        this.dom.text.listData[i].innerText = v.nameKh ?? v.name;
      });
      this.topSongs = [
        this.popularKhSongs,
        this.popularEngSongs,
        this.trendingKhSongs,
        this.trendingEngSongs,
      ];
      audio.load();
    };
    extractTopSongs();
    if (currentUser) {
      login = true;
      initUser();

      this.dom.btn.signup.style.display = "none";
      this.dom.btn.login.style.display = "none";
      this.dom.text.currentUser.innerText = currentUser.toUpperCase();
      this.dom.text.currentUser.style.display = "flex";
      this.dom.btn.logout.style.display = "flex";
    } else {
      this.dom.btn.signup.style.display = "flex";
      this.dom.btn.login.style.display = "flex";
      this.dom.text.currentUser.style.display = "none";
      this.dom.btn.logout.style.display = "none";
    }
    let audio = document.getElementById("music-player");
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
      this.dom.text.playingSong.forEach((v) => {
        let currentSong = this.topSongs[currentTopCate][currentSongPos];
        let artists = currentSong.artists.map((el) => el.nameKh ?? el.name);
        v.innerText = `${
          currentSong.nameKh ?? currentSong.name
        }: by ${artists.join(" ft. ")}`;
      });
    };
    this.dom.btn.logout.onclick = async () => {
      this.api.logout();
      this.dom.btn.login.style.transform = "scaleY(0)";
      this.dom.btn.signup.style.transform = "scaleY(0)";
      this.dom.text.currentUser.style.transition = "0.4s";
      this.dom.btn.logout.style.transition = "0.4s";
      this.dom.text.currentUser.style.opacity = 0;
      this.dom.btn.logout.style.transform = "scaleY(0)";
      await this.helperEvent.timeOut();
      this.dom.text.currentUser.style.display = "none";
      this.dom.btn.logout.style.display = "none";
      this.dom.btn.signup.style.display = "flex";
      this.dom.btn.login.style.display = "flex";
      this.dom.text.currentUser.style.transition = "0s";
      this.dom.btn.logout.style.transition = "0s";
      this.dom.text.currentUser.style.opacity = 1;
      this.dom.btn.logout.style.transform = "scaleY(1)";
      this.dom.btn.signup.style.transition = "0.4s";
      this.dom.btn.login.style.transition = "0.4s";
      this.dom.btn.signup.style.transform = "scaleY(1)";
      this.dom.btn.login.style.transform = "scaleY(1)";
      await this.helperEvent.timeOut();
      this.dom.btn.signup.style.transition = "0s";
      this.dom.btn.login.style.transition = "0s";
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
    this.dom.textBox.loginUserName.onkeypress = () => {
      this.dom.text.loginValidate.innerText = "";
    };
    this.dom.textBox.loginPassword.onkeypress = () => {
      this.dom.text.loginValidate.innerText = "";
    };
    this.dom.btn.submitLogin.onclick = async () => {
      this.viewEvent.startDataProcess("logging in...");
      let res = await this.api.getUser({
        userName: this.dom.textBox.loginUserName.value,
        password: this.dom.textBox.loginPassword.value,
        login: true,
      });
      if (res.success && res.result.info.length > 0) {
        this.store.user = res.result.info[0];
        let playlistRes = await this.api.getPlaylist({
          user: this.store.user.id,
        });
        this.playlist = playlistRes.result.info;
        this.viewEvent.takeTransition;
        document.body.removeChild(this.dom.frame.modal);
        await this.viewEvent.animateFromLogin;
        this.dom.btn.login.style.display = "none";
        this.dom.btn.signup.style.display = "none";
        this.dom.text.currentUser.style.display = "flex";
        this.dom.btn.logout.style.display = "flex";
        this.dom.text.currentUser.innerText =
          this.store.user.userName.toUpperCase();
        await this.viewEvent.animateToHome;
        window.history.back();
      } else {
        this.dom.text.loginValidate.innerText =
          "Incorrect username or password!";
        document.body.removeChild(this.dom.frame.modal);
      }
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
    let switchAudio = () => {
      this.dom.text.listData.forEach((v, i) => {
        if (i != currentSongPos) {
          v.classList.remove("current");
        } else {
          v.classList.add("current");
        }
      });
      this.dom.image.cd.style.animationDuration = "0.5s";
      this.dom.image.cd.style.transition = "0.25s";
      this.dom.image.cd.style.filter = "brightness(10%)";
      this.dom.text.playingSong.forEach((v) => {
        let currentSong = this.topSongs[currentTopCate][currentSongPos];
        let artists = currentSong.artists.map((el) => el.nameKh ?? el.name);
        v.innerText = `${
          currentSong.nameKh ?? currentSong.name
        }: by ${artists.join(" ft. ")}`;
      });
      audio.pause();
      this.dom.file.audioSource.src =
        "/" + this.topSongs[currentTopCate][currentSongPos].source;
      setTimeout(() => {
        this.dom.image.cd.style.backgroundImage = `url(/${this.topSongs[currentTopCate][currentSongPos].image})`;
        this.dom.image.cd.style.filter = "brightness(100%)";
        setTimeout(() => {
          this.dom.image.cd.style.animationDuration = "20s";
          audio.load();
          audio.play();
          this.api.updateSong({
            id: this.topSongs[currentTopCate][currentSongPos].id,
            download: false,
          });
        }, 250);
      }, 250);
    };
    this.dom.page.music.onwheel = (e) => {
      if (this.musicPageMode == "topSong") {
        if (e.deltaY > 0) {
          if (currentTopCate < 4) {
            currentSongPos++;
            if (currentSongPos > 4) {
              currentSongPos = 0;
              currentTopCate++;
              if (currentTopCate > 3) currentTopCate = 0;
              this.dom.text.listTitle.innerText = titles[currentTopCate];
              this.topSongs[currentTopCate].forEach((v, i) => {
                this.dom.text.listData[i].innerText = v.nameKh ?? v.name;
              });
              this.dom.util.indicators.forEach((v, i) => {
                if (i != currentTopCate) {
                  v.classList.remove("active");
                } else {
                  v.classList.add("active");
                }
              });
            }
          }
        } else {
          if (currentTopCate >= 0) {
            currentSongPos--;
            if (currentSongPos < 0) {
              currentSongPos = 4;
              currentTopCate--;
              if (currentTopCate < 0) currentTopCate = 3;
              this.dom.text.listTitle.innerText = titles[currentTopCate];
              this.topSongs[currentTopCate].forEach((v, i) => {
                this.dom.text.listData[i].innerText = v.nameKh ?? v.name;
              });
              this.dom.util.indicators.forEach((v, i) => {
                if (i != currentTopCate) {
                  v.classList.remove("active");
                } else {
                  v.classList.add("active");
                }
              });
            }
          }
        }
        switchAudio();
      }
    };
    let options = Array.from(document.getElementsByClassName("option"));
    options.forEach((v) => {
      v.onclick = () => {
        let i = options.indexOf(v);
        let dropBoxes = Array.from(document.getElementsByClassName("dropbox"));
        v.children[1].style.transform = "scaleY(1)";
        v.children[1].style.opacity = 1;
        dropBoxes.forEach((el, j) => {
          if (i != j) {
            el.style.transform = "scaleY(0)";
            el.style.opacity = 0;
          }
        });
      };
    });
    let dDownloads = Array.from(document.getElementsByClassName("d-download"));
    let dAddToPlaylists = Array.from(
      document.getElementsByClassName("d-add-to-playlist")
    );
    dAddToPlaylists.forEach((v, i) => {
      v.onclick = async () => {
        let res = await this.api.addPlaylist({
          user: this.store.user.id,
          music: this.topSongs[currentTopCate][i].id,
          createdDate: this.helperEvent.dateConverter(new Date()),
        });
        if (!res.success) {
          console.log(res.msg);
          return;
        }
        let playlistRes = await this.api.getPlaylist({
          user: this.store.user.id,
        });
        this.playlist = playlistRes.result.info;
      };
    });
    dDownloads.forEach((v, i) => {
      v.onclick = () => {
        this.api.updateSong({
          id: this.topSongs[currentTopCate][i].id,
          download: true,
        });
        let a = document.createElement("a");
        a.href = `/${this.topSongs[currentTopCate][i].source}`;
        a.download =
          this.topSongs[currentTopCate][i].source.split("/")[
            this.topSongs[currentTopCate][i].source.split("/").length - 1
          ];
        a.target = "_blank";
        a.click();
      };
    });
    window.onclick = (e) => {
      if (
        !e.target.classList.contains("option") &&
        !e.target.classList.contains("fas")
      ) {
        let dropBoxes = Array.from(document.getElementsByClassName("dropbox"));
        dropBoxes.forEach((el) => {
          el.style.transform = "scaleY(0)";
          el.style.opacity = 0;
        });
      }
    };
    this.dom.image.logoWrap.onclick = async () => {
      if (openMenu) {
        this.viewEvent.closeMenu;
        openMenu = false;
      }
      this.dom.page.allSong.style.display = "none";
      document.getElementById("player").pause();
      document.getElementById("player").style.transform =
        "translate(-100%,-100%)";
      document.getElementById("switcher").style.transform =
        "translate(0,-100%)";
      audio.pause();
      audio.currentTime = 0;
      this.viewEvent.takeTransition;
      this.viewEvent.animateFromMusic;
      await this.helperEvent.timeOut();
      this.viewEvent.animateToHome;
      window.history.back();
    };
    this.dom.text.listData.forEach((v, i) => {
      v.onclick = () => {
        currentSongPos = i;
        switchAudio();
      };
    });
    this.dom.util.indicators.forEach((v, i) => {
      v.onclick = () => {
        currentTopCate = i;
        this.dom.text.listTitle.innerText = titles[currentTopCate];
        currentSongPos = 0;
        this.dom.text.listData.forEach((el, j) => {
          let target = this.topSongs[currentTopCate];
          el.innerText = target[j].nameKh ?? target[j].name;
        });
        this.dom.util.indicators.forEach((el, j) => {
          if (j != i) {
            el.classList.remove("active");
          } else {
            el.classList.add("active");
          }
        });
        switchAudio();
      };
    });
    audio.onended = () => {
      if (currentTopCate < 4) {
        currentSongPos++;
        if (currentSongPos > 4) {
          currentSongPos = 0;
          currentTopCate++;
          if (currentTopCate > 3) currentTopCate = 0;
          this.dom.text.listTitle.innerText = titles[currentTopCate];
          this.topSongs[currentTopCate].forEach((v, i) => {
            this.dom.text.listData[i].innerText = v.nameKh ?? v.name;
          });
          this.dom.util.indicators.forEach((v, i) => {
            if (i != currentTopCate) {
              v.classList.remove("active");
            } else {
              v.classList.add("active");
            }
          });
        }
      }
      switchAudio();
    };
    audio.onpause = () => {
      this.dom.image.cd.style.animationPlayState = "paused";
    };
    audio.onplay = () => {
      this.dom.image.cd.style.animationPlayState = "running";
    };
    this.dom.navigation.logout.onclick = async () => {
      this.viewEvent.takeTransition;
      audio.pause();
      this.api.logout();
      this.dom.btn.signup.style.display = "flex";
      this.dom.btn.login.style.display = "flex";
      this.dom.text.currentUser.style.display = "none";
      this.dom.btn.logout.style.display = "none";
      await this.viewEvent.animateFromMusic;
      await this.viewEvent.animateToHome;
    };
    let updateSong = async (data) => {
      let res = await this.api.updateSong(data);
    };
    let dateConverter = this.helperEvent.dateConverter;
    let tempStore = this.store;
    let addPlaylist = async (id) => {
      let res = await this.api.addPlaylist({
        music: id,
        createdDate: dateConverter(new Date()),
        user: tempStore.user.id,
      });
      if (!res.success) {
        console.log(res.msg);
        return;
      }
      let playlistRes = await this.api.getPlaylist({
        user: this.store.user.id,
      });
      this.playlist = playlistRes.result.info;
    };
    let getAllSongs = async () => {
      let res = await this.api.getAllSongs();
      if (res.success) {
        this.allKhSongs = res.result.info.khSongs;
        this.allEnSongs = res.result.info.enSongs;
        document.getElementById("all-song-wrap").innerHTML = "";
        this.viewEvent.generateSongs(
          this.allKhSongs,
          updateSong,
          addPlaylist,
          false,
          this.playlist
        );
        document.getElementById("all-song-wrap").style.opacity = 1;
      } else {
        console.log(res.msg);
      }
    };
    let switchAllSong = (mode) => {
      document.getElementById("all-song-wrap").innerHTML = "";
      this.viewEvent.generateSongs(
        mode == "kh" ? this.allKhSongs : this.allEnSongs,
        updateSong,
        addPlaylist,
        false,
        this.playlist
      );
      document.getElementById("all-song-wrap").style.opacity = 1;
    };
    this.dom.navigation.allSong.onclick = async (e) => {
      this.viewEvent.closeMenu;
      openMenu = false;
      if (this.musicPageMode != "allSong") {
        document.getElementById("player").pause();
        document.getElementById("player").style.transform =
          "translate(-100%,-100%)";
        getAllSongs();
        Array.from(e.target.parentNode.children).forEach((v, i) => {
          let j = Array.from(e.target.parentNode.children).indexOf(e.target);
          if (i == j) {
            v.classList.add("m-active");
          } else {
            v.classList.remove("m-active");
          }
        });
        this.musicPageMode = "allSong";
        this.viewEvent.takeTransition;
        audio.pause();
        await this.viewEvent.animateFromTopSong;
        this.dom.page.music.style.display = "none";
        this.dom.page.allSong.style.display = "flex";
        document.getElementById("switcher").style.transform =
          "translate(-100%,-100%)";
      }
    };
    this.dom.navigation.topSong.onclick = async () => {
      this.viewEvent.closeMenu;
      openMenu = false;
      if (this.musicPageMode != "topSong") {
        this.dom.page.allSong.style.display = "none";
        this.viewEvent.takeTransition;
        audio.load();
        audio.play();
        this.dom.page.music.style.display = "flex";
        await this.helperEvent.timeOut(100);
        await this.viewEvent.animateToTopSong;
        this.musicPageMode = "topSong";
      }
    };
    let doubleUpdate = async (songData, playlistId) => {
      let res = await this.api.updateSong(songData);
      let res2 = await this.api.updatePlaylist({ id: playlistId });
    };
    this.dom.navigation.playlist.onclick = async (e) => {
      this.viewEvent.closeMenu;
      openMenu = false;
      if (this.musicPageMode != "playlist") {
        document.getElementById("player").pause();
        document.getElementById("player").style.transform =
          "translate(-100%,-100%)";
        document.getElementById("switcher").style.transform =
          "translate(0,-100%)";
        document.getElementById("all-song-wrap").innerHTML = "";
        this.viewEvent.generateSongs(
          this.playlist,
          doubleUpdate,
          addPlaylist,
          true
        );
        document.getElementById("all-song-wrap").style.opacity = 1;
        Array.from(e.target.parentNode.children).forEach((v, i) => {
          let j = Array.from(e.target.parentNode.children).indexOf(e.target);
          if (i == j) {
            v.classList.add("m-active");
          } else {
            v.classList.remove("m-active");
          }
        });
        this.musicPageMode = "playlist";
        this.viewEvent.takeTransition;
        audio.pause();
        await this.viewEvent.animateFromTopSong;
        this.dom.page.music.style.display = "none";
        this.dom.page.allSong.style.display = "flex";
      }
    };
    document.getElementById("kh-song").onclick = (e) => {
      e.target.style.color = "#fff";
      e.target.nextElementSibling.style.color = "#ddd";
      if (this.allSongMode != "kh") {
        document.getElementById("player").pause();
        switchAllSong("kh");
        this.allSongMode = "kh";
        document.getElementById("player").style.transform =
          "translate(-100%,-100%)";
      }
    };

    document.getElementById("en-song").onclick = (e) => {
      e.target.style.color = "#fff";
      e.target.previousElementSibling.style.color = "#ddd";
      if (this.allSongMode != "en") {
        document.getElementById("player").pause();
        switchAllSong("en");
        this.allSongMode = "en";
        document.getElementById("player").style.transform =
          "translate(-100%,-100%)";
      }
    };
  }
}

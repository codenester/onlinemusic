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
    this.dom.util.musicIndicator.style.transition = "0.4s";
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
    this.dom.util.musicIndicator.style.transition = "0s";
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
        let nav = Array.from(this.dom.navigation.topSong.parentNode.children);
        nav.forEach((v, i) => {
          let j = nav.indexOf(this.dom.navigation.topSong);
          if (i == j) {
            v.classList.add("m-active");
          } else {
            v.classList.remove("m-active");
          }
        });
        this.dom.util.search.style.maxWidth = "200px";
        this.dom.frame.navBar.style.transform =
          "translate(calc(-100% + 110px))";
        this.dom.frame.listWrap.style.height = "100%";
        this.dom.util.musicIndicator.style.transform = "translate(-10px, -50%)";
      },
      step3: () => {
        this.dom.frame.listContainer.style.display = "grid";
        this.dom.image.cd.style.opacity = 1;
        this.dom.util.currentPlay.style.transform =
          "translateY(-100%) translateX(0)";
      },
    };
  }
  get leaveMusic() {
    return {
      step1: () => {
        this.dom.frame.listContainer.style.display = "none";
        this.dom.image.cd.style.opacity = 0;
        this.dom.util.currentPlay.style.transform =
          "translateX(100%) translateY(-100%)";
        this.dom.util.musicIndicator.style.transform = "translate(20px, -50%)";
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
  get animateFromTopSong() {
    return (async () => {
      this.leaveMusic.step1();
      await this.helperEvent.timeOut();
      this.leaveMusic.step2();
    })();
  }
  get animateToTopSong() {
    return (async () => {
      this.enterMusic.step2();
      await this.helperEvent.timeOut();
      this.enterMusic.step3();
    })();
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
  generateSongs(songs) {
    songs.forEach((v) => {
      let songCard = document.createElement("div");
      songCard.className = "song";
      let songPic = document.createElement("div");
      songPic.className = "song-pic";
      songPic.style.backgroundImage = `url(/${v.image})`;
      songCard.appendChild(songPic);
      let songInfo = document.createElement("div");
      songInfo.className = "song-info";
      let songName = document.createElement("div");
      songName.className = "song-name";
      songName.innerText = v.nameKh ?? v.name;
      let artists = document.createElement("div");
      artists.className = "song-artist";
      artists.innerText = v.artists.map((v) => v.nameKh ?? v.name).join(" ft ");
      let downloaded = document.createElement("div");
      downloaded.className = "downloaded";
      downloaded.innerText = `Downloaded: ${v.downloadCount}`;
      let listened = document.createElement("div");
      listened.className = "listened";
      listened.innerText = `Listened: ${v.listenedCount}`;
      let addToPlaylist = document.createElement("div");
      addToPlaylist.className = "add-to-playlist";
      let listIcon = document.createElement("i");
      listIcon.classList.add("fa");
      listIcon.classList.add("fa-list");
      addToPlaylist.appendChild(listIcon);
      let addToPlaylistSpan = document.createElement("span");
      addToPlaylistSpan.className = "caption";
      addToPlaylistSpan.innerText = "Add to playlist";
      addToPlaylist.appendChild(addToPlaylistSpan);
      let download = document.createElement("div");
      download.className = "download";
      let downloadIcon = document.createElement("i");
      downloadIcon.classList.add("fa");
      downloadIcon.classList.add("fa-download");
      download.appendChild(downloadIcon);
      let downloadSpan = document.createElement("span");
      downloadSpan.className = "caption";
      downloadSpan.innerText = "Download";
      download.appendChild(downloadSpan);
      let play = document.createElement("div");
      play.className = "play";
      let playIcon = document.createElement("i");
      playIcon.classList.add("fa");
      playIcon.classList.add("fa-play");
      play.appendChild(playIcon);
      let playSpan = document.createElement("span");
      playSpan.className = "caption";
      playSpan.innerText = "Play";
      play.appendChild(playSpan);
      songInfo.appendChild(songName);
      songInfo.appendChild(artists);
      songInfo.appendChild(downloaded);
      songInfo.appendChild(listened);
      songInfo.appendChild(addToPlaylist);
      songInfo.appendChild(download);
      songInfo.appendChild(play);
      songCard.appendChild(songInfo);
      document.getElementById("all-song-wrap").appendChild(songCard);
    });
  }
}

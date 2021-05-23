onload = () => {
  let signup = document.getElementById("sign-up");
  let login = document.getElementById("login");
  let smallPart = document.getElementById("small-part");
  let leftPart = document.getElementById("left-part");
  let rightPart = document.getElementById("right-part");
  let topSect = document.getElementById("top-sect");
  let midSect = document.getElementById("mid-sect");
  let botSect = document.getElementById("bot-sect");
  let navWrap = document.getElementById("nav-wrap");
  let btnWrap = document.getElementById("btn-wrap");
  let home = document.getElementById("home");
  let signupPage = document.getElementById("signup-page");
  onpopstate = async () => {
    if (!history.state) {
      home.style.display = "flex";
      signupPage.style.display = "none";
      await timeOut();
      homeIn();
      smallPart.style.transition = "0.4s";
      smallPart.style.width = "25%";
      smallPart.style.minWidth = "250px";
    } else {
      smallPart.style.transition = "0.4s";
      smallPart.style.width = 0;
      smallPart.style.minWidth = 0;
      await timeOut();
      homeOut();
      await timeOut();
      home.style.display = "none";
      signupPage.style.display = "flex";
    }
  };

  if (history.state) {
    homeOutState();
  } else {
    homeInState();
  }
  login.onclick = async () => {};
  signup.onclick = async () => {
    smallPart.style.transition = "0.4s";
    smallPart.style.width = 0;
    smallPart.style.minWidth = 0;
    await timeOut();
    homeOut();
    await timeOut();
    home.style.display = "none";
    signupPage.style.display = "flex";
    history.pushState({ page: "signup" }, "signup");
  };
  function homeInState() {
    home.style.display = "flex";
    signupPage.style.display = "none";
    smallPart.style.transition = "0s";
    smallPart.style.width = "25%";
    smallPart.style.minWidth = "250px";
    leftPart.style.transition = "0s";
    rightPart.style.transition = "0s";
    topSect.style.transition = "0s";
    midSect.style.transition = "0s";
    botSect.style.transition = "0s";
    navWrap.style.transition = "0s";
    btnWrap.style.transition = "0s";
    leftPart.style.marginLeft = "0";
    rightPart.style.marginLeft = "0";
    navWrap.style.transform = "translateY(0)";
    btnWrap.style.transform = "translateY(0)";
    botSect.style.transform = "translateY(0)";
    midSect.style.transform = "translateX(0)";
  }
  function homeOutState() {
    home.style.display = "none";
    signupPage.style.display = "flex";
    smallPart.style.transition = "0s";
    smallPart.style.width = 0;
    smallPart.style.minWidth = 0;
    leftPart.style.transition = "0s";
    rightPart.style.transition = "0s";
    topSect.style.transition = "0s";
    midSect.style.transition = "0s";
    botSect.style.transition = "0s";
    navWrap.style.transition = "0s";
    btnWrap.style.transition = "0s";
    leftPart.style.marginLeft = "-100%";
    rightPart.style.marginLeft = "100%";
    navWrap.style.transform = "translateY(-100%)";
    btnWrap.style.transform = "translateY(200%)";
    botSect.style.transform = "translateY(100%)";
    midSect.style.transform = "translateX(100%)";
  }

  function homeIn() {
    leftPart.style.transition = "0.4s";
    rightPart.style.transition = "0.4s";
    topSect.style.transition = "0.4s";
    midSect.style.transition = "0.4s";
    botSect.style.transition = "0.4s";
    navWrap.style.transition = "0.4s";
    btnWrap.style.transition = "0.4s";
    leftPart.style.marginLeft = "0";
    rightPart.style.marginLeft = "0";
    navWrap.style.transform = "translateY(0)";
    btnWrap.style.transform = "translateY(0)";
    botSect.style.transform = "translateY(0)";
    midSect.style.transform = "translateX(0)";
  }
  function timeOut() {
    return new Promise((resolve) => setTimeout(resolve, 400));
  }
  function homeOut() {
    leftPart.style.transition = "0.8s";
    rightPart.style.transition = "0.4s";
    topSect.style.transition = "0.4s";
    midSect.style.transition = "0.4s";
    botSect.style.transition = "0.4s";
    navWrap.style.transition = "0.4s";
    btnWrap.style.transition = "0.4s";
    leftPart.style.marginLeft = "-100%";
    rightPart.style.marginLeft = "100%";
    navWrap.style.transform = "translateY(-100%)";
    btnWrap.style.transform = "translateY(200%)";
    botSect.style.transform = "translateY(100%)";
    midSect.style.transform = "translateX(100%)";
  }
};

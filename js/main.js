let controlicon = document.querySelectorAll(".control-icon .control");
let sec = document.querySelectorAll(".section");
let Allsec = document.querySelector(".main-content");

function pageTransition() {
  for (let i = 0; i < controlicon.length; i++) {
    controlicon[i].addEventListener("click", function () {
      let currbtn = document.querySelectorAll(".active-btn");
      currbtn[0].className = currbtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  Allsec.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    if (id) {
      sec.forEach((section) => {
        section.classList.remove("active");
      });
      let element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  let btnlight = document.querySelector(".light-icon");
  btnlight.addEventListener("click", () => {
    let body = document.querySelector("body");
    body.classList.toggle("light-mode");
  });
}

pageTransition();

let projects = document.querySelectorAll(".portfolio .box");
let h1 = document.querySelectorAll(".about .info .right-about .box .text h1");

h1[0].innerHTML = `
<h1>${projects.length}+</h1>
`;

let countDownDate = new Date("Jan 1, 2021 0:0:0").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = dateNow - countDownDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));

  h1[1].innerHTML = `
  <h1>${days}+</h1>
  `;
}, 1000);

let nameErr = document.getElementById("errName");
let emailErr = document.getElementById("erremail");
let subErr = document.getElementById("errsub");
let areaErr = document.getElementById("errarea");
let sendErr = document.getElementById("errsend");

function errName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameErr.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerHTML = "Write full Name";
    return false;
  }
  nameErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function erremail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailErr.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailErr.innerHTML = "Email Invalid";
    return false;
  }
  emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function errsub() {
  let sub = document.getElementById("contact-sub").value;
  let required = 10;
  let check = required - sub.length;

  if (sub.length == 0) {
    subErr.innerHTML = "Subject is required";
    return false;
  }
  if (check > 0) {
    subErr.innerHTML = `${check} more characters required`;
    return false;
  }
  subErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function errarea() {
  let area = document.getElementById("contact-area").value;
  let required2 = 30;
  let check2 = required2 - area.length;

  if (area.length == 0) {
    areaErr.innerHTML = "MESSAGE is required";
    return false;
  }
  if (check2 > 0) {
    areaErr.innerHTML = `${check2} more characters required`;
    return false;
  }
  areaErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validform() {
  if (!errName() || !erremail() || !errsub() || !errarea()) {
    sendErr.style.display = "block";
    sendErr.innerHTML = "please fix error to submit";
    setTimeout(function () {
      sendErr.style.display = "none";
    }, 3000);
    return false;
  }
}

window.onload = function() {
  var sidebar = document.getElementById("mySidebar");
  var button = document.getElementById("menuButton");
  var main = document.getElementById("main");
  var links = sidebar.getElementsByTagName('a');
  var themeSwitcher = document.getElementById("themeSwitcher");
  var img = document.querySelector("#content img");
  var video = document.querySelector("#content video");

  if (localStorage.getItem('menuOpen') === 'true') {
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    button.style.transform = "rotate(90deg)";
    button.innerHTML = "×";
    for (var i = 0; i < links.length; i++) {
      links[i].style.visibility = "visible";
      links[i].style.opacity = "1";
    }
    themeSwitcher.style.visibility = "visible";
    themeSwitcher.style.opacity = "1";
    img.style.transform = "scale(0.8)";
    video.style.transform = "scale(0.8)";
  }
}

function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var button = document.getElementById("menuButton");
  var main = document.getElementById("main");
  var links = sidebar.getElementsByTagName('a');
  var themeSwitcher = document.getElementById("themeSwitcher");
  var img = document.querySelector("#content img");
  var video = document.querySelector("#content video");

  if (sidebar.style.width === "250px") {
    for (var i = 0; i < links.length; i++) {
      (function(i) {
        setTimeout(function() {
          links[i].style.visibility = "hidden";
          links[i].style.opacity = "0";
        }, 100 * i);
      })(i);
    }
    setTimeout(function() {
      themeSwitcher.style.visibility = "hidden";
      themeSwitcher.style.opacity = "0";
      sidebar.style.width = "0";
      main.style.marginLeft= "0";
      button.style.transform = "rotate(0deg)";
      button.innerHTML = "☰";
      localStorage.setItem('menuOpen', 'false');
      img.style.transform = "scale(1)";
      video.style.transform = "scale(1)";
    }, 100 + 100 * links.length);
  } else {
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    button.style.transform = "rotate(90deg)";
    button.innerHTML = "×";
    localStorage.setItem('menuOpen', 'true');
    for (var i = 0; i < links.length; i++) {
      links[i].style.visibility = "visible";
      links[i].style.opacity = "1";
    }
    themeSwitcher.style.visibility = "visible";
    themeSwitcher.style.opacity = "1";
    img.style.transform = "scale(0.8)";
    video.style.transform = "scale(0.8)";
  }
}

var themeButton = document.getElementById("themeButton");
var themeLabel = document.getElementById("themeLabel");
var body = document.body;
var header = document.getElementById("header");
var menuButton = document.getElementById("menuButton");

if (localStorage.getItem('darkTheme') === 'true') {
  setDarkTheme();
} else if (localStorage.getItem('lightTheme') === 'true') {
  setLightTheme();
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setDarkTheme();
} else {
  setLightTheme();
}

themeButton.addEventListener("change", function() {
  if (this.checked) {
    localStorage.setItem('darkTheme', 'true');
    localStorage.removeItem('lightTheme');
    setDarkTheme();
  } else {
    localStorage.setItem('lightTheme', 'true');
    localStorage.removeItem('darkTheme');
    setLightTheme();
  }
});

function setDarkTheme() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  header.style.backgroundColor = "#111";
  menuButton.style.color = "#000";
  menuButton.style.backgroundImage = "linear-gradient(to left,transparent,transparent 50%,#808080 50%,#808080)";
  menuButton.style.border = "1px solid #808080";
  themeLabel.textContent = "Тёмная тема";
  themeButton.checked = true;
}

function setLightTheme() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  header.style.backgroundColor = "#f1f1f1";
  menuButton.style.color = "#000";
  menuButton.style.backgroundImage = "linear-gradient(to left,transparent,transparent 50%,#00c6ff 50%,#00c6ff)";
  menuButton.style.border = "1px solid #00C6FF";
  themeLabel.textContent = "Светлая тема";
  themeButton.checked = false;
}

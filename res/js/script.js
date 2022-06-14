function resize() {
  document.querySelectorAll(".image").forEach((x) => {
    x.style.width = window.innerWidth + "px";
    x.style.height = window.innerHeight / 2 + "px";
  });
  document.querySelectorAll(".largeimage").forEach((x) => {
    x.style.width = window.innerWidth + "px";
    x.style.height = window.innerHeight + "px";
  });
}

function load() {
  document.querySelectorAll(".link").forEach((x) => {
    x.addEventListener("click", (e) => {
      window.location.assign("/" + e.target.innerHTML.replaceAll(" ", "").toLowerCase() + ".html");
    });
  });
  resize();
}

window.addEventListener("resize", resize);
window.addEventListener("load", load);

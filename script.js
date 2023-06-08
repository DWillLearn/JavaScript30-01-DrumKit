window.addEventListener("keydown", (e) => {
  e.preventDefault();
  let thisKey = document.querySelector(`.key[data-key=${e.key}]`);
  let thisSound = document.querySelector(`audio[data-key=${e.key}]`);
  if (thisKey) {
    thisSound.addEventListener("play", () => {
      thisKey.classList.add("playing");
    });
    thisSound.addEventListener("ended", () => {
      thisKey.classList.remove("playing");
    });
    thisSound.play();
  }
});

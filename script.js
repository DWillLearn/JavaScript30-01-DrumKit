window.addEventListener("keydown", (e) => {
  e.preventDefault();
  let thisKey = document.querySelector(`.key[data-key=${e.key}]`);
  let thisSound = document.querySelector(`audio[data-key=${e.key}]`);
  if (thisKey) {
    thisSound.currentTime = 0;
    thisSound.play();
    thisKey.classList.add("playing");
    setTimeout(() => thisKey.classList.remove("playing"), 100);
  }
});

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  let thisKey = document.querySelector(`.key[data-key=${e.key}]`);
  let thisSound = document.querySelector(`audio[data-key=${e.key}]`);
  if (thisKey) {
    thisSound.play();
    thisKey.classList.add("playing");
    setTimeout(() => {
      thisKey.classList.remove("playing");
    }, 400);
  }
});

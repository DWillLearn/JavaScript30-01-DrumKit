const hitKey = (key) => {
  let thisKey = document.querySelector(`.key[data-key =${key}]`);
  let thisSound = document.querySelector(`audio[data-key =${key}]`);
  if (thisKey) {
    thisKey.classList.add("playing");
    thisSound.play();
    setTimeout(() => thisKey.classList.remove("playing"), 500);
  }
};

window.addEventListener("keydown", (e) => {
  hitKey(e.key);
});

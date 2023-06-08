const hitKey = (key) => {
  let thisKey = document.querySelector(`.key[data-key =${key}]`);
  let thisSound = document.querySelector(`audio[data-key =${key}]`);
  if (thisKey) {
    thisSound.play();
  }
};

window.addEventListener("keydown", (e) => {
  hitKey(e.key);
});

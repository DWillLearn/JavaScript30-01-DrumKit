window.addEventListener("keydown", (e) => {
  let thisKey = document.querySelector(`.key[data-key=${e.key}]`);
  let thisSound = document.querySelector(`audio[data-key=${e.key}]`);
  if (!thisSound) return;
  thisSound.currentTime = 0;
  thisSound.play();
  thisKey.classList.add("playing");
  setTimeout(() => thisKey.classList.remove("playing"), 100);
});

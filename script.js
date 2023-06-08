const hitKey = (key) => {
  let thisKey = document.querySelector(`.key[data-key =${key}]`);
  let thisSound = document.querySelector(`audio[data-key =${key}]`);
  if (thisKey) {
    console.log(thisKey, thisSound);
  }
};

window.addEventListener("keydown", (e) => {
  hitKey(e.key);
});
//When key is input into a  function as an argument, the argument with a corresponding data-key is also hit
//A is used as an argument for hitKey

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
function stopSounds() {
  sounds.forEach((sound) => {
    const btnSound = document.getElementById(sound);
    btnSound.pause();
    btnSound.load();
  });
}

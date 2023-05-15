const button = document.querySelector('.roll');
const result = document.querySelector('.result');

button.addEventListener("click", function rollTheDice() {
  const getRandom = Math.random() * 6;
  const diceResult = Math.floor(getRandom + 1);
  result.innerHTML = "<img src=\"https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-" + diceResult + "-Showing.png\">";
});

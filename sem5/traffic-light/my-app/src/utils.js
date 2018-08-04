export function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

export function getRandomColor() {
  const arrOfColors = ['Red', 'Yellow', 'Blue', 'Green'];
  return arrOfColors[getRandomNumber()];
}

export function getRandomColors() {
  const result = [];
  for (let i = 0; i < 20; i += 1) {
    result.push(getRandomColor());
  }
  return result;
}

const soundGreen = new Audio('./soundGreen.mp3');
const soundRed = new Audio('./soundRed.mp3');
const soundYellow = new Audio('./soundYellow.mp3');
const soundBlue = new Audio('./soundBlue.mp3');

export function playGreen() {
  soundGreen.play();
  console.log("se presiono el verde");
}

export function playRed() {
  soundRed.play();
  console.log("se presiono el rojo");
}

export function playYellow() {
  soundYellow.play();
  console.log("se presiono el amarillo");
}

export function playBlue() {
  soundBlue.play();
  console.log("se preciono el azul");
}

export function playSounds(input) {
  if (input === 'Green') {
    playGreen();
  } else if (input === 'Red') {
    playRed();
  } else if (input === 'Yellow') {
    playYellow();
  } else if (input === 'Blue') {
    playBlue();
  }
}

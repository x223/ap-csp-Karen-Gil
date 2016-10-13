var Colors = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(Colors)
  if (mouseX < 1 * windowWidth / 5) {
    Colors = '#6638F0';
  } else if (mouseX < 2 * windowWidth / 5) {
    Colors = '#9BFFD2';
  } else if (mouseX < 3 * windowWidth / 5) {
    Colors = '#A87DFF';
  } else {
    Colors = '#E12874';
  }
}
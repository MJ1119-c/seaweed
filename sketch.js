let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('animation-canvas');
  blendMode(BLEND);

  let numSeaweeds = 40;
  let colors = ["rgba(88, 129, 87, 0.5)", "rgba(58, 90, 64, 0.5)", "rgba(173, 193, 120, 0.5)", "rgba(49, 87, 44, 0.5)"];
  for (let j = 0; j < numSeaweeds; j++) {
    let x = (j / numSeaweeds) * windowWidth;
    let totalHeight = random(windowHeight / 6, windowHeight / 3);
    let seaweedWidth = random(30, 60);
    let seaweedColor = colors[j % colors.length];
    let swayRange = random(2, 5);
    let swayFrequency = random(0.01, 0.05);
    seaweeds.push({ x, totalHeight, seaweedWidth, seaweedColor, swayRange, swayFrequency });
  }
}

function draw() {
  clear();
  for (let j = 0; j < seaweeds.length; j++) {
    let seaweed = seaweeds[j];
    let x = seaweed.x;
    let y = windowHeight;
    let segmentLength = seaweed.totalHeight / 20;
    let numSegments = 20;
    strokeWeight(seaweed.seaweedWidth);
    stroke(seaweed.seaweedColor);
    beginShape();
    for (let i = 0; i < numSegments; i++) {
      let offsetX = sin(frameCount * seaweed.swayFrequency + i * 0.5) * seaweed.swayRange;
      let nextX = x + offsetX;
      let nextY = y - segmentLength;
      vertex(nextX, nextY);
      x = nextX;
      y = nextY;
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

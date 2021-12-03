let osc, playing, freq, amp;
function setup() {
  // put setup code here
  let cnv= createCanvas(800,800);
  
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('cosine');
  
  
}
function draw() {
  // put drawing code here
  background(152,190,100);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);
if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.05);
    osc.amp(amp, 0.05);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
  

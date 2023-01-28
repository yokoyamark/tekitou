function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(30)
  background(30)
  smooth()
  p = new Mountain()
}

function draw () {
  p.display()
}


class Mountain {

  constructor() {
    this.radians = 0.0
    this.plus = 0.0
  }

  display () {
    let f = frameRate()
    if (f == 0) {
      return
    }

    if (this.plus == 0.0) {
      this.plus = TWO_PI / (f * 10)
      console.log("FrameRate: " + f)
    }
    translate(width / 2, height / 2)
    rotate(HALF_PI * 3)
    let len = 200
    stroke(255)
    strokeWeight(10)
    point(len * cos(this.radians), len * sin(this.radians))

    if (this.radians < TWO_PI) {
      console.log(this.plus)
      this.radians += this.plus
      console.log(this.radians)
    }

    // if (this.radians < PI) {
      point(len * tan(this.radians), len * sin(this.radians))
    // }

  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  noLoop()
  // saveFrames("Mountain", 'png', 1, 1);
}
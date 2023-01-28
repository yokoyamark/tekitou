function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(60)
  background(0)
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
    // 画面中央を基準点に
    translate(width / 2, height / 2)
    // x,y 座標をユークリッド空間
    // rotate(HALF_PI * 3)

    let len = 160
    stroke(255)
    strokeWeight(5)
    point(len * cos(this.radians), len * sin(this.radians))

    let divide = 8
    for(let i = 0; i < divide; i++) {
      point(len * tan(this.radians), len * sin(this.radians))
      rotate(PI / divide)
    }

    if (this.radians < TWO_PI) {
      console.log(this.plus)
      this.radians += this.plus
      console.log(this.radians)
    } else {
      noLoop()
    }

  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked () {
  noLoop()
  // saveFrames("Mountain", 'png', 1, 1);
}
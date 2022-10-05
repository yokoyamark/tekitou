function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(20)
  background(30)
  smooth()
  p = new Polygon()
}

function draw () {
  p.display()
}


class Polygon {

  constructor() {
    this.rotateValue = 4
    this.rotate = []
    this.radius = 300
    this.pointValue = 6
    this.angle = []
    this.crdnt = []
    this.dp = []
    this.vec = []
    this.mdp = []

    for (var i = 0; i < this.rotateValue; i++) {
      this.rotate.push(TWO_PI / this.rotateValue * i)
    }

    for (var i = 0; i < this.pointValue; i++) {
      this.angle.push(TWO_PI / this.pointValue * i)
      this.crdnt.push([this.radius * cos(this.angle[i]), this.radius * sin(this.angle[i])])
    }
  }

  display () {
    translate(width / 2, height / 2)
    let i = frameCount % this.rotateValue
    rotate(this.rotate[i])
    // this.printPoint()

    if (i % 2) {
      // stroke(255, 2)
      // strokeWeight(18)
    } else {
      stroke(255, 30)
      strokeWeight(12)
    }
    this.printLine()

    if(frameCount > this.rotateValue * 20) {
      noLoop()
    }
  }

  printPoint () {
    stroke(255)
    strokeWeight(30)

    for (var k = 0; k < this.crdnt.length; k++) {
      point(this.crdnt[k][0], this.crdnt[k][1])
    }
  }

  printLine () {
    for (var i = 0; i < this.crdnt.length; i++) {
      for (var j = i + 1; j < this.crdnt.length; j++) {
        line(this.crdnt[i][0], this.crdnt[i][1], this.crdnt[j][0], this.crdnt[j][1])

      }
    }
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  noLoop()
  saveFrames("Polygon", 'png', 1, 1);
}
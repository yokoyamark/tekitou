function setup() {
  createCanvas(windowWidth, windowHeight)
	frameRate(20)
  smooth()
  p = new Particles()
}

function draw() {
  p.display()
}


class Particles {

  constructor() {
		this.pointValue = width > height? height / 25 : width / 25
	  this.crdnt = []
		this.dp = []
		this.vec = []
		this.mdp = []
		
    for (var i = 0; i < this.pointValue; i++) {
      this.crdnt.push([random(width), random(height)])
      this.dp.push([random(2), random(2)])
      this.vec.push([random(-1, 1) > 0? 1 : -1, random(-1, 1) > 0? 1 : -1])
      this.mdp.push([0, 0])
    }
  }

	display() {
    background(30)
    this.printPoint()
    this.printLine()
  }

  printPoint() {
    stroke(255)
    strokeWeight(0.5)
    for (var i = 0; i < this.crdnt.length; i++) {
      for (var j = 0; j < this.crdnt[i].length; j++) {
        this.crdnt[i][j] += this.dp[i][j] * this.vec[i][j] + this.mdp[i][j]
      }
      if (this.crdnt[i][0] < 0) this.vec[i][0] = 1
      if (this.crdnt[i][0] > width) this.vec[i][0] = -1
      if (this.crdnt[i][1] < 0) this.vec[i][1] = 1
      if (this.crdnt[i][1] > height) this.vec[i][1] = -1
    }
		
    for (var k = 0; k < this.crdnt.length; k++) {
      point(this.crdnt[k][0], this.crdnt[k][1])
    }
  }

  printLine() {
    stroke(255)
    strokeWeight(0.1)
    var len = height / 10 * 3

    for (var i = 0; i < this.crdnt.length; i++) {
      for (var j = i + 1; j < this.crdnt.length; j++) {
        if (this.crdnt[i][0] - len < this.crdnt[j][0] && this.crdnt[i][0] + len > this.crdnt[j][0] && this.crdnt[i][1] - len < this.crdnt[j][1] && this.crdnt[i][1] + len > this.crdnt[j][1]) {
          line(this.crdnt[i][0], this.crdnt[i][1], this.crdnt[j][0], this.crdnt[j][1])
        }
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
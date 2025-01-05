
export class Unit {
  constructor(params) {
    Object.assign(this, params)
    this.s = 20
    this.a = 0.5
    this.b = 0.5
  }

  interactWith(squares) {
    let validNeighbours = []
    let potentialCount = 0

    const k = 1
    
    for (let i = this.i - k; i <= this.i + k; i++) {
      for (let j = this.i - k; j <= this.i + k; j++) {
        potentialCount ++
        if (this.i === i && this.j === j) continue
        const row = squares[i]
        if (!row) continue
        const unit = row[j]
        if (!unit) continue
        // console.log(i,j) 
        validNeighbours.push(unit)
        


      }
    }
    console.log("this", this.i, this.j, "has", neighbourCount, "valid neighbours of", potentialCount)


    // mutate self - mark
    // mutate neighbour - mark
  }
}

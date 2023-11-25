
class Andrew {

    constructor(tate, color,) {
        this.tate = tate
        this.color = color
    }

    bugatti() {

        console.log(`${this.tate} has bugatti with ${this.color} color`)
    }

    assistant() {
        console.log(`${this.tate} has very beautiful assistant`)
    }

}

const powerful = new Andrew("Andrew", "badmanCopper")
powerful.bugatti()


class Tristan extends Andrew {

    constructor(tate,color) {
        super(tate,color)
        this.tate = tate
        this.color = color

    }

}

const handsome = new Tristan('Tristan','badmanCopper')

handsome.bugatti()

console.log(handsome instanceof Andrew )
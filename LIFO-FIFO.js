class Deque {
    constructor() {
        this.count = 0
        this.previousCount = 0
        this.items = {}
    }

    addFront(element) {

        for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1]
        }

        this.count++
        this.items[0] = element
    }

    addBack(element){
        this.items[this.count] = element
    }

    removeFront(){
        delete this.items[0]
    }

    removeBack(){
        delete this.items[this.count]
    }

    mostrar(){
        return this.items
    }
}

let valor = new Deque()
valor.addFront(56)
valor.addFront(30)
valor.addFront(18)
valor.addBack(7)
valor.removeFront()
valor.removeBack()
console.log(valor.mostrar())

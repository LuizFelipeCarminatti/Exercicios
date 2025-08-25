let numbers = [1, 2, 4, 5, 6]

Array.prototype.mover = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }
    this[0] = value
}

numbers.mover(0)

console.log(numbers)
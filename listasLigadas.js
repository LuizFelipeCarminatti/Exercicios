export class Node {
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

export default class LinkedList{
    constructor(){
        this.count = 0
        this.head = undefined
    }

    push(element) {
        let node = new Node(element)
        let current;
        if (this.head == null) {
            this.head = node
        }else{
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

}

let item = new LinkedList()
console.log(item.push(30))
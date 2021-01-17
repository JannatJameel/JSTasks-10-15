class Node {
    constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
}
}

class Queue {
    constructor(limit) {
        this.front = null;
        this.back = null;
        this.length = 0;
        this.limit = limit;
        this.waitTime = 0;
    }

    isFull = () => this.length === this.limit;

    isEmpty = () => this.length === 0;

    peek = () => this.waitTime;

    addNode = (groupSize) => {
        const newNode = new Node(groupSize);
        if (this.isEmpty()) this.front = newNode;
        else this.back.next = newNode;

        this.back = newNode;
        this.length++;
        this.waitTime += groupSize * 0.5;
    }

    enqueue = (groupSize) => {
        if (this.isFull()) {
            console.log(`The queue is full, come back in ${waitTime} minutes`)
        } else{
            let ridersCount = groupSize;
            while (ridersCount > 12) {
                this.addNode(12);
                ridersCount -= 12;
            }
            this.addNode(ridersCount);
        }

    };

    dequeue = () => {
        if (this.isEmpty()) {
            console.log("No one is queuing for the ride");
        } else {
            const removed = this.front;
            if (this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
                this.front = removed.next;
            }
            this.waitTime -= (removed.groupSize * 0.5);
            this.length--;
            return removed.groupSize;
        }
    };
}

const altonTowers = new Queue(30);
altonTowers.enqueue(4);
altonTowers.enqueue(6);
altonTowers.enqueue(2);
altonTowers.enqueue(26);

console.log(altonTowers.peek());

altonTowers.dequeue();
console.log(altonTowers.peek());

console.log(altonTowers.front.groupSize);
console.log(altonTowers.back.groupSize);
// Why is it not counting the last node?
// console.log(altonTowers.length); 
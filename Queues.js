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

    peek = () => (this.isEmpty() ? `No one is queuing for the ride` : this.waitTime);

    enqueue = (groupSize) => {
        if (this.isFull()) {
            console.log("Queue is full, come back in few minutes");
        } else if(groupSize <= 12) {
            const newNode = new Node(groupSize);
            if (this.isEmpty()) {
                this.front = newNode;
                this.back = newNode;
            } else {
                this.back.next = newNode;
                this.back = newNode;
            }
            this.length++;
        } else {
            const groupCount = Math.ceil(groupSize/12);
            console.log(`You'll be seperated into ${groupCount} groups`);
            let count = 0;
            while (count < groupCount) {
                const newNode = new Node(12);
                if (this.isEmpty()) {
                    this.front = newNode;
                    this.back = newNode;
                } else {
                    this.back.next = newNode;
                    this.back = newNode;
                }
                count++;
            }
            const lastGroup = (groupSize % 12) * 12;
            const newNode1 = new Node(lastGroup);
            this.back.next = newNode1;
            this.back = newNode1;
            this.length += groupCount;
        }
        this.waitTime += groupSize * 30;
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
            this.waitTime -= (removed.groupSize * 30);
            this.length--;
            return removed.groupSize;
        }
    };
}

const rideQueue = new Queue(30);
rideQueue.enqueue(4);
rideQueue.enqueue(6);
rideQueue.enqueue(2);
rideQueue.enqueue(26);

console.log(rideQueue.peek());
console.log(rideQueue.waitTime/60);

rideQueue.dequeue();
console.log(rideQueue.waitTime/60);

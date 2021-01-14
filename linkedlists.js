const prompt = require('prompt-sync')({sigint: true});

class Node {
    constructor(age, highlight, next = null) {
      this.age = age;
      this.highlight = highlight;
      this.next = next;
    }
}

class LinkedList {
    constructor(age, highlight) {
      this.head = new Node(age, highlight);
    }
  
    insertBeginning = (age, highlight) => {
      const newNode = new Node(age, highlight, this.head);
      this.head = newNode;
    };
  
    traverse = () => {
      let current = this.head;
      while (current) {
        console.log([`Year: ${current.age}`, `Highlight: ${current.highlight}`]);
        current = current.next;
      }
    };

    insertHighlights = (age) => {
        let current = this.head;
        while(current.age < age) {
            let currentAge = current.age + 1;
            if(current.next && current.next.age === currentAge) {
                current = current.next;
            }else{
                let highlight = prompt(`Please enter the highlight of age ${currentAge}: `);
                let newNode = new Node(currentAge, highlight, current.next);
                current.next = newNode;
                current = newNode;
            }
        }

    };
}

const user = new LinkedList(7, "I turned seven");
user.insertBeginning(3, "I started walking");
user.insertBeginning(1, "I was born");

const age = prompt("Please enter your age: ");
user.insertHighlights(age);
user.traverse();

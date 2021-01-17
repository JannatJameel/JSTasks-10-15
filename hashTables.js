class Student {
    constructor(name, score, next = null) {
    this.name = name;
    this.score = score;
    this.next = next;
}
}

class HashTable{
    constructor(classSize){
      this.classSize = classSize;
      this.classes = {A: [], B: [], C: [], D: [], Other: []};
    }

    hash = () => {

    }

    compress = () => {

    }

    insert = (name, score) => {
        let studentCount = 0;
        while (studentCount < classSize){
            
        }
    }
}
const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
]

class Classes{
    constructor(classSize){
      this.classSize = classSize;
      this.classes = {A: [], B: [], C: [], D: [], Other: []};
    }

    hash = (score) => {
        if (score >= 90){
            return ["A", this.classes.A];
        } else if (score < 90 && score >= 80) {
            return ["B", this.classes.B];
        } else if (score < 80 && score >= 70) {
            return ["C", this.classes.C];
        } else if (score < 70 && score >= 60) {
            return ["D", this.classes.D];
        } else {
            return ["Other", this.classes.Other];
        }
    }

    insert = (name, score) => {
        const assigned = this.hash(score);
        let group = assigned[0];
        let index = assigned[1];
        if (index.length < this.classSize){
            index.push(name, score);
        } else {
            console.log(`Class ${group} can only have ${this.classSize} students`)
        } 
    }
}

const arrangedClasses = new Classes(7);

let count = 0;
while (count < students.length){
    arrangedClasses.insert(students[count].name, students[count].score);
    count++;
}

console.table(arrangedClasses.classes);
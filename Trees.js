const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name){
        this.name = name;
        this.right = null;
        this.left = null;
    }

    getParent = (name) => {
        return this.find((element) => element === name);
    }

    addChild = (node) => {
        if(this.right = null){
            this.right = node;
            console.log(`${node.name} is a child of ${this.name}`)
        } else if (this.left = null){
            this.left = node;
            console.log(`${node.name} is a child of ${this.name}`)
        } else {
            console.log(`${node.name} cannot be added to family`);
        }
    };

    traverse = (name) => {
        let nodes = [this];
        while (nodes.length > 0) {
            let current = nodes.pop();
            console.log(current.right + current.left)
            nodes = [...nodes, current.right, current.left];
    };
}

const familyRoot = new TreeNode("Ahmed");

let fullName = prompt("Enter child full name (type 'done' to exit): ");

while (fullName !== "done"){
    let current = familyRoot;

    let names = fullName.split(" ").reverse();
    let firstName = names.pop();
    let lastName = names.shift();

    if(lastName === current.name){
        if(names){
            for (let name of names){
                let parent = current.parrent(name);
                if (parent){
                    current = parent;
                } else {
                    let newChild = new TreeNode(name);
                    current.addChild(newChild);
                    current = newChild;
                }
            }
        }
        let newChild = new TreeNode(firstName);
        current.addChild(newChild);
    }
    console.log("------------------------------------------");
    fullName = prompt("Enter Child full name (type 'done' to exit): ");
}
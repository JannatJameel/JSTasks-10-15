const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name){
        this.name = name;
        this.right = null;
        this.left = null;
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
            if(name === current.name){
                return current;
            } else {
                nodes = [...nodes, current.right, current.left];
            }
            // console.log(current.right + current.left)
        }
        // might need to console log that name is not in family
    };
}

const familyRoot = new TreeNode("Ahmed");

let fullName = prompt("Enter Child full name (type 'done' to print family Tree): ");

while (fullName !== "done"){
    let current = familyRoot;

    let names = fullName.split(" ").reverse();
    let firstName = names.pop();
    let lastName = names.shift();

    if(lastName === current.name){
        if(names){
            for (let name of names){
                let parent = current.traverse(name);
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
    fullName = prompt("Enter Child full name (type 'done' to print family Tree): ");
}

// familyRoot.traverse();


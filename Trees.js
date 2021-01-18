const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name){
        this.name = name;
        this.right = null;
        this.left = null;
    }

    parent = (name) => {
        let parent = name.split(" ");
        return parent[0];
    }

    parent1 = (name) => {
        let parent = name.split(" ");
        return parent[1];
    }

    addChild = (node) => {
        const parent = this.traverse(node); 
        if(parent.right = null){
            this.right = node;
        } else if (parent.left = null){
            this.left = node;
        } else {
            console.log(`${node.name} cannot be added to ${parent.name} family`);
        }
    };

    traverse = (node) => {
        let nodes = [this];
        let parent1 = parent1(node.name)
        while (nodes.length > 0) {
            let current = nodes.pop();
            let parent = parent(current.name);

            if(parent === parent1){
                return current;
            } else {
                nodes = [...nodes, current.right, current.left];
            }
        }  
    };
}

const family = new TreeNode("family");

const newChild = promt("Enter Child full name");
while (newChild !== done){
    const child = new TreeNode();
}

family.traverse(child1);
family.traverse(child2);


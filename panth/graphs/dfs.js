class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearchSolver(array, node) {
        if (!node) {
            return;
        }
        array.push(node.name);
        for (const child of node.children) {
            this.depthFirstSearchSolver(array, child);
        }
    }

    depthFirstSearch(array) {
        this.depthFirstSearchSolver(array, this);
        return array;
    }
}


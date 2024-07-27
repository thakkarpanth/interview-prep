class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        // Write your code here.

        const queue = [];
        const tree = this;
        queue.push(tree);
        while (queue.length) {
            const node = queue.shift();
            array.push(node.name);
            queue.push(...node.children);
        }
        return array;
    }
}
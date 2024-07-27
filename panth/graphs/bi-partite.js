function twoColorable(edges) {
    const adj = edges;
    const nodeColor = {};

    const queue = [];
    queue.push(0);
    nodeColor[0] = 1;
    while (queue.length) {
        const node = queue.shift();
        for (const child of adj[node]) {
            if (child in nodeColor) {
                if (nodeColor[child] === nodeColor[node]) return false;
                else continue;
            }
            nodeColor[child] = 1 - nodeColor[node];
            queue.push(child);
        };
    }
    return true;
}

// Do not edit the line below.
exports.twoColorable = twoColorable;

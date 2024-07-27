// Function to perform DFS and topological sorting
function topologicalSortUtil(v, adj, visited, stack) {
    // Mark the current node as visited
    visited[v] = true;

    // Recur for all adjacent vertices
    for (let i of adj[v]) {
        if (!visited[i])
            topologicalSortUtil(i, adj, visited, stack);
    }

    // Push current vertex to stack which stores the result
    stack.push(v);
}

// Function to perform Topological Sort
function topologicalSort(adj, V) {
    // Stack to store the result
    let stack = [];
    let visited = new Array(V).fill(false);

    // Call the recursive helper function to store
    // Topological Sort starting from all vertices one by
    // one
    for (let i = 0; i < V; i++) {
        if (!visited[i])
            topologicalSortUtil(i, adj, visited, stack);
    }

    // Print contents of stack
    console.log("Topological sorting of the graph: ");
    while (stack.length > 0) {
        console.log(stack.pop() + " ");
    }
}

// Driver code
(() => {
    // Number of nodes
    const V = 4;

    // Edges
    const edges = [[0, 1], [1, 2], [3, 1], [3, 2]];

    // Graph represented as an adjacency list
    const adj = Array.from({ length: V }, () => []);

    for (let i of edges) {
        adj[i[0]].push(i[1]);
    }

    topologicalSort(adj, V);
})();
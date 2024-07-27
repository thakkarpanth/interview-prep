// javascript Program to detect cycle in an undirected graph

// This class represents a undirected
// graph using adjacency list representation

class Graph {

    constructor(vertices) {

        // No. of vertices
        this.V = vertices;

        // Default dictionary to store graph
        this.graph = new Array(vertices);
        for (let i = 0; i < vertices; i++) {
            this.graph[i] = new Array();
        }
    }


    // Function to add an edge to graph
    addEdge(v, w) {

        // Add w to v_s list
        this.graph[v].push(w);

        // Add v to w_s list
        this.graph[w].push(v);
    }



    // A recursive function that uses
    // visited[] and parent to detect
    // cycle in subgraph reachable from vertex v.
    isCyclicUtil(v, visited, parent) {

        // Mark the current node as visited
        visited[v] = true;

        // Recur for all the vertices
        // adjacent to this vertex
        for (let i = 0; i < this.graph[v].length; i++) {

            // If the node is not
            // visited then recurse on it
            if (visited[this.graph[v][i]] == false) {
                if (this.isCyclicUtil(this.graph[v][i], visited, v) == true) {
                    return true;
                }
            }
            // If an adjacent vertex is
            // visited and not parent
            // of current vertex,
            // then there is a cycle
            else if (parent != this.graph[v][i]) {
                return true;
            }
        }
        return false;
    }



    // Returns true if the graph
    // contains a cycle, else false.
    isCyclic() {

        // Mark all the vertices
        // as not visited
        let visited = new Array(this.V).fill(false);

        // Call the recursive helper
        // function to detect cycle in different
        // DFS trees
        for (let i = 0; i < this.V; i++) {
            // Don't recur for u if it
            // is already visited
            if (visited[i] == false) {
                if (this.isCyclicUtil(i, visited, -1) == true) {
                    return true;
                }
            }

        }

        return false;
    }

}

// Create a graph given in the above diagram
let g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(0, 3);
g.addEdge(3, 4);

if (g.isCyclic() == true) {
    console.log("Graph contains cycle");
}
else {
    console.log("Graph doesn't contain cycle ");
}

let g1 = new Graph(3);
g1.addEdge(0, 1);
g1.addEdge(1, 2);


if (g1.isCyclic() == true) {
    console.log("Graph contains cycle");
}
else {
    console.log("Graph doesn't contain cycle ");
}


// This code is contributed by Gautam goel.

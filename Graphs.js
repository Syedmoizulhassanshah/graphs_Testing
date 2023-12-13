function hasLoop(graph) {
  // Store visited nodes to prevent revisiting and detect cycles.
  const visited = new Set();

  // Helper function for depth-first search.
  function dfs(node) {
    if (visited.has(node)) {
      return true; // Cycle detected!
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }

  // Start DFS from any node in the graph.
  for (const node in graph) {
    if (dfs(node)) {
      return true; // Loop found!
    }
  }

  return false; // No loop found.
}



////////////////////////////////////////////////////////////// TEST CASES ////////////////////////////////////////////


// Test case 1: Graph with a loop
const graph1 = {
  A: ["B"],
  B: ["C", "A"],
  C: [],
};

console.log(hasLoop(graph1)); // Output: true

// Test case 2: Graph without loop
const graph2 = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};

console.log(hasLoop(graph2)); // Output: false

// Test case 3: Empty graph
const graph3 = {};

console.log(hasLoop(graph3)); // Output: false

1# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime Anaylsis, Maxie M. 

### Time Complexity
- **Worst-Case:** may explore every node and edge in the graph
- y**Adjacency List representation:** **time complexity* of DFS is $O(V + E)$
  - for graph with $V$ vertices and $E$ edges
  - due ti each node being visited and each edge being checked once
### Space Complexity
- **Space Complexity:** $O(V)$
  - due to recursion stack and visited set
    - both stores information for each node in the graph
### Conclusion 
- **Worst-Case Time and Space Complexity:** $\Theta(V + E)$

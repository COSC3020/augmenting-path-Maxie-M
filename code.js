// code.js 
// Maxie Machado 
// Augmenting Path

function augmentingPath(graph, start, end) {

    function dfs(current, path) {
        if (current == end) {
            return path;
        }

        if (visited.has(current)) {
            return null;
        }

        visited.add(current);

        for (let neighbor in graph[current]) {
            const result = dfs(neighbor, path.concat(neighbor));

            if (result) {
                return result;
            }
        }

        visited.delete(current);
        return null;
    }

    if (start == end) {
        return [start];
    }

    const visited = new Set();
    const path = [start];
    return dfs(start, path) || [];
}

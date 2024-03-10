class Graph {
  constructor() {
    this.adjList = {};
    this.adjListLength = 0;
  }
  addVertex(node) {
    if (!this.adjList[node]) {
      this.adjList[node] = [];
    }
  }
  addEdge(node1, node2) {
    if (!this.adjList[node1]) {
      this.adjList[node1] = [];
    }
    if (!this.adjList[node2]) {
      this.adjList[node2] = [];
    }
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }
  showConnections(node) {
    const keys = Object.keys(this.adjList);
    for (let key of keys) {
      console.log(`${key} ---> ${JSON.stringify(Object.values(this.adjList[key]))}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();

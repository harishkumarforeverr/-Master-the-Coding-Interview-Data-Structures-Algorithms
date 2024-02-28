class HashTable {
  constructor(n) {
    this.data = new Array(n);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  get(key) {
    const address = this._hash(key);
    let currentBucket = this.data[address];
    if (!currentBucket) {
      console.log("No Record found");
    }
    let nodesValues = [];
    for (let [_, value] of currentBucket) {
      nodesValues.push(value);
    }
    console.log(currentBucket, key, nodesValues);
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 30000);
// myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.set("apples", 29);
myHashTable.set("apples", 39);
// myHashTable.get("apples");
// myHashTable.get("harish");
myHashTable.get("apples");

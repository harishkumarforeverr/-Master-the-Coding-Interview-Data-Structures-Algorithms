class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const index = this._hash(key);
    const data = [key,value];
    if (!this.data[index]) {
      this.data[index] = [data];
    } else {
      this.data[index] = [...this.data[index], data];
    } 
  }
  get(key) {
    const index = this._hash(key);
    console.log(this.data[index] ?? []);
  }
}

const myHashTable = new HashTable(50);
myHashTable._hash(10);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 400);
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
myHashTable.get("grapes");

// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
let map = {};
let size = {};

class UnionFind {
  constructor() {
    map = {};
    size = {};
  }

  createSet(value) {
    map[value] = value;
    size[value] = 1;
  }

  find(value) {
    if (value === undefined) return null;
    if (map[value] === value) return value;
    map[value] = this.find(map[value]);
    return map[value];
  }

  union(valueOne, valueTwo) {
    let rep1 = this.find(valueOne);
    let rep2 = this.find(valueTwo);
    if (rep1 == null || rep2 == null) return;
    if (size[rep1] > size[rep2]) {
      map[rep2] = rep1;
      size[rep1] += size[rep2];
    } else {
      map[rep1] = rep2;
      size[rep2] += size[rep1];
    }
  }
}

// Do not edit the line below.
exports.UnionFind = UnionFind;
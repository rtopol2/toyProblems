function PriorityQueue () {
    collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = data => {
      let priority = data[1];
      if (!collection[priority]) {
        collection[priority] = [];
      }
      collection[priority].push(data);
    };
    
    this.dequeue = () => {
      for (let bucket of collection) {
        if (bucket && bucket.length) return bucket.shift()[0];
      }
    };
  
    this.front = () => {
      for (let bucket of collection) {
        if (bucket && bucket.length) return bucket[0];
      }
    };
  
    this.size = () => {
      let size = 0;
      for (let bucket of collection) {
        if (bucket) size += bucket.length;
      }
      return size;
    };
  
    this.isEmpty = function () {
      return this.size() < 1;
    };
}

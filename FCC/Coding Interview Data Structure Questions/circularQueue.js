
class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }

   }

   print() {
     return this.queue;
   }


   enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue.splice(this.write, 1, item);
      this.print();
      this.write = this.write === this.max ? 0 : ++this.write;
      return item;
    }
    return null;
   }

   dequeue() {
    if (this.queue[this.read] === null) return null;
    const plucked = this.queue.splice(this.read, 1, null)[0];
    this.read = this.read === this.max ? 0 : this.read + 1;
    return plucked;
   }
}
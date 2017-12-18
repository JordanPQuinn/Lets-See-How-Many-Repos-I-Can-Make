export default class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
    if(next) {
      next.prev = this;
    }
    if(prev) {
      prev.next = this;
    }
  }
}

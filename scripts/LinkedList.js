import Node from './Node';

export default class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.next = null;
    this.length = 0;
  }

  push(data) {
    this.tail = new Node(data, this.tail)
    if(this.length === 0) {
      this.head = this.tail;
      this.current = this.head;
      this.next = this.head;
    }
    this.length++;
  }

  unshift(data) {
    this.head = new Node(data, undefined, this.head)
    if(this.length === 0) {
      this.tail = this.head;
      this.next = this.head;
    }
    this.length++;
    return this;
  }

  shift() {
    let head = this.head;
    if(this.length === 0) {
      return null;
    }
    this.length--;
    if(this.length === 0) {
      this.head = this.tail = this.next = null;
      return head;
    }
    this.head = this.head.next;
    if(this.current === head) {
      this.current = this.head;
      this.next = this.current.next;
    }
    return head;
  }

  pop() {
    console.log(this)
    let tail = this.tail;
    if(this.length === 0) {
      return null;
    }
    this.length--;
    if(this.length === 0) {
      this.head = this.tail = this.next = null;
      return tail;
    }
    this.tail = tail.prev;
    this.tail.next = null;
    if(this.current === tail) {
      this.current = this.tail;
      this.next = null;
    }
    console.log(tail);
    return tail;
  }
}

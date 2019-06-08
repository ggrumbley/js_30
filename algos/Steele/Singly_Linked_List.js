class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if(!this.head) return null;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(this.length === 0) return null;
    let olHead = this.head;
    this.head = olHead.next;
    this.length--;

    return olHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let selectedNode = this.get(index)
    if (selectedNode) {
      selectedNode.val = val;
      return true;
    }

    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let remNode = prevNode.next;
    prevNode.next = remNode.next;
    this.length--;

    return remNode;
  }

  reverse() {
    let node = this.head;
    let next = null;
    let prev = null;

    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push('Gary');
list.push('Pippa');
list.push('Georgie');
list.push('Maisie');

list.traverse();

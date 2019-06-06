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
    if(!this.head) return undefined;
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
    if(this.length === 0) return undefined;
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
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let _node = this.get(index)
    if (_node) {
      _node.val = val;
      return true;
    }

    return false;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push('Gary');
list.push('Pippa');
list.push('Georgie');
list.push('Maisie');

list.traverse();

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  add(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.length++;

    return element;
  }

  remove(element) {
    if (this.head.element === element) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      let previousNode;
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;

    return element;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;
    let indexFound = false;

    while (!indexFound && currentNode) {
      index++;
      if (currentNode.element === element) {
        indexFound = true;
      }
      currentNode = currentNode.next;
    }

    return indexFound ? index : -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let currentIndex = -1;
    let currentElement;
    let elementFound = false;

    while (!elementFound && currentNode) {
      currentIndex++;
      currentElement = currentNode.element;
      if (currentIndex === index) {
        elementFound = true;
      }
      currentNode = currentNode.next;
    }

    return elementFound ? currentElement : undefined;
  }

  addAt(index, element) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    const node = new Node(element);
    let currentNode = this.head;
    let currentIndex = 0;
    let isElementAdded = false;

    while (!isElementAdded && currentNode) {
      currentIndex++;
      if (currentIndex === index) {
        node.next = currentNode.next;
        currentNode.next = node;
        isElementAdded = true;
      }
      currentNode = currentNode.next;
    }

    this.length++;

    return isElementAdded ? node.element : null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      let headElement = this.head.element;
      this.head = this.head.next;
      this.length--;
      return headElement;
    }

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    while (currentIndex !== index && currentNode.next != null) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    this.length--;

    return currentNode.element;
  }

  print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.addAt(1, "new element");
linkedList.removeAt(2);
console.log(linkedList.elementAt(0), "index 0");
console.log(linkedList.elementAt(1), "index 1");
console.log(linkedList.elementAt(2), "index 2");
console.log(linkedList.elementAt(3), "index 3");
console.log(linkedList.elementAt(4), "index 4");
linkedList.print();

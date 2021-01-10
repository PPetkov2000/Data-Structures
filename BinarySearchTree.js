class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(int) {
    const node = new Node(int);

    if (this.root == null) {
      this.root = node;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (int < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
        }
        currentNode = currentNode.left;
      } else if (int > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
        }
        currentNode = currentNode.right;
      } else {
        return null;
      }
    }
  }

  remove(value) {
    const removeNode = function (node, value) {
      if (node == null) {
        return null;
      }
      if (value === node.value) {
        // if node has no children return null
        if (node.left == null && node.right == null) {
          return null;
        }
        // if node has no left child return the right child
        if (node.left == null) {
          return node.right;
        }
        // if node has no right child return the left child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };

    this.root = removeNode(this.root, value);
  }

  findMin() {
    let currentNode = this.root;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  findMax() {
    let currentNode = this.root;
    while (currentNode.right != null) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  isPresent(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();
bst.add(1);
bst.add(2);
bst.add(0);
bst.add(3);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(2));
console.log(bst.isPresent(4));
bst.remove(3);
console.log(bst);

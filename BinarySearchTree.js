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
        // if node has no children return null => in other words just set the current node to null(delete it)
        if (node.left == null && node.right == null) {
          return null;
        }
        // if node has no left child return the right child => in other words replace(delete) the current node with the node on the right
        if (node.left == null) {
          return node.right;
        }
        // if node has no right child return the left child => in other words replace(delete) the current node with the node on the left
        if (node.right == null) {
          return node.left;
        }
        // if node has two children take the right child of the node and then from there select the leftmost node, after that set the current node value to the leftmost value of the right node and the current node "right" should be set recursively
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

  isBinarySearchTree(tree) {
    if (tree.root == null) {
      return null;
    } else {
      let isBST = true;
      function checkTree(node) {
        if (node.left != null) {
          const left = node.left;
          if (left.value > node.value) {
            isBST = false;
          } else {
            checkTree(left);
          }
        }
        if (node.right != null) {
          const right = node.right;
          if (right.value < node.value) {
            isBST = false;
          } else {
            checkTree(right);
          }
        }
      }
      checkTree(tree.root);
      return isBST;
    }
  }

  findMinHeight(root = this.root) {
    if (root == null) return -1;
    if (root.left == null && root.right == null) return 0;
    if (root.left == null) {
      return this.findMinHeight(root.right) + 1;
    }
    if (root.right == null) {
      return this.findMinHeight(root.left) + 1;
    }
    const nodeLeftHeight = this.findMinHeight(root.left);
    const nodeRightHeight = this.findMinHeight(root.right);
    return Math.min(nodeLeftHeight, nodeRightHeight) + 1;
  }

  findMaxHeight(root = this.root) {
    if (root == null) return -1;
    if (root.left == null && root.right == null) return 0;
    if (root.left == null) {
      return this.findMaxHeight(root.right) + 1;
    }
    if (root.right == null) {
      return this.findMaxHeight(root.left) + 1;
    }
    const nodeLeftHeight = this.findMaxHeight(root.left);
    const nodeRightHeight = this.findMaxHeight(root.right);
    return Math.max(nodeLeftHeight, nodeRightHeight) + 1;
  }

  isBalanced() {}

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      const values = [];
      function traverseTree(node) {
        node.left && traverseTree(node.left);
        values.push(node.value);
        node.right && traverseTree(node.right);
      }
      traverseTree(this.root);
      return values;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      const values = [];
      function traverseTree(node) {
        values.push(node.value);
        node.left && traverseTree(node.left);
        node.right && traverseTree(node.right);
      }
      traverseTree(this.root);
      return values;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      const values = [];
      function traverseTree(node) {
        node.left && traverseTree(node.left);
        node.right && traverseTree(node.right);
        values.push(node.value);
      }
      traverseTree(this.root);
      return values;
    }
  }
  
  invert(node = this.root) {
    if (node) {
      let tempNode = node.left;
      node.left = node.right;
      node.right = tempNode;
      this.invert(node.left);
      this.invert(node.right);
    }
    return node;
  }
}

const bst = new BinarySearchTree();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);
// bst.remove(9);
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());

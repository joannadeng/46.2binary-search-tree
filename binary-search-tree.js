class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;
    while(true){
      if (currentNode.val > val) {
        if(currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        }else{
          currentNode = currentNode.left
        }
      } else if( currentNode.val < val) {
        if(currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        }else{
          currentNode = currentNode.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    if(currentNode.val > val){
      if(currentNode.left === null){
        currentNode.left = new Node(val);
        return this;
      }else{
        this.insertRecursively(val,currentNode.left)
      }
    }else if(currentNode.val < val){
      if(currentNode.right === null){
        currentNode.right = new Node(val);
        return this;
      }else{
        this.insertRecursively(val,currentNode.right)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null) return undefined;
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val){
        if(currentNode.left === null) return undefined;
        currentNode = currentNode.left;
      }else if(currentNode.val < val){
        if(currentNode.right === null) return undefined;
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(this.root === null) return undefined;
     
    if(currentNode.val > val){
      if(currentNode.left === null) return undefined;
      return this.findRecursively(val,currentNode.left);
    }else if(currentNode.val < val){
      if(currentNode.right === null) return undefined;
      return this.findRecursively(val,currentNode.right);
    }
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let current = this.root;
    function traverse(currentNode){
      arr.push(currentNode.val);
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
    }

    traverse(current)
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let current = this.root;
    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      arr.push(currentNode.val);
      if(currentNode.right) traverse(currentNode.right);
    }
    traverse(current)
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let current = this.root;
    function traverse(currentNode){
      if(currentNode.left) traverse(currentNode.left);
      if(currentNode.right) traverse(currentNode.right);
      arr.push(currentNode.val);
    }
    traverse(current)
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [];
    let data = [];
    let current = this.root;
    queue.push(current);
    while(queue.length) {
      current = queue.shift();
      data.push(current.val)
      if(current.left) {
        queue.push(current.left)
      }
      if(current.right) {
        queue.push(current.right)
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

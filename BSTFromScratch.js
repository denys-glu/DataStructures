class BSNode {
    // each node in a binary search tree contains a value, a pointer to the node to the left, and a pointer to the node to the right
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;
    }

    // write an algorithm that can determine whether or not a binary search tree is empty.
    isEmpty() {

    }


    // write an algorithm that will find the smallest number in a binary search tree
    min(runner = this.root){

    }

    // write an algorithm that will find the largest number in a binary search tree
    max(runner = this.root) {

    }

    // 4/28 BONUS: Write an algorithm that can determine whether or not the binary search tree
    // contains a node with a given value
    contains(value, runner = this.root) {

    }

    // Write an algorithm that will add a new node to a Binary Search Tree
    add(value) {

    }

    addHelper(value, runner) {

    }

    // Write an algorithm that will find the minimum value of the right subtree
    minRight(node = this.root) {

    }

    // Write an algorithm that will find the maximum value of the left subtree
    maxLeft(node = this.root) {


    }

    printTree() {

    }

    printHelper(toPrint = "", runner = this.root) {

    }

    //Write an algorithm that finds the height of the Binary Search Tree
    height(root = this.root, height = 0) {

    }

    //Write an algorithm that finds whether or not the Binary Search Tree is balanced
    isBalanced(root = this.root) {

    }
}

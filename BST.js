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
        if(this.root == null) {
            return true;
        }
        return false;
    }


    // write an algorithm that will find the smallest number in a binary search tree
    min(runner = this.root){
        if(runner == null) {
            return false;
        }
        while(runner.left != null) {
            runner = runner.left;
        }
        return runner.value;
    }

    // write an algorithm that will find the largest number in a binary search tree
    max(runner = this.root) {
        if(runner == null) {
            return false;
        }
        while(runner.right != null) {
            runner = runner.right;
        }
        return runner.value;
    }

    // 4/28 BONUS: Write an algorithm that can determine whether or not the binary search tree
    // contains a node with a given value
    contains(value, runner = this.root) {
        if(runner == null)
            return false;
        else if(value == runner.value)
            return true;
        else if(value < runner.value)
            return this.contains(value, runner.left);
        else 
            return this.contains(value, runner.right);
    }

    // Write an algorithm that will add a new node to a Binary Search Tree
    add(value) {
        if(this.root == null) {
            this.root = new BSNode(value);
            return this;
        }
        return this.addHelper(value, this.root);
    }

    addHelper(value, runner) {
        if(value >= runner.value) {
            if(runner.right == null) {
                runner.right = new BSNode(value);
                return this;
            }
            return this.addHelper(value, runner.right);
        }
        else {
            if(runner.left == null) {
                runner.left = new BSNode(value);
                return this;
            }
            return this.addHelper(value, runner.left);
        }
    }

    // Write an algorithm that will find the minimum value of the right subtree
    minRight(node = this.root) {
        if(node == null || node.right == null) {
            return false;
        }
        return this.min(node.right);
    }

    // Write an algorithm that will find the maximum value of the left subtree
    maxLeft(node = this.root) {
        if(node == null || node.left == null) {
            return false;
        }
        return this.max(node.left);

    }

    printTree() {
        if(this.root == null) {
            console.log("Tree is empty.");
            return this;
        }
        this.printHelper();
    }

    printHelper(toPrint = "", runner = this.root) {
        if(runner == null) {
            return this;
        }
        toPrint += "\t";
        this.printHelper(toPrint, runner.right);
        console.log(`${toPrint}${runner.value}`);
        this.printHelper(toPrint, runner.left);
    }

    //Write an algorithm that finds the height of the Binary Search Tree
    height(root = this.root, height = 0) {
        if (root == null) {
            return height;
        }

        let leftH = height(root.left, height + 1),
            rightH = height(root.right, height + 1);
        
        if (leftH >= rightH) {
            return leftH
        }

        return rightH
    }

    //Write an algorithm that finds whether or not the Binary Search Tree is balanced
    isBalanced(root = this.root) {
        if (root == null) {
            return true;
        }

        let left = height(root.left, height)
        let right = height(root.right, height)

        if ( left == right) {
            return true;
        } else if (left + 1 == right) {
            return true;
        } else if (left - 1 == right) {
            return true;
        } else {
            return false;
        }
    }
}

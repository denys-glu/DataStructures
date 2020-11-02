class DLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DLList {
    constructor() {
        this.head = null;
    }

    printList() {
        if(this.head == null) {
            console.log("List is empty");
            return this;
        }
        let string = "<- H: ";
        let runner = this.head;
        while(runner.next != null) {
            string += `${runner.value} <-> `
            runner = runner.next;
        }
        string += `${runner.value} ->`;
        console.log(string);
        return this;

    }


    // Push to the end of the current DLList
    push(value) {
        // If the list is empty, simply make the new node the head of the list.
        if(this.head == null) {
            this.head = new DLNode(value);
            return this;
        }
        //set a runner and traverse to the end of the dll
        let runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }

        // initialize the new node we'll be putting at the end
        let newNode = new DLNode(value);

        // set the last node's .next to the new node
        runner.next = newNode;

        //set the new node's previous to the runner (which was the end of the dll)
        newNode.prev = runner;

        // all done!
        return this;
    }


    // Remove the last element of the DLList
    pop() {
        // if the list is empty, there's nothing to pop
        if(this.head == null) {
            console.log("List is empty.");
            return false;
        }
        // if the list only has 1 node, just set the head to null and return the node that was previously the head
        else if(this.head.next == null) {
            let temp = this.head;
            this.head = null;
            return temp;
        }
        else {
            // create a runner to traverse to the end
            let runner = this.head;
            while(runner.next != null) {
                runner = runner.next;
            }
            // hold onto the last node in the dll
            let temp = runner;

            // set the second-to-last node's .next to null, making it now the last node
            temp.prev.next = null;
            // set our temp's previous to null to clear it up and make the node standalone
            temp.prev = null;

            // return the node we just popped
            return temp;
        }
    }

    
    // Remove a specific value from a DLList
    remove(value) {
        // if the list is empty, the value can't be there so peace
        if(this.head == null) {
            return false;
        }
        // if the head of the dll has a matching value
        else if(this.head.value == value) {
            // hang onto the node
            let temp = this.head;

            // set the head to the 2nd element in the dll
            this.head = this.head.next;
            // clear the new head's previous to remove any reference to the old head
            this.head.prev = null;
            // clear the old head's next to make it truly standalone
            temp.next = null;
            // return the node we just removed
            return temp;
        }
        else {
            // create a runner for traversal
            let runner = this.head;
            while(runner.next != null) {

                // if the runner has a matching value
                if(runner.value == value) {
                    // set the previous node's .next to the runner's .next
                    runner.prev.next = runner.next;

                    // set the next node's .prev to the runner's .prev;
                    runner.next.prev = runner.prev;

                    // clear the runner's prev and next to make it standalone
                    runner.prev = null;
                    runner.next = null;

                    // return the node we just removed
                    return runner;
                }
                // otherwise just move it along
                runner = runner.next;
            }
            // if the LAST node's value matches
            if(runner.value == value) {
                // set the second-to-last node's .next to null (making it the new end of the dll)
                runner.prev.next = null;

                // set the runner's previous to null to make it standalone
                runner.prev = null;

                // return the node
                return runner;
            }
            // otherwise, the value isn't in the list so peace
            return false;
            
        }
    }


    // Write an algorithm that will pre-pend a node into a DLL. Basically, addToFront
    prepend(value) {
        if(this.head == null) {
            this.head = new DLNode(value);
            return this;
        }
        let newNode = new DLNode(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }


    // Write an algorithm that will insert a new node into a certain index in the DLL. Let's say our DLL is zero indexed
    insert(value, index = 0) {
        if(index < 0)
            return this;
        else if(index == 0) {
            this.prepend(value);
            return this;
        }
        let count = 1;
        let runner = this.head;
        while(count < index) {
            if(runner == null) {
                return this;
            }
            runner = runner.next;
            count++;
        }
        let newNode = new DLNode(value);
        newNode.prev = runner;
        newNode.next = runner.next;
        runner.next = newNode;
        if(newNode.next != null) {
            newNode.next.prev = newNode;
        }
        return this;
    }
}

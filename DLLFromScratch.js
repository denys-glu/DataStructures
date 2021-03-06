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
        if (this.head == null) {
            console.log("List is empty");
            return this;
        }
        let string = "<- H: ";
        let runner = this.head;
        while (runner.next != null) {
            string += `${runner.value} <-> `
            runner = runner.next;
        }
        string += `${runner.value} ->`;
        console.log(string);
        return this;

    }


    // Push to the end of the current DLList
    push(value) {
        if (this.head == null) {
            this.head = new DLNode(value);
            return this;
        }
        let walker = this.head;
        while (walker.next != null) {
            walker = walker.next;
        }
        walker.next = new DLNode(value);
        walker.next.prev = walker;
        // console.log(walker);
        // console.log(walker.next)
        return this;

    }


    // Remove the last element of the DLList
    pop() {
        if (this.head == null) {
            return this;
        }
        let runner = this.head;
        if (this.head.next == null) {
            this.head = null;
            return this;
        }
        while (runner.next != null) {

            runner = runner.next;

        }

        runner.prev.next = null;
        runner.prev = null;
        return this;
    }


    // Remove a specific value from a DLList
    remove(value) {
        // if the list is empty
        if (this.head == null) {
            return this;
        }

        else if (this.head.value == value) {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            return this;
        }
        //if there is only one node
        else if (this.head.next == null) {
            if (this.head.value == value) {

                this.head = null;
                return this;
            }
            else {
                console.log("value not found");
                return this;
            }
        }
        //if there is only 2 nodes
        else if (this.head.next.next == null) {
            if (this.head.value == value) {

                this.head.next = this.head;
                this.head.prev = null;
                return this;
            }
            if (this.head.next.value == value) {
                this.head.next = null;

                return this;
            }
            else {
                console.log("value not found")
                return this;
            }

        }
        let runner = this.head;
        while (runner.next.value != value) {
            runner = runner.next;
        }
        //   console.log("runner", runner);
        //   console.log("runner.next", runner.next);
        //   console.log("runner.next.next", runner.next.next);
        runner.next = runner.next.next;
        runner.next.prev = runner;

        return this;
    }


    // Write an algorithm that will pre-pend a node into a DLL. Basically, addToFront
    prepend(value) {
        //if list is empty
        if (this.head == null) {
            this.head = new DLNode(value)
        }
        let newHead = new DLNode(value)
        let oldHead = this.head;

        this.head = newHead;

        oldHead.prev = newHead;
        newHead.next = oldHead;
        return this
    }


    // Write an algorithm that will insert a new node into a certain index in the DLL. Let's say our DLL is zero indexed
    insert(value, index = 0) {
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index < 0) {
            console.log("Wrong index, cannot insert! Kbye");
            return this;
        }

        let counter = 0;
        let runner = this.head;

        while (counter !== index) {
            if (runner === null) {
                console.log("No such index");
                return this;
            }

            runner = runner.next;
            counter++;
        }
        if (runner === null) {
            this.push(value);
            return this;
        }
        let newNode = new DLNode(value);

        newNode.next = runner.next;
        newNode.prev = runner;
        runner.next = newNode;

        return this;

    }
}

const list = new DLList();
list.push(4).printList();
list.push(1).printList();
list.push(3).printList();
list.insert(2,3).printList();

// list.pop().pop().pop().printList();
// list.remove(1).printList();
// list.remove(3).printList();
// list.remove(4).printList();
// list.prepend(0).printList();
// list.prepend(100).printList();

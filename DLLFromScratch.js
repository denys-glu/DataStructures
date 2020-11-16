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
        if(this.head == null){
            this.head = new DLNode(value);
            return this;
        }
        let walker = this.head;
        while(walker.next != null){
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
        if(this.head == null){
            return this;
        }
        let runner = this.head;
        if(this.head.next == null){
            this.head = null;
            return this;
        }
        while(runner.next != null){
            
            runner = runner.next;

        }

        runner.prev.next = null;
        runner.prev = null;
        return this;
    }

    
    // Remove a specific value from a DLList
    remove(value) {
      
    }


    // Write an algorithm that will pre-pend a node into a DLL. Basically, addToFront
    prepend(value) {

    }


    // Write an algorithm that will insert a new node into a certain index in the DLL. Let's say our DLL is zero indexed
    insert(value, index = 0) {

    }
}

const list = new DLList();
list.push(4).printList();
list.push(1).printList();
list.push(3).printList();
list.pop().pop().pop().printList();

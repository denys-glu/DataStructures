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

    }


    // Remove the last element of the DLList
    pop() {

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

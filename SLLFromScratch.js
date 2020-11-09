class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Print the whole list
    printList() {
        if (this.head === null) {
          return console.log("The list is empty!!!");
        }
        
        let runner = this.head;
        
        while(runner !== null) {
          console.log("Node value is: " + runner.value);
          runner = runner.next;
        }
        console.log("END =================================")
        return this;
      }
    getSize() {
      console.log(`Sll size is: ${this.size} nodes.`);
      
      return this;
    }
    // Is the list empty?
    isEmpty() {
      
      if(this.head === null){
        console.log("list is empty")
        return true;
      }
      console.log("list is not empty")
      return false;
    
    }

    // Add to back
    addToBack(value) {
      if(this.head === null){
        this.head = new Node(value);
        this.size++;
        return this;
      }
      let runner = this.head;
      while(runner.next !== null){
          runner = runner.next;
        }

      runner.next = new Node(value);
      this.size++;
      return this;

    }

    // Add to front
    addToFront(value) {
    
        if (this.head === null) {
          this.head = new Node(value);
          this.size++;
          return this;
        }
        
        let newHead = new Node(value);
        
        newHead.next = this.head;
        
        this.head = newHead;
        this.size++;
        return this;
      }

    // Remove from front
    removeFromFront() {
      // let runner = this.head;
      if (this.head === null) {
        this.head = new Node(value);
        this.size--;
        return this;
      }
      this.head = this.head.next;
      this.size--;
      return this;

    }

    // Contains. Challenge 
    contains(value) {
      let runner = this.head;
      while(runner != null){
        if(runner.value == value){
          console.log("true");
          return true;
        }
        runner = runner.next;
      }
      console.log("does not contain value")
      return false
    }
    
    // same as above but recursively
    rContains(value, runner = this.head) {
      if (runner === null) {
        console.log("false");
        return false
      }

      if (runner.value === value) {
        console.log("true");
        return true
      }

      return this.rContains(value, runner.next)
    }

    // Remove from the back of a singly linked list
    removeFromBack() {
      if (this.head === null) {
        return this;
      } else if (this.head.next === null) {
        this.head = null;
        this.size--;
        return this;
      }
      
      let runner = this.head.next;
      let walker = this.head;
      
      while (runner.next !== null) {
        runner = runner.next;
        walker = walker.next;
      }
      
      walker.next = null;
      
      this.size--;
      return this;
    }

    // Move the smallest number to the front of the singly linked list
    moveMinToFront() {
      
      if(this.head === null){
        return this;
      }
      let min = this.head;
      let runner = this.head.next;
      let walker = this.head;
      let previous = null;

      while(runner !== null){
        if(runner.value < min.value){
          min = runner;
          previous = walker;
          
        }
        runner = runner.next;
        walker = walker.next;

      }
      if(min == this.head) {
        return this;
      }
      previous.next = min.next;
      this.addToFront(min.value);
    }

    // Remove the first node with the given value from the list
    removeVal(value) {
      if (this.head === null){
        return this;
      }

      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        console.log("head was our value to remove");
        return this;
      }
      
      let runner = this.head.next;
      let walker = this.head;
      
      while (runner !== null) {
        if (runner.value === value) {
          walker.next = runner.next;
          
          console.log("removing value");
          this.size--;
          return this;
        }
        
        runner = runner.next;
        walker = walker.next;
      }
      
      console.log("nothing found");
      
      return this;
    }

    // Write an algorithm that returns the second-to-last value of a Singly Linked List
    secondToLast(){
      if (this.head === null){
        return this;
      }
      let runner = this.head.next;
      let walker = this.head;
      while(runner !== null){
        if(runner.next == null){
          return walker.value;
        }
        runner = runner.next;
        walker = walker.next
      }
      return this;
    }


    nValueToLast(n){
      if(this.head === null){
        return this;
      }
      if(this.size < n){
        console.log("too short list");
        return this;
      }
      let runner = this.head;
      let walker = this.head;
      let count = 0;
      while(count < n){
        runner = runner.next;
        count++;
        
      }
      while(runner !== null){
        runner = runner.next;
        walker = walker.next;
      }
      console.log("walker", walker);
      return walker.value;
    }

    // Write an algorithm that, given a second SLL, concatenates it to the end of another SLL
    concat(list2) {
      if(this.head === null){
        return this;
      }
      let runner = this.head;
      while(runner.next !== null){
        runner = runner.next;
      }

      runner.next = list2.head;
      return this;
    }

    // Write an algorithm that, assuming this list is sorted, will merge it together with another passed in SLL
    merge(list2) {
      if(list2.head.value < this.head.value) {
        let temp = this.head;
        this.head = list2.head;
        list2.head = temp;
      }
      let runner = this.head;
      let runner2 = list2.head;

      while(runner.next != null){

        if(runner2 === null){
            return this;
        }
        
        else if(runner.next.value > runner2.value){
          let temp = runner.next;
          let temp2 = runner2.next;
          runner.next = runner2;  
          runner2.next = temp;
          runner2 = temp2;
        }
        else{
          runner = runner.next;
        }
      }

      if(runner2 != null) {
        runner.next = runner2;
      }
      return this;

    }

    // Write an algorithm that, assuming all lists are sorted, will merge together k number of sorted SLL's [list1, list2, list3, list4, ..., listk]
    mergeK(arrayOfLists) {

      for (let i = 0; i < arrayOfLists.length; i++) {
        this.merge(arrayOfLists[i])
      }

      return this;
    }

    // Write an algorithm that will reverse a singly linked list.
    // REMINDER! You not only need to reverse the order of the nodes themselves,
    // but must also remember to set the previous end of the list as the new head of the list.

    // Three Pointer Method
    reversePointers() {
      if (this.head === null) return this;

      let previous = null;
      let walker = this.head;
      let runner = this.head.next;

      while (runner !== null) {
        walker.next = previous;
        
        previous = walker
        walker = runner
        runner = runner.next
        
      }
      
      walker.next = previous
      this.head = walker;
      return this;
    }

    // Recursive Method
    reverseR(runner = this.head, prev = null) {

    }
}

const list = new SLL();
const list2 = new SLL();
const list3 = new SLL();
const list4 = new SLL();
// list.addToBack(2).addToBack(3).addToBack(4).addToBack(1).addToBack(5).addToBack(6).addToBack(7).addToBack(8).printList();
list.addToBack(2).addToBack(3).addToBack(5).addToBack(7);
list2.addToBack(1).addToBack(4).addToBack(6);
list3.addToBack(8).addToBack(9).addToBack(10);
list4.addToBack(11).addToBack(12).addToBack(13);
list.reversePointers().printList();
// list.addToFront(2);
// list.addToFront(1);
// list.addToFront(0);
// list.printList();
// list.rContains(5);
// list.removeFromBack();
// list.printList();
// list.removeFromBack();
// list.printList();
// list.removeFromBack();
// list.printList();
// list.moveMinToFront();
// list.printList();
// list.removeVal(4);
// list.printList();
//console.log(list.secondToLast());
// list.nValueToLast(3);
// list.printList();
// list.concat(list2).printList();
// list.mergeK([list2,list3,list4]).printList();
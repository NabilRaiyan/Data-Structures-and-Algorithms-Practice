// Queue 
    // Linked Lists

// Queue using Linked list

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        console.log(this.first);
    }
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        console.log(this);
    }
    dequeue(){
    if (!this.first){
        console.log(null);
    }
    if (this.first === this.last){
        this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    console.log(this);
    }

  }
  
  const myQueue = new Queue();
  
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Abdullah');
  myQueue.enqueue('Pavel');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();






  
  //Joy
  //Matt
  //Pavel
  //Abdullah
  
  
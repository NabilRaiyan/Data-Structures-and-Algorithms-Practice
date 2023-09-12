// Stacks 
    // Arays 
    // Linked Lists


// // Stacks using linked list
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
    
// class Stack {
// constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//     }
//     peek() {
//         console.log(this.top);
//     }
//     push(value){
//         const newNode = new Node(value);
//         if (this.length === 0){
//             this.top = newNode;
//             this.bottom = newNode;
//         }else{
//             const holdingPointer = this.top;
//             this.top = newNode;
//             this.top.next = holdingPointer;
//         }
//         this.length++;
//         console.log(this);
//     }
//     pop(){
//         if (!this.top){
//             console.log(null);
//         }
//         if (this.top == this.bottom){
//             this.bottom = null;
//         }
//         else{
//             const holdingPointer = this.top;
//             this.top = this.top.next;
//             this.length--;
//             console.log(this);
//         }
//     }
//     //isEmpty
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.peek();
// myStack.pop('Discord');
// myStack.peek();

//Discord
//Udemy
//google


// Stacks using Array
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
    
class Stack {
constructor(){
    this.array = [];
    }
    peek() {
        console.log(this.array[this.array.length - 1]);
    }
    push(value){
        this.array.push(value);
        console.log(this);
    }
    pop(){
       this.array.pop();
       console.log(this);
        
    }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop('Discord');
myStack.peek();
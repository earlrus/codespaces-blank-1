class Node {
    constructor(value){
        this.value=value
    this.next=null;
    this.prev=null;
    }
}

class DoubleLinkedList {

    constructor(value){
        const newNode=new Node(value);
        this.head=newNode;
        this.tail=newNode
        this.length=1
    }

    push(value){
const newNode=new Node(value);
        if(!this.head){
            const newNode=new Node(value);
            this.head=newNode;
            this.tail=newNode;
            this.length=1;
        }

        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
        return this

    }

    pop(){
        if(this.length===0){
            return undefined
        }

        if(this.length===1){
            this.head=null;
this.tail=null
        }

        let temp=this.tail;

        this.tail=this.tail.prev;
        this.tail.next=null;
        temp.prev=null
        this.length--;
        return temp;
    }

    unshift(value){

        if(this.length===0){
            const newNode=new Node(value)
this.head=newNode;
this.tail=newNode;
this.length=1
        }

        const newNode=new Node(value);

        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode
        this.length++;
        return this
    }

    shift(){

        if(this.length===0){
            return undefined
        }

        if(this.length===1){
            this.head=null;
            this.tail=null
        }
    
        let temp=this.head;

        this.head=this.head.next;
        this.head.prev=null;
        temp.next=null;
        this.length--;
return this;
    }
}

const myDoublyLinkedList=new DoubleLinkedList(0);

myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);

console.log(myDoublyLinkedList.shift());





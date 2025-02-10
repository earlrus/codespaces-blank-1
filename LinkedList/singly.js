

class Node {
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList {
    constructor (value){
        this.head=new Node(value);
        this.tail=this.head; 
        this.length=1
    }


    //pushing the node
    push(value){
if(!this.head){
    this.head=new Node(value);
    this.tail=new Node(value)
}

this.tail.next=new Node(value);
this.tail=new Node(value)
this.length++
    }


    //poping the node

    pop(){

        if(!this.head){
            return undefined;
        }


        
        let temp=this.head;
        let prev=this.head;

        while(temp.next!==null){
            prev=temp;
            temp=prev.next
        }
        this.tail=prev;
        this.tail.next=null;
        this.length--;
        return temp
    }
}

const linkedList=new LinkedList(1);
console.log(linkedList);

linkedList.push(3)

console.log("after 3 value push",linkedList);

console.log("removed",linkedList.pop());

console.log("after pop",linkedList);
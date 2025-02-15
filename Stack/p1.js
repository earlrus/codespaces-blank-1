
class Node {
constructor(value){
    this.value=value;
    this.next=null;
}

}

class Stack {

    constructor(value){
        const newNode=new Node(value);
        this.first=newNode;
        this.length=1
    }

    //push

    push(value){

        const newNode=new Node(value);

        if(this.length===0){
            this.first=new Node(value);
            this.next=null;
            this.length=1
        }

        newNode.next=this.first;
        this.first=newNode;
        this.length++;
    }

    //pop

    pop(){

        if(this.length===0){
            return undefined
        }
        if(this.length===1){
            this.value=null
            this.next=null
            this.length=0;
        }

        let temp=this.first;

        this.first=temp.next;
        temp.next=null;
        this.length--

    }
}

const theStack=new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.pop()
console.log(theStack);


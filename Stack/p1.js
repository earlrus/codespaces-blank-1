
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

    min(){
        if(this.length===0){
            return undefined;
        }

        let current=this.first;
        let minVal=this.first.value

        while(current.next){
            current=current.next;

            if(current.value<minVal){
minVal=current.value
            }
         
        }
        return minVal
    }
}

const theStack=new Stack(22);
theStack.push(10);
theStack.push(23);
theStack.push(30);

console.log(theStack.min());


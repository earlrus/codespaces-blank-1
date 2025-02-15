class Node {
    constructor(value){
        this.value=value;
        this.next=null;
 
    }
    }

    class Queue {

        constructor(value){
            const newNode=new Node(value);
            this.first=newNode;
            this.last=newNode
           this.length=1
        }

        //enqueue (push)

        enqueue(value){
            const newNode=new Node(value);

            if(this.length===0){
                this.first=newNode;
                this.last=newNode
            }

            this.last.next=newNode;
            this.last=newNode;
             this.length++;

        }

        //dequeue (pop)

        dequeue(){
            if(this.length===0){
                return undefined;
            }
            if(this.length===1){
                this.first=null;
                this.last=null;
                this.length=0
            }

            let temp=this.first;
            this.first=this.first.next
            temp.next=null;
            this.length--;

        }
    }

    const theQueue=new Queue(0);
    
    theQueue.enqueue(1);
    theQueue.enqueue(2);
    theQueue.dequeue()
    console.log(theQueue);
    


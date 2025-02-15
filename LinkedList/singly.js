

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

        const newNode=new Node(value);
if(!this.head){
    this.head=newNode
    this.tail=newNode
    this.length++;
}

this.tail.next=newNode
this.tail=newNode;
this.length++
return this;
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

    //unshift the node

    unshift(value){
const newNode=new Node(value);

        if(!this.head){
this.head=newNode;
this.tail=newNode;
this.length++;
        }

      newNode.next=this.head;
      this.head=newNode;
      this.length++;

      return this;
    }

    // shift node (remove the first node from the linked list)

    shift(){

        if(!this.head){
            return undefined
        }

        if(this.length===0){
            this.tail=null;
        }

        let temp=this.head;
        this.head=this.head.next;
        this.length--;
        temp=null;

        return temp;
    }

    //get first node

    getFirst(){
        return this.head;
    }

    //get last node

    getLast(){
       if(!this.head){
        return undefined
       }

       let temp=this.head;

       while(temp.next){
        temp=temp.next
       }
       return temp;
    }

    //get the node by index

    get(index){

        let counter=0
        let temp=this.head;

        if(!this.head){
            return undefined;
        }

        while(temp){

            if(counter===index){
                return temp;
            }

            temp=temp.next;
            counter++;
        }
        return null;
    }

    //set the node value

    set(index,value){

        let temp=this.get(index);
        if(temp){
            temp.value=value;
            return temp;
        }else{
return undefined;
        }
    }

    // insert the new node

    insert(index,value){

        if(index===0) return this.unshift(value);
        if(index===this.length-1) return this.push(value)

            // get the previous node of the newly created node;
            const newNode=new Node(value);

            let temp= this.get(index-1);
            newNode.next=temp.next;
            temp.next=newNode;
            this.length++;
            return this;
    }

    //get the size of the linked list

    size(){
        return this.length
    }

    clear(){
        this.head=null
        this.tail=null;
        this.length=0;
    }

}

const linkedList=new LinkedList(0);

linkedList.push(1);
linkedList.push(2);


console.log(linkedList.insert(2,22));
console.log("size",linkedList.size());
linkedList.clear();
console.log("cl",linkedList);







// console.log("removed",linkedList.pop());

// console.log("after pop",linkedList);
// console.log("unshft 5 value ",linkedList.unshift(5));
// console.log("shift value i.e 5 from the linked list");
// linkedList.shift();


// console.log("getFirst",linkedList.getFirst());
// console.log("getLast",linkedList.getLast());
console.log(linkedList.get(2));
// console.log(linkedList.get(3));
// console.log(linkedList.set(3,30));







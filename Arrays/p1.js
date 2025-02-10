class MyArr{
  
    constructor(){
      this.length=0;
      this.data={}
    }
    
    push(item){
      this.data[this.length]=item;
      console.log(this.data)
    this.length++;
    }
    
    get(index){
      return this.data[index]
    }
    
    pop(){
      delete this.data[this.length-1];
      this.length--;
    }
    
    shift(){
      
      for(let i=0;i<this.length-1;i++){
        
        this.data[i]=this.data[i+1];
      }
      
      this.pop()
    }
    
    deleteByindex(index){
      
        for(let i=index;i<this.length-1;i++){
        
        this.data[i]=this.data[i+1];
      }
      
      delete this.data[this.length-1];
      this.length--;
    }
  }
  
  
  const myNewArr=new MyArryArr();
  
  myNewArr.push("apple");
  myNewArr.push("mango");
  myNewArr.push("kiwi")
  // myNewArr.pop()
  
  console.log(myNewArr)
  // myNewArr.shift();
  
  myNewArr.deleteByindex(1)
  
  console.log(myNewArr)
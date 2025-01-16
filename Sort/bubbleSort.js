
const myList=[4,9,3,1,6,2,7,5]

function bubble(arr){

console.log(myList);
    for(let i=arr.length-1;i>0;i--){ 
        for(let j=0;j<i;j++){    
            console.log("hello");       
if(arr[j]>arr[j+1]){
   let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp
}
        }
    }
    return arr;
}

let res=bubble(myList);
console.log(res);


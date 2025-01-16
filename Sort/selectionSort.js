const myList=[4,9,3,1,6,2,7,5]

function selection(arr){
let min;
    for(let i=0;i<arr.length-1;i++){
min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) min=j
        }
if(i!==min){
    temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
    }
    return arr
}

const res=selection(myList);
console.log(res);

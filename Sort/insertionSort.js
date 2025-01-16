const myList=[4,9,3,1,6,2,7,5]

function insertion(arr){
let currentIndex;
    for(let i=0;i<arr.length;i++){
currentIndex=i;

while(currentIndex>0 && arr[currentIndex-1]>arr[currentIndex])
{
    let temp=arr[currentIndex];
    arr[currentIndex]=arr[currentIndex-1];
    arr[currentIndex-1]=temp;
    currentIndex--;
}
    }
    return arr
}


let res=insertion(myList)
console.log(res);





let myList=[72, 23, 12, 65, 87, 52, 33, 46]

function quick(arr){
if(arr.length===1){
    return arr
}
let pivot=arr[arr.length-1]
let leftArr=[];
let rightArr=[];

for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot) leftArr.push(arr[i])
        if(arr[i]>pivot) rightArr.push(arr[i])
}

if(leftArr.length>0 && rightArr.length>0){
    return [...quick(leftArr),pivot,...quick(rightArr)]
}else if(leftArr.length>0){
    return [...quick(leftArr),pivot]
}else{
    return [pivot,...quick(rightArr)]
}

}

let res=quick(myList);
console.log(res);

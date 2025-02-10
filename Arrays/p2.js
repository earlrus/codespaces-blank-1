//reverse string 
const reverseSt=(str)=>str.split("").reverse().join("")

console.log(reverseSt("hello"));

//palindrome

const palindr=(str)=>str.split("").reverse().join("")===str;

console.log(palindr("acca"));

// capitilize letter

const capt=(str)=>str.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ")

console.log("cap-->",capt("hello world mario"));

// chunked array

const myChunk=(chunk,size)=>{

    let index=0;
    let chunkArr=[];

    while(index<chunk.length){
        let res=chunk.slice(index,index+size)
        chunkArr.push(res);
        index+=size;
    }
    return chunkArr
}

console.log(myChunk([1,2,3,4,5,6,7,8,9,10],2));


//two sum

const twoSum=(arr,target)=>{

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return {
                    result:"found",
                    indexes:[i,j]
                }
            }
        }
        return {result:"not found"}
    }
}

console.log(twoSum([2,7,11,15],14));



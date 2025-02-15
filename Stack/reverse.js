//reverse the string

function reverse(str){
let stack=[];

for (let char of str){
    stack.push(char)
}
console.log(stack.reverse().join(" ").toString());


}

reverse("hello world")
// let sentence ="I am a comma separated sentence"; 
// let words = sentence.split("");
// console.log(words)

// let sentence2 = "I am a comma separated sentence";
// let words2 = sentence2.split("a");
// console.log(words2)

// q2
// find out the occurance of "r" in the given string

// let str = "tu meri me tera me teri tu mera";
// let res =  str .split("r")
// console.log(res.length)

// REGULAR

function demo(){
    console.log("demo")
}
demo()

function sample(a,b){
    return a+b;
}
console.log(sample(5,10))

// Arrow function
// Advantage doesn't need return and function keyword and it will perform ansynchronously.

// const test=(c,d)=>c+d;
// if we have multiple statements then we have to add return
// const test =(c,d)=> c+d;
// const test =(c,d)=>{
//     return c+d;
// }
// console.log(test(4,6))


let arr = [3,2,3,4,5]

let res =arr.map(function(x){
    return x+2
})
console.log(res)
// settimeout(cancelIdleCallback,timedelay);

setTimeout(()=>{
    console.log("sign up")
},1000)

let date=new date()
console.log(date)
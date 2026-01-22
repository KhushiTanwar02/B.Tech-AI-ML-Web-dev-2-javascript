// Q1
// let arr =[1,2,3,4,5]
// let rev =[]
// while(arr.length>0){
//     rev.push(arr.pop())
// }
// console.log(rev)

// Q2
// let arr =[3,-1,4,5,-0,-2,8];
// let res =[]

// while(arr.length>0){
//     let val =arr.shift();
//     if(val>0){
//         res.push(val);
//     }
// }
/**
 * The function checks if a given array is a palindrome by comparing it with its reversed version.
 * The function is checking if the array `[1,2,3,2,1]` is a palindrome. Since the array is the
 * same when read forwards and backwards, the function will return "palindrome".
 */
// // console.log(res)


// function palindrome(){
//     let arr = [1,2,3,2,1];
//     let original =[]//[1,2,3,2,1]
//     let reverse  =[]//[1,2,3,2,1]

//     for (let i =0; i < arr.length; i++){
//         original.push(arr[i]);
//     }
//     while (arr.length > 0){
//         reverse.push(arr.pop())
//     }
//     for (i = 0; i < original.length; i++){
//         if (original[i] !== reverse[i]){
//             return "not a palindrome"
//         }
//     }
//     return "palindrome"
// }
// console.log(palindrome())

// Q4
let
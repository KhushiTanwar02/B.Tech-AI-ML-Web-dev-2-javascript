// promise
let myPromise = new Promise((res,rej)=>{
    let data = "this is my data";
    if(data){
        res(data);
    }else{
        rej("error:no data found");
    }
});
// console.log(myPromise);  
//     //promise are smart organise function of callback function
// promise handling
myPromise 
.then((d)=>{
    console.log(d);
})
.catch((err)=>{
    console.log(err);
});
            
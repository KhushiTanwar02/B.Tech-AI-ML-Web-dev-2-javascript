// create element
const para = document.createElement("p");
para.textContent="This is a dynamically added paragraph";
console.log(para);
// // append element
document.getElementById("content")
appendChild(para)
// remove element
document.querySelection("#content p").remove()

const image =document.getElementById("img");
// to and set the attribute in the tag
image.setAttribute("src","https://media.istockphoto.com/id/1353259673/vector")

image.setAttribute("alt","javascript")
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

let date = new date();
console.log(date)
setInterval(()=>{
    let date =new date();
    console.log(date);
    let hour = date.getHours();
    let min = date.getMinute();
    let second =date.getSecond();

    const clock =document.getElementById("digi-clock");
    clock.testContent=hour+":"+"min"+"+"+"second";
    clock.textContent='${hour}:${min}:${second}';
},1000)

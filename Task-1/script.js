const profile = document.getElementById("profile");
profile.style.backgroundColor="aqua";
profile.style.padding="15px";
profile.style.textAlign ="center"

//TASK2


const highlight = document.getElementsByClassName("important");
console.log(highlight)

for(let i=0;i<highlight.length;i++){

    
    highlight[i].style.color = "red";
}

for(let i=0;i<highlight.length;i++){
    highlight[i].style.fontSize="50px";
}
console.log(highlight.length)

//TASK3
const paragraphs = document.getElementsByTagName("p");

for(let i=0; i < paragraphs.length;i++){
    if(i % 2 === 0){
        // even index paragraphs (0,2,4...)

        paragraphs[i].style.color = "blue";


    }else{
        // odd index paragraphs (1,3,5...)

        paragraphs[i].style.color = "green";
    }
}

// Make the last paragraph bold
paragraphs[paragraphs.length-1].style.fontWeight = "bold";

//task4
const task4 =document.querySelectorAll(".box")
for(let i =0;i<task4.length;i++){

}
task4.textContent="i am first box";

//TASK5
const section =document.getElementById("content");
const task5=section.querySelectorAll("p");

for(let i=0;i<task5.length;i++){
    task5[i].style.color="purple"
}

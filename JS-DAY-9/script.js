document.getElementById("myInput").addEventListener("change",(event)=>){
    // here event is the synthetic event which comes under addEventLister's callback function.
    //it will print the event object which stores all information about thr form tag.
    console.log(event.target.value);
    //event.target will print the targeted element and event.target.value will print the user input value.
    document.getElementById("output").textContent="change detected";
    
})
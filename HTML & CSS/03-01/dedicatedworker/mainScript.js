const first=document.getElementById("first-value")
const second=document.getElementById("second-value")
const result=document.getElementById("result")
const getValues=document.getElementById("getValues")
if(window.Worker){
    const worker=new Worker("dedicatedWorker.js")

    // [first, second].forEach(input =>{
    //     input.onchange = function(){
    //         worker.postMessage([first.value, second.value]);
    //         console.log("Values has been sent to the workers");
    //     };
    // });

    function sendValues() {
        worker.postMessage([first.value, second.value]);
        console.log("Values have been sent to the worker");
    }

    [first, second].forEach(input => {
        getValues.addEventListener("cli", sendValues);
    });
    
    worker.onmessage = function(event){
        result.textContent=event.data;
        console.log("Result has been received from the worker")
    };
}

else{
    console.log("Workers are not supported in this browser");
}
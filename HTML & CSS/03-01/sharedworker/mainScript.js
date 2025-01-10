const first=document.getElementById("first-value")
const second=document.getElementById("second-value")
const result=document.getElementById("result")
const getValues=document.getElementById("getValues")

if(window.SharedWorker){
    const sharWorker = new SharedWorker("worker.js")

    function sendValues(){
        sharWorker.port.postMessage([first.value, second.value])
        console.log("Mainscript1 : Data has sent to the worker");    
    }

    [first, second].forEach(input =>{
        getValues.addEventListener("click",sendValues)
    })

    sharWorker.port.onmessage=function(event){
        result.textContent=event.data;
        console.log("Mainscript1 : Data has been received from the worker");
    }

    sharWorker.onerror = (error) =>{
        console.log("Worker Error :"+error.message);
        throw error;
    }
}

else{
    console.log("Sharedworker is not supported in this browser");
    
}
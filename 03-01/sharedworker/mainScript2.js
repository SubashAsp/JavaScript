const first=document.getElementById("first-value")
const second=document.getElementById("second-value")
const getValues=document.getElementById("getValues")
const result=document.getElementById("result")

if(window.SharedWorker){
    const shar2Worker=new SharedWorker("worker.js")

    function sendValues(){
        shar2Worker.port.postMessage([first.value, second.value])
        console.log("Mainscript1 : Data has sent to the worker");    
    }

    [first, second].forEach(input =>{
        getValues.addEventListener("click",sendValues)
    })

    shar2Worker.port.onmessage=function(event){
        result.textContent=event.data;
        console.log("Mainscript1 : Data has been received from the worker");
    }

    shar2Worker.onerror = (error) =>{
        console.log("Worker Error :"+error.message);
        throw error;
    }
}
else{
    console.log("Sharedworker is not supported in this browser");
}
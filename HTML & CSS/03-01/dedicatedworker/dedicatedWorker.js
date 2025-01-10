onmessage=function(event){
    console.log("Worker : Message received from main file");
    const result=event.data[0]*event.data[1];
    if(isNaN(result)){
        postMessage("Worker : Number is not valid/of another type")
    }
    else{
        const worker_result = 'Result :'+result;
        console.log("Worker : Task completed. Sending message to main file");
        postMessage(worker_result);
    }
}
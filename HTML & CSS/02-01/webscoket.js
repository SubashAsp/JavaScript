let web_Socket=document.getElementById("web_Socket1")
let socket_Status=document.getElementById("socket_Status")

web_Socket.addEventListener("click",() =>{
    if(window.WebSocket){
        console.log("Web sockets are supported");
        let socket=new WebSocket("wss://echo.websocket.org")
        socket.addEventListener('open',() =>{
            socket.send("Hello Server")
            socket_Status.textContent="Hello server"
            // socket.close()
        })
        socket.addEventListener("message", (event) =>{
            console.log("Message from server",event.data);
            
        })
    }
    else{
        socket_Status.textContent="ERROR coonnection not established"
    }
})
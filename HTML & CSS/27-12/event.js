function text(){
    document.getElementById("div1").innerText="the text is copied"
}
function text1(){
    console.log("Text has been copied")
}

let d = document.getElementById("div2");
d.addEventListener('cut', handleCut);
function handleCut(event){
    console.log('copied');
    d.innerText='cut';
    console.log(event.data);
}

function get(){
    document.getElementById("samp").innerHTML="pasted"
}

window.addEventListener('beforeprint',function(){
    console.log('before print')
    this.document.getElementById("print").innerHTML="before print"
})
window.addEventListener('afterprint',function(){
    console.log('after print')
    this.document.getElementById("print").innerHTML="after print"
})



const drag_content = document.getElementById("drag");
const drop_content = document.getElementById("drop");

drag_content.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.value);
    console.log("Dragging has been started!")
})

drop_content.addEventListener("dragover", function(event){
    event.preventDefault();
    console.log("Dragging can't be done in this space!")
});

drop_content.addEventListener("drop", function(event){
    if (drag_content) {
        console.log(drag_content);
       
        drop_content.innerText = drag_content.textContent;
        console.log("Dragged element is dropped in destination zone!")
} else {
console.log("Element not found!")
}

});

drag_content.addEventListener("dragend", function(){
    console.log("Drag ended");
})

let mouse_event=document.getElementById("div3")
mouse_event.addEventListener('mouseover',function(){
    mouse_event.innerText='Mouse Hover'
})
mouse_event.addEventListener('mouseup',function(){
    mouse_event.innerText='released'
})
mouse_event.addEventListener('mouseout',function(){
    mouse_event.innerText='Ranged out'
})
mouse_event.addEventListener('mousedown',function(){
    mouse_event.innerText='pressed'
})
mouse_event.addEventListener('click',function(){
    mouse_event.innerText='clicked'
})
mouse_event.addEventListener('dblclick',function(){
    mouse_event.innerText='doubleclicked'
})
mouse_event.addEventListener('auxclick',function(){
    mouse_event.innerText='right click'
})

let mouse=document.getElementById("div4")
mouse.addEventListener('mouseenter',function(){
    mouse.innerText='entered'
})
mouse.addEventListener('mouseleave',function(){
    mouse.innerText='leaves'
})

window.addEventListener('online',function(){
    console.log("you are connected")
    this.document.getElementById("div5").innerHTML="online";
})
window.addEventListener('offline',function(){
    console.log("you are not connected")
    this.document.getElementById("div5").innerHTML="offline";
})
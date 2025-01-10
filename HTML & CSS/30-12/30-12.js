// CompositionEvent
const comp_input  = document.getElementById("composition_input");
const comp_start  = document.getElementById("composition_start");
const comp_update = document.getElementById("composition_update");
const comp_end    = document.getElementById("composition_end");

comp_input.addEventListener("compositionstart", (event) => {
    comp_start.textContent = "composition started!" + event.data;
})

comp_input.addEventListener("compositionupdate", (event) => {
    comp_update.textContent = "composition updated!" + event.data;
})

comp_input.addEventListener("compositionend", (event) => {
    comp_end.textContent = "composition ended!"+ event.data ;
})

// Animation
let img = document.getElementById('img');
let btn = document.getElementById('cnl');
let keyframe = new KeyframeEffect(img,[{

    transform: "translateY(0)"
},
{
    transform: "translateY(-20px)"
}],
{
    duration:2000,
    iterations:"Infinity",
    direction:"alternate",
    easing:"ease-in-out",
}
);
btn.addEventListener('click',()=>{
animation.cancel();
})
let animation= new Animation(keyframe,document.timeline);
animation.play();

// rolling animation
let emoji=document.getElementById("emoji")
let cancelButton=document.getElementById("cancelButton")
let keyframe2=new KeyframeEffect(emoji,[{
    transform: "translateX(0) rotate(0)"},
    {transform: "translateX(200px) rotate(1.3turn)"},
],
{
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: Infinity,
})
let rollingAnimation=new Animation(keyframe2, document.timeline)
rollingAnimation.play()
cancelButton.addEventListener('click',()=>{
    rollingAnimation.cancel()
})

// focus(focusin , focusout)

let form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "aqua";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});

// focus(focus , blur)

let password=document.getElementById("passId")

password.addEventListener("focus",(event)=>
{event.target.style.background = "aqua"})

password.addEventListener("blur",(event)=>{
    event.target.style.background = ""
})

// fullscreen
let toggleFullScreen=document.getElementById("toggleFullScreen")
let fullscreenElement=document.getElementById("fullScreenElement")
toggleFullScreen.addEventListener("click",(event)=>
{
    if(document.fullscreenElement)
    {
        document.exitFullscreen()
    }
    else{
        fullscreenElement.requestFullscreen()
    }
})

// Cancel
let fileId=document.getElementById("file")
let result=document.getElementById("result")
fileId.addEventListener("cancel",(event)=>{
    result.textContent="Canceled"
})
fileId.addEventListener("change",(event)=>{
    if(fileId.files.length == 1){
        result.textContent="file selected"
    }
})

// invalid
const formid=document.getElementById("formid");
const input = document.getElementById("inputId");
const log = document.getElementById("invalidId");

formid.addEventListener("invalid", (e) => {
   console.log("Hai")
  log.appendChild(document.createElement("li")).textContent = JSON.stringify(
    e.target.value,
  );
});


// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("invalid", (e) => {
//   log.appendChild(document.createElement("li")).textContent = JSON.stringify(
//     e.target.value,
//   );
// });


console.log(localStorage.getItem("name"))
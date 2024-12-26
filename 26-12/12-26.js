function changeContent(){
    document.getElementById("div1").innerHTML="The content is changed"
}
function colorChange(){
    let b=document.getElementsByTagName("p")
    for (let i = 0; i < b.length; i++) {
        b[i].style.color = "red";
    }
}
function changeText(){
    document.getElementById("p1").innerText="the para is changed"
}
function showText(){
    let a=document.getElementById("p2")
    console.log(a.innerText)
    console.log(a.innerHTML)
}
function createNew(){
    let ele=document.createElement("p")
    ele.innerText="this is the new paragraph tag"
    document.body.appendChild(ele)
}
function clearDiv(){
    let one=document.getElementById("div3")
    let two=document.getElementById("div4")
    one.removeChild(two)
}
function getNew()
{
    let d2=document.createElement("p");
    d2.innerText="this is a new paragraph";
    let d1=document.getElementById("div5");
    d1.appendChild(d2);
}
function changeIt(){
    document.querySelector("#para").style.color="aqua"
}
function onIt(){
let host=document.querySelector("#d7")
let root=host.attachShadow({mode:'open'})
let span=document.createElement("p")
span.textContent="this is in shadow dom"
root.appendChild(span)
}
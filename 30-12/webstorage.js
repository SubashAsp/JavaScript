// local storage

function Submit(event){
    event.preventDefault();
    let a=document.getElementById("name_Id").value;
    let b=document.getElementById("email_Id").value;

    localStorage.setItem("name",a);
    localStorage.setItem("email",b);
    
    console.log(localStorage.key(a))
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    // console.log(localStorage.removeItem("name"))
} 

function clearAll(event){
    localStorage.clear()
}

// session storage

function submitId(event){
    event.preventDefault();
    let sessionName=document.getElementById("sessionNameId").value
    let sessionMail=document.getElementById("sessionMailId").value

    sessionStorage.setItem("nameId",sessionName);
    sessionStorage.setItem("mailId",sessionMail);

    console.log(sessionStorage.getItem("nameId"))
    console.log(sessionStorage.getItem("mailId"))
    // console.log(sessionStorage.removeItem("nameId"))
}
function allClear(event){
    sessionStorage.clear()
}


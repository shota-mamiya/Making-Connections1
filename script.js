function showSubmitForm(){
    let element = document.getElementById("form");
    element.style.visibility = ("visible");
}

function changeUsername(value){
    let userName = document.getElementById("nameInp");
    let element = document.getElementById("username");
    element.innerText = userName.value;
    let closeForm = document.getElementById("form");
    closeForm.style.visibility = ("hidden");
}

function closeForm(){
    let element = document.getElementById("form");
    element.style.visibility = ("hidden");
}

function removeRequest(){
    let element = document.getElementById("request");
    element.style.visibility = ("hidden");
}
function removeRequest1(){
    let element = document.getElementById("request-1");
    element.style.visibility = ("hidden");
}
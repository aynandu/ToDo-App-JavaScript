const inputBox=document.getElementById("input-box");
const containerli=document .getElementById("list-container");

function addClick(){
    if (inputBox.value===""){
        alert("Enter Something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        containerli.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
containerli.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",containerli.innerHTML);
}
function displayData(){
    containerli.innerHTML=localStorage.getItem("data");
}
displayData();
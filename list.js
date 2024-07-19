let input = document.getElementById("word");
let task = document.getElementById("tasks");
document.getElementById("but").onclick = function () {
  if (input.value.length == 0) {
    alert("add something");
 }
 else {
    
    task.innerHTML += `<div id="all">
    <span id="nothing">${input.value}</span>
    <button class="del">&times;</button>
    </div>`;
    let whole=document.querySelectorAll(`.del`)
    for(let i=0;i<whole.length;i++)
    {
        whole[i].addEventListener("click",function(){

        this.parentNode.remove()
        })
    }
}
input.value = ""; 

};
document.getElementById("clear").onclick=function(){
    task.innerHTML=""
}


const openbtn = document.querySelector(".openbtn");
openbtn.onclick=function(){
    document.getElementById("mySidepanel").style.width="250px";
}
const closebtn = document.querySelector(".closebtn");
closebtn.onclick = function(){
    document.getElementById("mySidepanel").style.width="0px";
}
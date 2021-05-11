


const coinel=document.querySelector(".coin");
const button=document.querySelector("#button");
const diplay=document.querySelector("#display");
const total=document.querySelector("#total");
var todo=document.querySelector("#todo");
var random1=Math.trunc((Math.random()*2)+1);
    button.addEventListener("click",function(){
    var random=Math.trunc((Math.random()*2)+1);
    console.log(typeof random,random);
    coinel.src=`coin-${random}.png`
    if(random===1){
        diplay.textContent="it's head";
    }else if (random===2){
        diplay.textContent="it's trails";
    }
     })
     var id = 5;
function addItem() {

var localvalue = {};
var i = 0;
var input = document.getElementById("candidate").value
var localvalue = {
'i': i,
'input': input,
'bet': bet,
'choice': choice
};
localStorage.setItem(i, JSON.stringify(localvalue));
console.log(localvalue);
i++;
console.log(i);



var myHero = localStorage.getItem("i");
console.log(myHero);
var ul = document.getElementById("dynamic-list");
console.log(ul);
var candidate = document.getElementById("candidate");
var li = document.createElement("li");
var span = document.createElement("span");
var button = document.createElement("button");
button.setAttribute('onclick',"removeItem("+id+")");
button.setAttribute('class',"btn btn-remove"); 
button.setAttribute('type',"button");
button.appendChild(document.createTextNode("Remove item"));
li.setAttribute('id',id);
li.appendChild(document.createTextNode(candidate.value));
li.appendChild(span);
span.appendChild(button);
ul.appendChild(li);
id++;
}

function removeItem(id){
var ul = document.getElementById("dynamic-list");
var li = document.getElementById(id);
ul.removeChild(li);

}



const coinel=document.querySelector(".coin");
const button=document.querySelector("#button");
const diplay=document.querySelector("#display");
const total=document.querySelector("#total");


const heads=document.getElementById("heads");
const spin=document.getElementById("spin");
spin.addEventListener("click",function(){
    let coins=Math.trunc(Math.random() * 2) 
    let coin=["H","T"];
    console.log(coin[`${coins}`]);
    setTimeout(() => {
    document.getElementById("heads").textContent=coin[`${coins}`]
    document.getElementById("heads").style.fontSize="60px";
}, 3000),

document.getElementById("show1").textContent = 'Spinning in progress...Wait for 3 seconds'
setTimeout(() => {
             document.getElementById('show1').style.display = "none";
             document.getElementById('show').textContent = 'game is in progress'
     }, 3000);
        
});
var todo=document.querySelector("#todo");
var bet=document.querySelector("#bet");
var choose=document.querySelector("#selecters");
var additems=document.querySelector("#submit");
var items=JSON.parse(localStorage.getItem("heads or tails")) || [];
additems.addEventListener("click",function(){
    additems()
function selectitems(){

}

function additems(){
    var  item=todo.value;
    var  item1=bet.value;
    var  item2=choose.value;
    if(item===""){
        return document.querySelector("#empty").textContent="you need to enter  name ";
    }items.push({
      todo: item,
      bet: item1,
      choose: item2
       
    })
    localStorage.setItem('todo-list',JSON.stringify(items));
    listItems();
    todo.value="";

 }
 function deleteItem(index){
     items.splice(index,1);
     localStorage.setItem('todo-list', JSON.stringify(items))
         listItems();
 }
 function markAsDone(index) {
     items[index].done = !items[index].done;
     localStorage.setItem('todo-list', JSON.stringify(items));
     listItems();
 }
 function listItems() {
     var list = "";
     for (var i = 0; i < items.length; i++) {
         list += "<li>";
         list += items[i].value + " ";
        list += "<small title='click me to mark as done' class='label' onclick='markAsDone(" + i + ")'>" + items[i].time + "</small> ";
         list += "<span class='label label-1 alert' onclick='deleteItem(" + i + ")'>Remove</span></li>";

     }
     document.querySelector("#list-items").innerHTML = list;
 }
 (function() {
     listItems();
 })();
});
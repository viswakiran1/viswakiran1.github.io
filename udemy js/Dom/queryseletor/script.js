/* var score =document.querySelector(".score").textContent;

document.querySelector('.score').textContent=90;
console.log(document.querySelector(".score").textContent);
// document.querySelector(".guess").value='here is the value ';
console.log(document.querySelector(".score").value);
*/
document.querySelector(".check").addEventListener("click",function(){
    var guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess,guess)
    if(!guess){
document.querySelector(".message").textContent="it empty";
    }
})
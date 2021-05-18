 var count =document.getElementById("button");
  
count.addEventListener("click",function(){
    let inputValue=document.getElementById("textarea").value;
    characters=inputValue.length;
    spaces=inputValue.split(" ").length-1;
    words=inputValue.split(/[^\s]+/).length - 1;
   //console.log(words,spaces,characters);
  
    document.getElementById("result").innerHTML="number of characters : "+characters;
    document.getElementById("result1").innerHTML="number of spaces : "+spaces;
    document.getElementById("result2").innerHTML="number of words : "+words;
   
})


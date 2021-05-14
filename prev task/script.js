const button = document.getElementById("button");
button.addEventListener("click",function(){
    var x = (document.getElementById("Input1").value);
    var y = (document.getElementById("Input2").value);
    var z = 0;
    if (document.getElementById("number3").checked) {
        z = parseInt(x) + parseInt(y);
    } else if (document.getElementById("number4").checked) {
        z = x - y;
    } else if (document.getElementById("number5").checked) {
        z = x * y;
    } else {
        z = x / y;
    }
    document.getElementById("rs").innerHTML = "Result is:" + z;

})

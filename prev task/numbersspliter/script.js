function output() {
    var numbers = [];
    numbers=document.getElementById("num-one").value;
    numbers=numbers.split(',');
    var largest = Number.MIN_SAFE_INTEGER;;
    var smallest = Number.MAX_VALUE;
    var neg = [];
    var pos = [];
    var even = [];
    var odd = [];
    
   

    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] > largest){
            largest = numbers[i];
        }
        if(numbers[i] < smallest){
            smallest = numbers[i];
        }
   
         if((parseInt(numbers[i]) % 2) == 0){
            even.push(numbers[i]);

        }
         if((numbers[i] % 2) !== 0){
            odd.push(numbers[i]);
        }
        if(numbers[i] > 0) {
            pos.push(numbers[i]);
        }
        if (numbers[i] < 0){
            neg.push(numbers[i]);
        }
       
    }
   console.log(even)

    document.getElementById("p1").innerHTML = "Largest number:" + largest;
        document.getElementById("p2").innerHTML = "Smallest number:" + smallest;
        document.getElementById("p3").innerHTML = "Even numbers:" + even;
        document.getElementById("p4").innerHTML = "Odd numbers:" + odd;
        document.getElementById("p5").innerHTML = "+ve numbers:" + pos;
        document.getElementById("p6").innerHTML = "-ve numbers:" + neg;
         
}
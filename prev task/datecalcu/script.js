const button = document.getElementById("button");

button.addEventListener("click",function(){
    var inputValue= document.getElementById("date").value;
    let split=inputValue.split("-");
    console.log(inputValue)
     console.log(split[0])
    console.log(split[1])
    console.log(split[2])

    let today = new Date();
    let year=split[0];
    let month=split[1];
    let date=split[2];
    var dob_asdate = new Date(year, month, date);
    console.log(dob_asdate)
    var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
    let age = (mili_dif / (1000 * 3600 * 24 * 365.25));
    let min = Math.trunc((age/60000));
    let sec =Math.trunc((age/1000));
    
    console.log(today)
    console.log(dob_asdate);
    console.log(age);
    console.log(sec)
    console.log(min);
    //document.getElementById("result").textContent="calculate in min : " + min;
    //document.getElementById("result1").textContent="calculate in second : " + sec;
   
    // console.log(age);
    // console.log(mili_dif/1000);
    // console.log(mili_dif/60000);
     
})

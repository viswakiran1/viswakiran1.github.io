var x="john";
console.log(x);
var y="hai my name is ";
console.log(y+x);
 var z=9;
 var i=true;
 var u=null;
 var v="";
 var r;
 console.log(typeof x);
 console.log(typeof z);
 console.log(typeof i);
 console.log(typeof u);
 console.log(typeof v);
 console.log(typeof r);
 /// difference between let, var , const
 let red="yes";
 console.log(red);
 red="no";
 console.log(red);
 var green ="color";
 console.log(green);
 green="nature";
 console.log(green);
const yellow="change";

 console.log(yellow);
 //when ever we using const only declare a value it is constant it can not change like "let" or "var";
 ///
let num=8;
let num1=7;
console.log(num>num1);
console.log(num1>num);
/// 
const firstName="viswa";
const secondName="kiran";
console.log("hai my name is "+firstName+secondName);
console.log(`friends call me  ${firstName} but relatives call me ${secondName}`);
///
const viswaAge=22;
const kiranAge=24;
 const age=viswaAge<kiranAge;
 if(age){
     console.log("kiran is elder than viswa");
 }else{
     console.log("viswa is elder than kiran ");
 }
 var year=2020;
 if(year>2019){
     console.log("your living in  covid period of time");
 }else{
     console.log("your safe before 2020");

 }
var year="2020";
console.log(2+year);
console.log(2+Number(year));
console.log(year,String(4));
console.log(year<"2021");
let n='18'-'8';
let n1=n+6;
let n2=n1-7;
console.log(n1);
console.log(n2);
 var ab=18;
 var bc="18";
 // this == can not compare the type of date it is when ever come this === this will compare data type also 
 if(ab==bc){
     console.log("this are equal ");
 }else{
     console.log("this are not equal");
 }
  if(ab===bc){
    console.log("this are equal ");
}else{
    console.log("this are not equal because of data type ");
}
var month="may";
switch(month){
case month="jan":
console.log("this month is january");
break;
case month="february":
    console.log("this month is february");
    break;
    case month="march":
        console.log("this month is march");
        break;
        case month="april":
            console.log("this month is april");
            break;
            case month="may":
                console.log("this month is may");
                break;
                case month="june":
                    console.log("this month is june ");
                    break;
                    default: console.log("nothing");

var may="march";
}
if(month!==may){
    console.log("this wrong month");
}else if(month==march){
    console.log("this is march month ")
}else if (month==="may"){
    console.log("this month is may");

}else {
    console.log("your selected nothing");
}

      
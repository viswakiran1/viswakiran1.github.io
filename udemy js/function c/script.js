
function calling(){
    console.log("hai hello evey one");

}
calling();
calling();
function parameters(p1,p2){
    var para=`we declare values for a parameters ${p1},${p2}`;
    return para;
}
  paras=parameters(1,2);
  console.log(paras);
  paras1=parameters("para1","para2");
  console.log(paras1);
  paras2=parameters(true,false);
  console.log(paras2);
  console.log(parameters(">","<"))

  //function declaration 
  function year(year){
      var now=2021-year;
      return now;
  }
  const by=year(1998);
  console.log(by);
   function month(a){
       const months=12
return months-a;
   }
   console.log(month(5));
   // function expression
   const day= function(d){
       const c=31;
       return c-d;
   }
   const e=day(26);
   console.log(e);
   console.log(day(5));
   console.log(day(5),month(7),year(23));

   /// arrow function

   const calcu=(addition,subraction)=>{
const x=20;
const add=x+addition;
const y=30;
const sub=y-subraction;
return` the value of addtion is ${add} and subraction ${sub} `
   }
  const value=calcu(100,20);
  console.log(value);
/// calling others function 
function multiple(mult){
    return mult*15;
}
function calcul(value2,value3){
    const value4=multiple(value2);
    const value5=multiple(value3);
    const value7=calcula(value2);
    return `this value of multiple${value4} second value is ${value5} third value is ${value7}`;
}
function calcula(divid){
    return divid/5;
}
const value6=calcul(15,20);
console.log(value6);
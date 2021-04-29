
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

////functions with if , else if and else
 
/// we are doing about driving license

function license(age){
const ages=18;
if(ages<age){
    return `your able write license test `;
}else{
    return`we need to wait ${ages-age} year  `;
}
}
 const years= license(12);
 console.log(years);
/// challenge #1(function);


const avgdolpine=(a,b,c)=>{
    return (a+b+c)/3;
}
const avgkoala=(a,b,c)=>{
    return (a+b+c)/3;
}
const checkWinner=(a,b,c,d,f,g)=>{
    const avgd=avgdolpine(a,b,c);
    console.log(avgd);
    const avgk=avgkoala(d,f,g);
    console.log(avgk);
   if(avgd>(avgk*2)){
        return`dolpine score double than dolpine, the dolpine score ${avgd}`;

    }else if((avgd*2)<avgk){
        return` koala score double than dolpine, the koala score ${avgk}`;
    }else{
        return` both team not win`;
    }
}
//example
console.log(checkWinner(1,2,3,1,4,9));
//test 1
console.log(checkWinner(44,23,71,65,54,49));
//test 2 
console.log(checkWinner(85,54,41,23,34,27));





///challenge#1 as per video

const calcuAverage=(a,b,c)=>(a+b+c)/3;
//test1
const avgdolp=calcuAverage(44,23,71);
console.log(avgdolp);
const avgkoal=calcuAverage(65,54,49);
console.log(avgkoal);
const avgdolp1=calcuAverage(85,54,41);
console.log(avgdolp1);
const avgkoal1=calcuAverage(23,34,27);
console.log(avgkoal1);
const checkwinner=(avgdolp,avgkoal)=>{
    if(avgdolp>(avgkoal*2)){
        console.log(` dolpine win `);
    }else if ((avgdolp*2)<avgkoal){
console.log(` koala win `);
    }else {
        console.log( `both team  loose `);
    }
}
console.log(checkwinner(46,56));
console.log(checkwinner(60,28));


/// arrays
const friend=['ram','krishna','humanu'];
console.log(friend);
console.log(friend.length);
console.log(friend[0]);
friend[4]='ravana';
console.log(friend);
friend[3]='thanous';
console.log(friend); 
const listName=['host', 'ghost', 1990-1880, friend ,friend.length ,true];
console.log(listName);
const count=[1,2,3,4,5,6,7,8]
function counts(a,b){
   var add=a+b; 
    return add;
}
console.log(counts(count[0],count[1]));
function countsn(c,d){
    return c+d;
}
console.log(countsn(count[5],count[6]));
 const vName=['joker','ravan','thanous'];
 // push add at end
 vName.push('paste');
 console.log(vName);
 //unshift add at strating
 vName.unshift('present');
 console.log(vName);
 //pop is use  to remove last element
 vName.pop();
 console.log(vName);
 // shift is use to remove first element
 vName.shift();
 console.log(vName);
 // indexof 
 console.log(vName.indexOf('ravan'));
 // include is use for if array element are there not
 console.log(vName.includes('ravan'));
 console.log(vName.includes('ram'));
 
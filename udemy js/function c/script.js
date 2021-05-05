
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
 

 // arrays challenge#2
  function calcutip(bill){
      if(bill>=50&&bill<=300){
        return  bill*0.15;
      }else{
          return bill*0.2;
      }
  };
  const bill=[125,555,44];
  const tip= [calcutip(bill[0]),calcutip(bill[1]), calcutip(bill[2])];
  console.log(tip);
  const total=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];
  console.log(bill,tip,total);

  // objects 
  const aName={
      firstName:'thanous',
      secondName:'god of goodness',
      nickName:'villon',
      perpose:'kill pain less because people no need to die with hungry'   
  };
  console.log(aName.firstName);
   //const myhero=prompt('hai');
   //console.log(aName[myhero]);
//    if (aName[myhero]){
//        console.log('hai');
//    }else{
//        console.log(`hello`);
//    }
aName.thanous='marvel best character';
console.log(aName);
aName.friends=['ultron','loki','redhead'];
console.log(aName);
console.log(aName.friends[1]);

// challenge#3
 const john={
     fName:'john',
     mass:78,
     height:1.69,
     calcuBmi:function(){
         this.bmi=this.mass/this.height**2;
         return this.bmi;

     }
 }
 console.log(john.calcuBmi());

 const mark={
    fName:'john',
    mass:92,
    height:1.95,
    calcuBmi:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
}
console.log(mark.calcuBmi());

 if(mark.calcuBmi()<john.calcuBmi()){
     console.log(`john bmi is greater than markf${john.calcuBmi()}`);
 }else if(mark.calcuBmi()>john.calcuBmi()){
     console.log(`john bmi is greater than markf${mark.calcuBmi()}`);
 }
 // for loop 
 for (let hours=1;24>=hours; hours++){
     console.log(`today we overcome on ${hours} hours`);
 }

 //loop with arrays
  const bikes=['ns200','rs200','rx100','mt-15','r15'];
  for (i=0;i<5;i++){
      console.log(bikes[i]);
  }

  const states=['andhra','kerala','tamil nadu','panjub'];
  const datatype=[];
  for(j=0;j<states.length;j++){
      console.log(states[j],typeof states[j]);
      datatype[j]= typeof states[j];
     
  }
 
 
  console.log(datatype);

const petanimal=['cat','dog','pigeon', 'fishs',5,true];
const pet=[];

for(let k=0;k<petanimal.length;k++ ){

pet.push(typeof petanimal[k]);

   
} console.log(pet);

const yeares=[2002,2008,2014,2020];
const g=[];
for (m=0; m<yeares.length; m++){
    g.push(2020-yeares[m]);
    
}
 console.log(g); 

 const brand=['honda','pulsar','yamaha',123,true];
 for(let i=brand.length;i>-1;i--){
     console.log(brand[i]);
 }
 // loop in loop 
  const gear=[1,'n',2,3,4,5];
  for(i=0;i<gear.length;i++){
      console.log(`we are going gear increment  ${gear[i]} gears upto last gear`);
      for(clach=0;clach<6;clach++){
          console.log(`we are use cluch upto ${clach}`)
      }
    //   for(reduce=6;reduce>0;reduce--){
    //       console.log(`we are going reduce gear ${reduce}`)
    //   }
  }

  // while loop 
  var  y=0;
  while(y<10){
      console.log(`we going increase numbers ${y}`);
      y++;
  }

// math.random the value between 0 to 1 decimal value
let dice=Math.random()*6
console.log(dice);
// math.trunc
let dices=Math.trunc(Math.random()*6)+1;
console.log(dices);
while (dices!==6){
    console.log(`we roled ${dices}`);
    dices=Math.trunc(Math.random()*6)+1;
   
}

//challenge#1 loops
const calctip=function(bille){
    return bille>=50&&bille<=300?bille*015:bille*0.2;
}
const billes=[22,295,176,440,37,105,10,1100,86,52];
const tipes=[];
const totales=[];
for (let i=0; i<billes.length;i++){
    const tipe=calctip(billes[i]);
    tipes.push(tipe);
    totales.push(tipe+billes[i]);
}
console.log(billes,tipes,totales);

const calage=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calage([2,3,4]));
console.log(calage(totales));
console.log(calage(tipes));

var xy=20;
if(xy===20)console.log('this equal value');

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature=[-23,34,45,56,67,78,89]

function calcultempamplitude(temp){
    var max=temp[0];
    var min=temp[0];
    for(let i=0;i<temp.length;i++ ){
        const curtemp=temp[i];
        if(typeof curtemp !== "number")continue;
        //console.log(curtemp);
        if(max<curtemp)max=curtemp;
        if(min>curtemp)min=curtemp;

        
       
    }
    console.log(max,min);
    return max-min;
    
}
console.log(calcultempamplitude(temperatures));
console.log(calcultempamplitude(temperatures.concat(temperature)))
const arr1=[17,21,23];
const arr2=[12,5,-5,0,4];
function printforecast(t3,t4){
    const t5=t3.concat(t4);
    return`...${t5[0]} in 1 day ...${t5[1]} in 2 day...${t5[2]} in 3 day...${t5[3]} in 4 day...${t5[4]} in 5 day...${t5[5]} in 6 day...${t5[6]} in 7 day...${t5[7]} in 8 day`

}
console.log(printforecast(arr1,arr2));
const data=[17,21,23];
const data1=[12,5,-5,0,4];
const data2=data.concat(data1);
function printfore(table){
    let str='';
    for(i=0;i<table.length;i++){
        str=str+`...${table[i]} in ${i+1}day... `
    }
console.log(str)
}
console.log(printfore(data2));
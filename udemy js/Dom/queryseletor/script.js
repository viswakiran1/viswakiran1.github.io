/* var score =document.querySelector(".score").textContent;

document.querySelector('.score').textContent=90;
console.log(document.querySelector(".score").textContent);
// document.querySelector(".guess").value='here is the value ';
console.log(document.querySelector(".score").value);
*/
/*
document.querySelector(".check").addEventListener("click",function(){
    var guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess,guess)
    if(guess===18){
    document.querySelector(".message").textContent="you enter correct value"
    }else if (guess!==18){
        document.querySelector(".message").textContent="you need try agian "
    }
    if(!guess){
document.querySelector(".message").textContent="it empty";
    }
})
const number=Math.trunc(Math.random()*20)+1;
document.querySelector(".number").textContent=number;
*/
/*
$(document).ready(function(){
    console.log($(".score").text())
    $(".message").text("what every happened")
    const guess=$(".guess").text();
    if(guess===18){
        $(".message").text("your enter correct value")
    }else if(!guess){
        $(".message").text("this is empty")
    }
})
*/

// $(document).ready(function(){
//     $(".check").click(function(){
//         const guess =Number($(".guess").val());
//         console.log(typeof guess,guess)
//         if(guess === 18){
//             $(".message").text("your entered correct number")
//         }else(guess>=17)
//             $(".message").text("you need try again")
        
//     })
// }
/*
const number=Math.trunc(Math.random()*20);
$(document).ready(function(){
    $(".guess").click(function(){
        const value =Number($(".guess").val());
        $(".number").val(number)
        if(number === value){
            $(".message").text("your rnter corrrect value")
        }else if(!value){
            $(".message").text("your need to try again")
        }

    })
})*/

// var score=20;
//  const random=Math.trunc(Math.random()*20);

//  document.querySelector(".check").addEventListener("click",function(){
//      const guess=  Number(document.querySelector(".guess").value);
//  console.log(typeof random ,random)
//  if(!guess){document.querySelector(".message").textContent="its empty"
//  }else if(guess === random){
//      document.querySelector(".message").textContent="your enter correct answer"
//      document.querySelector("body").style.backgroundColor="yellowgreen";
//      document.querySelector(".number").style.width="30rem";
//      const value=document.querySelector(".number").textContent=random;
//      var highscore=0;
//      if(score>highscore){
//          highscore=score;
//          document.querySelector(".highscore").textContent=highscore;
//      }else if(guess !== random){
//          if(score>1){
//          document.querySelector(".message").textContent="your entered too high "
//      score--;
//      document.querySelector(".score").textContent=score;
   
//      }
//      else{
//          document.querySelector(".message").textContent="game over"
//          document.querySelector(".score").textContent=0;
//          document.querySelector("body").style.backgroundColor="red";
//      }
         
//      }
//  }else if(guess > random){
//      if(score>1){
//          document.querySelector(".message").textContent="your entered too high "
//      score--;
//      document.querySelector(".score").textContent=score;
   
//      }
//      else{
//          document.querySelector(".message").textContent="game over"
//          document.querySelector(".score").textContent=0;
//          document.querySelector("body").style.backgroundColor="red";
//      }
//  }else if (guess<random){
//      if(score>1){
//      score--;
//      document.querySelector(".message").textContent="your entered too low " 
//      document.querySelector(".score").textContent=score;
//      }else{
//          document.querySelector(".message").textContent="game over"
//          document.querySelector(".score").textContent=0;
//          document.querySelector("body").style.backgroundColor="red";
//      }
//  }
 
//  document.querySelector(".again").addEventListener("click",function(){
//     var score=20;
//     const random=Math.trunc(Math.random()*20);
    

//     document.querySelector(".message").textContent="start guessing ....."
//      document.querySelector("body").style.backgroundColor="#222"
//      document.querySelector(".score").textContent=score;
//      document.querySelector(".number").textContent="?"
//      document.querySelector(".guess").value='';
//      document.querySelector(".number").style.width="15rem"
//  })


//  })


var score=20;
var random=Math.trunc(Math.random()*20)
var highscore=0;
document.querySelector(".check").addEventListener("click",function(){
    const guess=+document.querySelector(".guess").value;
    console.log(guess,typeof guess,random)
    if(!guess){
        document.querySelector(".message").textContent="its empty "
        
    }else if(guess === random){
        document.querySelector(".message").textContent="your entered a correct value";
        document.querySelector("body").style.backgroundColor="yellowgreen";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".number").textContent=random;
    }else if (guess !== random ){
        if(score>1){
        document.querySelector(".message").textContent= guess>random ? "too high ":"too low";
            score--;
        document.querySelector(".score").textContent=score;
        
        }else{
            document.querySelector(".message").textContent="game over";
            document.querySelector("body").style.backgroundColor="red"
            document.querySelector(".score").textContent="0";
            document.querySelector(".number").textContent=random;
        }
    }

})
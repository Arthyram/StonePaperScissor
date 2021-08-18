var arr = ['stone','paper','scissor'];
var usermove;
var compmove;
var random;
var score1 = 0;
var score2 = 0;
var user_score= document.getElementById("user_score");
var comp_score= document.getElementById("comp_score");
var winner;


function move(value){
    usermove=value;
    random=Math.floor(Math.random()*3);
    compmove=arr[random];
    document.getElementById("user_move").innerHTML=" " +usermove;
    document.getElementById("comp_move").innerHTML = " "+ compmove;

if ((usermove!=compmove)&&(score1 !=6 && score2!= 6)){
    if(usermove=="paper"){
        if(compmove=="scissor"){
            score2 +=1;
            document.getElementById("comp_score").innerHTML=score2;

        }
        else{
            score1 +=1;
            document.getElementById("user_score").innerHTML=score1;

        }
    }
    if(usermove=="stone"){
        if(compmove=="paper"){
            score2 +=1;
            document.getElementById("comp_score").innerHTML=score2;
        }
        else{
            score1+=1;
            document.getElementById("user_score").innerHTML=score1;
        }
    }
    if(usermove=="scissor"){
        if(compmove=="stone"){
            score2 +=1;
            document.getElementById("comp_score").innerHTML=score2;
        }
        else{
            score1+=1;
            document.getElementById("user_score").innerHTML=score1;
        }
    }

}
if (score1==6){
    document.getElementById("container3").style.display="none";
    winner="You";
    document.getElementById("msg").innerHTML=winner+ "Won!!"
}
if (score2==6){
    document.getElementById("container3").style.display="none";
    winner="Computer";
    document.getElementById("msg").innerHTML=winner+ "Won!!" + "  Better luck next time :-)"
}


}

function reset(){
    document.getElementById("user_score").innerHTML="0";
    document.getElementById("comp_score").innerHTML="0";
    document.getElementById("user_move").innerHTML=" ";
    document.getElementById("comp_move").innerHTML=" ";
    score1=0;
    score2=0;

}


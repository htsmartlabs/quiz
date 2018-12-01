var start = document.getElementById("start");
var game  = document.getElementById("game");
var winner = document.getElementById("winner");

var question = document.getElementById("question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");


//display only the first page
start.style.display ="block";
game.style.display ="none";
winner.style.display ="none";

/**
 * this function will handle the 
 * movements in the different pages
 * @param {it will provide the no 
 * of the page to be diaplayed} id 
 */
function startQuiz(id){
    if(id === 1){
        //display only the second page
        start.style.display ="none";
        game.style.display ="block";
        winner.style.display ="none";
        $.get("http://localhost:3000", function(data, status){
            console.log(data.question[0].question);
            question.innerHTML=data.question[0].question;
            ans1.innerHTML=data.question[0].ans1;
            ans2.innerHTML=data.question[0].ans2;
            ans3.innerHTML=data.question[0].ans3;
            ans4.innerHTML=data.question[0].ans4;
        });


    }else if(id === 2){
        //display only the third page
        start.style.display ="none";
        game.style.display ="none";
        winner.style.display ="block";
    }else if(id === 3){
        //display only the first page
        start.style.display ="block";
        game.style.display ="none";
        winner.style.display ="none";
    }
}
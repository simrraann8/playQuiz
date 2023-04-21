function populate(){
    if(quiz.isEnded()){
     showScores();
    }
    else{
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //showchoices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length;i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
};


function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex+1;
    var element = document.getElementById("Progress");
    element.innerHTML= "Question "+currentQuestionNumber+" of "+quiz.questions.length;
};

function showScores(){
    var gameOver = "<h1>Result</h1>";
        gameOver+= "<h2 id='score'>Your score: "+quiz.score+"</h2>"
        var element = document.getElementById("quiz");
        element.innerHTML= gameOver;
};

var questions=[
    new Question("What kinds of iterators can be used with vectors?",["Forward iterator","Bi-directional iterator","Random access iterator","All of the above"],"All of the above"),
    new Question("Which one of the following is a loop construct that will always be executed once?",["for","while","switch","do while"],"do while"),
    new Question("Array is a _________ data structure.",["Non-linear","Primary","Linear","Data type"],"Linear"),
    new Question("Who defines the user-defined function?",["Compiler","Computer","Compiler library","Users"],"Users"),
    new Question("Each instance of a class has a different set of",["Class interfaces","Methods","Return types","Attribute values"],"Attribute values"),


];
var quiz = new Quiz(questions);

populate();
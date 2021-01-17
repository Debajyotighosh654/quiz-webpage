function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("what is the full form of html?", ["Hypertext Markup Language", "Hypertext Markup Learning","Hypertype Markup Language", "Hypertext Mixedup Language"], "Hypertext Markup Language"),

    new Question("Which of the following attributes is used to open an hyperlink in new tab?", ["tab", "href","target", "ref"], "target"),
    

    new Question("What is the font-size of the h1 heading tag?", ["3.5 em", "2.17 em","2 em", "1.5 em"], "2 em"),
    

    new Question("Which of the following attributes is used to add link to any element?", ["link", "ref","href", "newref"], "href"),

    new Question("What is the purpose of using div tags in HTML?", ["For creating Different styles ", "For creating different sections","For adding headings", "For adding titles"], "For creating different sections"),
            

];


var quiz = new Quiz(questions);


populate();





var submit = document.getElementById("submit");
submit.onclick = function () {
    
    var stripes = document.getElementById("stripes");
    var stars = document.getElementById("stars");
    var colors = document.getElementById("colors");
    var correct = 0;
    var incorrect = 0;
    
    var message = document.getElementById("message");

    if(stripes.value=="13"){
        correct = correct + 1;
        a1.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a1.innerText = "Wrong answer. Please try again!"
    }
    if(stars.value=="50"){
        correct = correct + 1;
        a2.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a2.innerText = "Wrong answer. Please try again!"
    }
    if(colors.value=="3"){
        correct = correct + 1;
        a3.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a3.innerText = "Wrong answer. Please try again!"
    }
    
    message.innerText = "You got " + correct + " correct answers."
};
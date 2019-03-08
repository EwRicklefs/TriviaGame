var correct=0
var incorrect=0
var quizTimer
display = document.querySelector('#timeRem');
var minutes = 60 * 1

//button logic
$('#start').click(function() {
    $('#banner').hide();
    $('#quizBoard').show();
    //start timer
    quizTimer = setTimeout(
        () => {
          evaluate();
        },
        60 * 1000
    );
    
    
    startTimer(minutes, display);
})

$('#submit').click(function() {
    
    evaluate();
    clearTimeout(quizTimer)
})
$('#restart').click(function() {
    $('#banner').show()
    $('#results').hide()
    correct=0;
    incorrect=0
})

//checks answers, if correct, increments correct total
//if incorrect or not filled increments incorrect total
//updates results page
function evaluate() {
    $('#quizBoard').hide();
    $('#results').show();
    if ($('#q1f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q2t').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q3f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q4f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q5t').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q6t').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q7f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q8f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    if ($('#q9f').is(':checked')) {
        correct++
    } else {
        incorrect++
    }
    $('#corr').html(correct)
    $('#incorr').html(incorrect)
    $('#percent').html(correct/9)
}



//Ensures that only one true false checkbox is checked at a time
$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
});


//TODO: Write timer for the main body of the quiz
//  * also have it update the countdown timer on the body of the page

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


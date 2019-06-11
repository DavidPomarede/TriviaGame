window.onload = function() {
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
  // $("#answer1").on("click", answer1);
  // $("#answer2").on("click", answer2);
  // $("#answer3").on("click", answer3);
  // $("#answer4").on("click", answer4);
};

document.body.style.backgroundImage = "url('assets/images/memphis-colorful.png')";

var intervalId;
var clockRunning = false;
var time = 30;
var lap = 1;

answer1is = "";
answer2is = "";
answer3is = "";
answer4is = "";



var triviaQ = [
  "1) What is the name of the villain in the first Superman movie (1980) played by Gene Hackman?",
  "2) In which movie David Bowie appears as Jareth the Goblin King?",
  "3) Serve the trust. Protect the innocent. Uphold the law. whose mantra?",
  "4) Who played the obsessive character at the center of Close Encounters of the Third Kind?",
  "5) Who made the 1989 underwater sci-fi chiller The Abyss?",
  "6) Who was The Graduate in the film of the same name?",
  "7) Which 1960 Hitchcock film has the most famous shower scene ever?",
  "8) Which comedian wrote and starred in the iconic film about 90's rap, CB4?",
  "9) Easy Rider starred Peter Fonda, Jack Nicholson and Dennis Hopper. Which one directed the movie?",
  "10) In the movie Moonstruck starring Cher and Danny Aiello, who played the one-handed baker that Cher falls in love with?"
];

var triviaA = [
  {"a": "A: Mister X", "b": "B: Lex Luther", "c": "C: Dr. No", "d": "D: Prof. Fiddleysticks"},
  {"a": "A: Space Oddity", "b": "B: The Man who Fell to Earth", "c": "C: Basquiat", "d": "D: Labyrinth"},
  {"a": "A: Judge Dredd", "b": "B: Robocop", "c": "C: Seargent Kabukiman, NYPD", "d": "D: Buckaroo Banzai"},
  {"a": "A: Robert Redford", "b": "B: Richard Dreyfuss", "c": "C: Jack Nicholas", "d": "D: Dennis Quaid"},
  {"a": "A: Ridley Scott", "b": "B: Steven Spielberg", "c": "C: James Cameron", "d": "D: George Lucas"},
  {"a": "A: John Voigt", "b": "B: Paul Newman", "c": "C: Dustin Hoffman", "d": "D: Sidney Poitier"},
  {"a": "A: The Birds", "b": "B: Vertigo", "c": "C: Rear Window", "d": "D: Psycho"},
  {"a": "A: David Chapelle", "b": "B: Ari Shaffir", "c": "C: Chris Rock", "d": "D: Jerry Seinfeld"},
  {"a": "A: Peter Fonda", "b": "B: Jack Nicholson", "c": "C: Dennis Hopper", "d": "D: None of the Above"},
  {"a": "A: Keanu Reeves", "b": "B: Nicholas Cage", "c": "C: Bruce Willis", "d": "D: Bill Murray"}
];

var triviaSolve = ["Lex Luther", "Labyrinth", "Robocop", "Richard Dreyfuss", "James Cameron", "Dustin Hoffman", "Psycho", "Chris Rock", "Dennis Hopper", "Nicholas Cage"];
var triviaSolve2 = ["#answer2", "#answer4", "#answer2", "#answer2", "#answer3", "#answer3", "#answer4", "#answer3", "#answer3", "#answer2"];


// Show first question and first set of answer choices

// start clock

// receive input for the answers

// if player runs out of time, tell them that time's up and display correct answer. wait 2 secs, next Q.

// if player chooses the right answer, congratulate them, wait 2 secs and then show next Q.

// if the player chooses the wrong answer, tell them they were wrong, display correct answer, wait 2 secs, next Q

// on the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading).

var isRunning = false;
var rightAnswers = 0;
var wrongAnswers = 0;
var thisQuestion = 0;

$("#start").on("click", startUp);

function setQnA() {
  $("#question").text(triviaQ[thisQuestion]);
  $("#answer1").text(triviaA[thisQuestion].a);
  $("#answer2").text(triviaA[thisQuestion].b);
  $("#answer3").text(triviaA[thisQuestion].c);
  $("#answer4").text(triviaA[thisQuestion].d);
  $("#question").attr("class", "list-group-item visible");
  $("#answer1").attr("class", "list-group-item visible");
  $("#answer2").attr("class", "list-group-item visible");
  $("#answer3").attr("class", "list-group-item visible");
  $("#answer4").attr("class", "list-group-item visible");
  $("#message").attr("class", "list-group-item visible alert-warning");
  thisQuestion++;
  answerQuestion = thisQuestion - 1;

}

function startUp() {
  if (!isRunning) {
    intervalId = setInterval(count, 1000);
    isRunning = true;
    setQnA();

  }
};

var questionA = [];
var questionB = [1,3,4];
var questionC = [5,6,8,9, 10];
var questionD = [2,7];

$('#answer1').on("click", function() {
  if (thisQuestion < 10) {
    for (var k = 0; k < thisQuestion; k++) {
      if (thisQuestion == questionA[k]) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  } else {
    finish();
  }
});

$('#answer2').on("click", function() {
  if (thisQuestion < 10) {
    for (var l = 0; l < thisQuestion; l++) {
      if (thisQuestion == questionB[l]) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  } else {
    rightAnswers++;
    finish();    
  }
});

$('#answer3').on("click", function() {
  if (thisQuestion < 10) {
    for (var m = 0; m < thisQuestion; m++) {
      if (thisQuestion == questionC[m]) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  } else {
    finish();
  }
});

$('#answer4').on("click", function() {
  if (thisQuestion < 10) {
    for (var n = 0; n < thisQuestion; n++) {
      if (thisQuestion == questionD[n]) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  } else {
    finish();
  }
});

// $("#answer1").on("click", function() {
//   if (thisQuestion < 10) {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion] + "!");
//     setTimeout(function() {
//       wrongAnswers++;
//       time = 30;
//       setQnA();
//       $("#messages").text("");
//     }, 2000);
//   } else {
//     wrongAnswers++;
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
//     clearInterval(intervalId);
//     clockRunning = false;
//     $("#display").text("00:00");
//   }
// });

// $("#answer2").on("click", function() {
//   if (thisQuestion < 10) {
//     if ((thisQuestion == 1) || (thisQuestion == 3) || (thisQuestion == 4) || (thisQuestion == 10)) {
//       $("#message").attr("class", "list-group-item visible alert-warning");
//       $("#messages").text("Correct! Way to go!");
//       setTimeout(function() {
//         rightAnswers++;
//         time = 30;
//         setQnA();
//         $("#messages").text("");
//       }, 2000);
//     } else {
//       $("#message").attr("class", "list-group-item visible alert-warning");
//       $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion] + "!");
//       setTimeout(function() {
//         wrongAnswers++;
//         time = 30;
//         setQnA();
//         $("#messages").text("");
//       }, 2000);
//     };
//   } else {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
//     clearInterval(intervalId);
//     clockRunning = false;
//     $("#display").text("00:00");
//   }
// });

// $("#answer3").on("click", function() {
//   if (thisQuestion < 10) {
//   if ((thisQuestion == 5) || (thisQuestion == 6) || (thisQuestion == 8) || (thisQuestion == 9)) {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Correct! Way to go!");
//     setTimeout(function() {
//       rightAnswers++;
//       time = 30;
//       setQnA();
//       $("#messages").text("");
//     }, 2000);
//   } else {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion]+ "!");
//     setTimeout(function() {
//       wrongAnswers++;
//       time = 30;
//       setQnA();
//       $("#messages").text("");
//     }, 2000);
//   };
//   } else {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
//     clearInterval(intervalId);
//     clockRunning = false;
//     $("#display").text("00:00");
//   }
// });


// $("#answer4").on("click", function() {
//   if (thisQuestion < 10) {
//   if ((thisQuestion == 2) || (thisQuestion == 7)) {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Correct! Way to go!");
//     setTimeout(function() {
//       rightAnswers++;
//       time = 30;
//       setQnA();
//       $("#messages").text("");
//     }, 2000);
//   } else {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion] + "!");
//     setTimeout(function() {
//       wrongAnswers++;
//       time = 30;
//       setQnA();
//       $("#messages").text("");
//     }, 2000);
//   };
//   } else {
//     $("#message").attr("class", "list-group-item visible alert-warning");
//     $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
//     clearInterval(intervalId);
//     clockRunning = false;
//     $("#display").text("00:00");
//   }
// });

function rightAnswer() {
  $("#message").attr("class", "list-group-item visible alert-warning");
  $("#messages").text("Correct! Way to go!");
  setTimeout(function() {
    rightAnswers++;
    time = 30;
    setQnA();
    $("#messages").text("");
  }, 2000);
}

function wrongAnswer() {
  $("#message").attr("class", "list-group-item visible alert-warning");
  $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion] + "!");
  setTimeout(function() {
    wrongAnswers++;
    time = 30;
    setQnA();
    $("#messages").text("");
  }, 2000);
}

function finish() {
    $("#message").attr("class", "list-group-item visible alert-warning");
    $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
    clearInterval(intervalId);
    clockRunning = false;
    $("#display").text("00:00");
}

function reset() {
  time = 30;
  $("#display").text("00:30");
  thisQuestion = 0;
  var rightAnswers = 0;
  var wrongAnswers = 0;
  startUp();
};

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
};

function count() {
  if (time === 0) {
    clearTimeout(time);
    timeOut();
  } else {
  time--;
  var converted = timeConverter(time);
  $("#display").text(converted);
  }
};

function timeOut() {
  if (thisQuestion < 10) {
    $("#messages").text("You ran out of time!");
    setTimeout(function() {
      wrongAnswers++;
      setQnA();
      $("#messages").text("");
    }, 2000);
    time = 30;
    $("#display").text("00:30");
  } else {
    setTimeout(function() {
      wrongAnswers++;
      setQnA();
      $("#messages").text("");
    }, 2000);
    time = 30;
    $("#display").text("00:30");
    $("#message").attr("class", "list-group-item visible alert-warning");
    $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
    clearInterval(intervalId);
    clockRunning = false;
    $("#display").text("00:00");
  }
};

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
};

// if (time === 0) {
//   setTimeout(function() {
//     wrongAnswers++;
//     setQnA();
//     $("#messages").text("Time's up!");
//   }, 2000);
//   if (!isRunning) {
//     intervalId = setInterval(count, 1000);
//     isRunning = true;
//   }
// }
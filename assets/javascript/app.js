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
  "3) Serve the public trust. Protect the innocent. Uphold the law. Whose mantra?",
  "4) Who played the obsessive character at the center of Close Encounters of the Third Kind?",
  "5) Who made the 1989 underwater sci-fi chiller The Abyss?",
  "6) Who was the graduate in the film of the same name?",
  "7) Which 1960 Hitchcock film has the most famous shower scene ever?",
  "8) Which comedian wrote and starred in the iconic film about 90's rap, CB4?",
  "9) Easy Rider starred Peter Fonda, Jack Nicholson and Dennis Hopper. Which one directed the movie?",
  "10) In the movie Moonstruck, starring Cher and Danny Aiello, who played the grumpy one-handed baker that Cher eventually falls in love with?"
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

var gifs = [
  0,
  "https://thumbs.gfycat.com/LonelyNextHornshark-max-1mb.gif",
  "https://media.giphy.com/media/EVQWoszCjUwW4/giphy.gif",
  "https://media.giphy.com/media/DYUE5UEPNPQxq/giphy.gif",
  "https://media.giphy.com/media/7YjcHwtOvCp7G/giphy.gif",
  "https://thumbs.gfycat.com/BlankBoilingHoneycreeper-max-1mb.gif",
  "https://media.giphy.com/media/kBWPbik51l6JW/giphy.gif",
  "https://media.giphy.com/media/2dosfx99zInk1eWNG2/giphy.gif",
  "http://66.media.tumblr.com/f6f809c42d97c402e5c2b9e1d5b09ee3/tumblr_mtc832ZZ941rhe069o1_500.gif",
  "https://media.giphy.com/media/l0Iy3ZvNclKmPbnHy/giphy.gif",
  "https://78.media.tumblr.com/f6f8a8f77a1eee9951d2dbe5f2b5660c/tumblr_n5ujlu55a81qanwe4o3_r2_250.gif"
];

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
  thisQuestion++;
  answerQuestion = thisQuestion - 1;
  $('img').remove();
  $('#reset').remove();
  $('#start').remove();
  $('#messages').remove();
  $('#images').remove();
  $('#buttonSpace').remove();
};

function startUp() {
  if (!isRunning) {
    intervalId = setInterval(count, 1000);
    isRunning = true;
    setQnA();
  }
};

$("#answer1").on("click", function() {
  if (thisQuestion < 10) {
    wrongAnswer();
  } else {
    finish();
}
});

$("#answer2").on("click", function() {
  if (thisQuestion < 10) {
    if ((thisQuestion == 1) || (thisQuestion == 3) || (thisQuestion == 4) || (thisQuestion == 10)) {
      rightAnswer();
    } else {
      wrongAnswer();
    };
  } else {
    finish();
  }
});

$("#answer3").on("click", function() {
  if (thisQuestion < 10) {
  if ((thisQuestion == 5) || (thisQuestion == 6) || (thisQuestion == 8) || (thisQuestion == 9)) {
    rightAnswer();
  } else {
    wrongAnswer();
  };
} else {
  finish();
}
});

$("#answer4").on("click", function() {
  if (thisQuestion < 10) {
  if ((thisQuestion == 2) || (thisQuestion == 7)) {
    rightAnswer();
  } else {
    wrongAnswer();
  };
} else {
  finish();
}
});

function rightAnswer() {
  showMessage();
  showImage();
  $("#messages").text("Correct! Way to go!");
  showGif();
  setTimeout(function() {
    rightAnswers++;
    time = 30;
    setQnA();
    $("#messages").text("");
  }, 2000);
};

function wrongAnswer() {
  showMessage();
  showImage();
  $("#messages").text("Wrong answer! The answer was " + triviaSolve[answerQuestion] + "!");
  showGif();
  setTimeout(function() {
    wrongAnswers++;
    time = 30;
    setQnA();
    $("#messages").text("");
  }, 2000);
};

function finish() {
  rightAnswers++;
  showMessage();
  showImage();
  $("#messages").text("Finished! You got " + rightAnswers + " answers right and " + wrongAnswers + " answers wrong.");
  showGif();
  clearInterval(intervalId);
  clockRunning = false;
  $("#display").text("00:00");
  resetButtonF();
};

function reset() {
  isRunning = false;
  $("#display").text("00:30");
  $("#messages").text("");
  rightAnswers = 0;
  wrongAnswers = 0;
  thisQuestion = 0;
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

function showGif() {
  var imgURL = gifs[thisQuestion];
  var image = $("<img>").attr("src", imgURL);
  $("<img>").attr("class", "rounded");
  $('#images').append(image); 
};

function showMessage() {
  var messageBox = $("<li>");
  messageBox.attr("class", "list-group-item text-center alert-warning alpha");
  messageBox.attr("id", "messages");
  $('.list-group').append(messageBox); 
};

function showImage() {
  var imageBox = $("<li>");
  imageBox.attr("class", "list-group-item text-center alert-warning alpha");
  imageBox.attr("id", "images");
  $('.list-group').append(imageBox); 
};

function resetButtonF() {
  var resetButton = $("<button>");
  resetButton.attr("class", "quattro");
  resetButton.attr("id", "reset");
  resetButton.text("Reset");
  resetButton.on("click", reset);
  var spacer = $("<div>");
  spacer.append(resetButton);
  $('#display').append(spacer); 
};

function startButtonF() {
  var startButton = $("<button>");
  startButton.attr("class", "quattro");
  startButton.attr("id", "reset");
  startButton.text("Start");
  startButton.on("click", startUp);
  $('#buttonSpace').append(startButton); 
};
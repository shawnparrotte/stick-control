var pageOne = {
  1 : ["R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L"],
  2 : ["L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R", "L", "R"],
  3 : ["R", "R", "L", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "R", "L", "L"],
  4 : ["L", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "R", "L", "L", "R", "R"],
  5 : ["R", "L", "R", "R", "L", "R", "L", "L", "R", "L", "R", "R", "L", "R", "L", "L"],
  6 : ["R", "L", "L", "R", "L", "R", "R", "L", "R", "L", "L", "R", "L", "R", "R", "L"],
  7 : ["R", "R", "L", "R", "L", "L", "R", "L", "R", "R", "L", "R", "L", "L", "R", "L"],
  8 : ["R", "L", "R", "L", "L", "R", "L", "R", "R", "L", "R", "L", "L", "R", "L", "R"],
  9 : ["R", "R", "R", "L", "R", "R", "R", "L", "R", "R", "R", "L", "R", "R", "R", "L"],
  10: ["L", "L", "L", "R", "L", "L", "L", "R", "L", "L", "L", "R", "L", "L", "L", "R"],
  11: ["R", "L", "L", "L", "R", "L", "L", "L", "R", "L", "L", "L", "R", "L", "L", "L"],
  12: ["L", "R", "R", "R", "L", "R", "R", "R", "L", "R", "R", "R", "L", "R", "R", "R"],
  13: ["R", "R", "R", "R", "L", "L", "L", "L", "R", "R", "R", "R", "L", "L", "L", "L"],
  14: ["R", "L", "R", "L", "R", "R", "L", "L", "R", "L", "R", "L", "R", "R", "L", "L"],
  15: ["L", "R", "L", "R", "L", "L", "R", "R", "L", "R", "L", "R", "L", "L", "R", "R"],
  16: ["R", "L", "R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "L", "R", "L", "L"],
  17: ["R", "L", "R", "L", "R", "L", "L", "R", "L", "R", "L", "R", "L", "R", "R", "L"],
  18: ["R", "L", "R", "L", "R", "R", "L", "R", "L", "R", "L", "R", "L", "L", "R", "L"],
  19: ["R", "L", "R", "L", "R", "R", "R", "L", "R", "L", "R", "L", "R", "R", "R", "L"],
  20: ["L", "R", "L", "R", "L", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L", "R"],
  21: ["R", "L", "R", "L", "R", "L", "L", "L", "R", "L", "R", "L", "R", "L", "L", "L"],
  22: ["L", "R", "L", "R", "L", "R", "R", "R", "L", "R", "L", "R", "L", "R", "R", "R"],
  23: ["R", "L", "R", "L", "R", "R", "R", "R", "L", "R", "L", "R", "L", "L", "L", "L"],
  24: ["R", "R", "L", "L", "R", "L", "R", "R", "L", "L", "R", "R", "L", "R", "L", "L"],
  exerciseNumber: 1,
  strokeNumber: 0,
  successes: 0
}

function init(){
  var sL = ($(window).width() / 2) - $("#stickL").width() - 20,
      sR = ($(window).width() / 2) + 20,
      sT = ($(window).height() / 2);

  if($(window).width() < 999){
    $("#stickR").css("left", "525.5px");
    $("#stickL").css("left", "287.5px");
  } else {
    $("#stickR").css("left", sR);
    $("#stickL").css("left", sL);
  }
}

function loadExercise(exerciseArray){
  for(i = 1; i <= exerciseArray.length; i++){
    var stroke = "#stroke" + i;
    $(stroke).text(exerciseArray[i-1]);
  }
}

function strokeSuccess(){
  var togreen = "#stroke" + (pageOne.strokeNumber + 1);
  $(togreen).css("color", "lightgreen");
  pageOne.strokeNumber++;
}

function strokeFail(){
  pageOne.strokeNumber = 0;
  pageOne.successes = 0;
  $("#successes").text(pageOne.successes);
  $("#pattern span").css("color", "black");
}

$(window).keydown(function(e){

  if(e.keyCode === 74){
    $("#stickR").css("transform", "rotate(-10deg)");
    if(pageOne[pageOne.exerciseNumber][pageOne.strokeNumber] === "R"){
      strokeSuccess();
    } else if (pageOne[pageOne.exerciseNumber][pageOne.strokeNumber] !== "R"){
      strokeFail()
    }
  }
  else if (e.keyCode === 70) {
    $("#stickL").css("transform", "rotate(10deg)");
    if(pageOne[pageOne.exerciseNumber][pageOne.strokeNumber] === "L"){
      strokeSuccess();
    } else if (pageOne[pageOne.exerciseNumber][pageOne.strokeNumber] !== "L"){
      strokeFail();
    }
  }
}).keyup(function(e){

  if(pageOne.strokeNumber === 16){

    pageOne.successes++;
    $("#successes").text(pageOne.successes);
    pageOne.strokeNumber = 0;
    $("#pattern span").css("color", "black");

    if(pageOne.successes === 4){
      pageOne.exerciseNumber++;
      if(pageOne.exerciseNumber === 25){
        pageOne.exerciseNumber = 1;
      }
      loadExercise(pageOne[pageOne.exerciseNumber]);
      pageOne.successes = 0;
      $("#successes").text(pageOne.successes);
      $("#displayExerciseNumber").text(pageOne.exerciseNumber + "/24");
    }
  }

  if(e.keyCode === 74){$("#stickR").css("transform", "rotate(0deg)");}
  else if (e.keyCode === 70) {$("#stickL").css("transform", "rotate(0deg)");}
});

$(document).ready(function(){init();loadExercise(pageOne[pageOne.exerciseNumber]);});
$(window).resize(function(){
    init();
});

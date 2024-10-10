// Define all the input variables
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");
var txt = document.getElementById("text");


// The random number generated every quetion
var rng = 0;

// Toggle for multiple choice and text. 0 for multiple choice, 1 for text
var tgl = 0;


// Only for multiple choice, what answer is correct
var crmc = 0;

// Only for text, what spelling is correct
var crtxt = ;


// The number of questions there are
var quests = 1;


// Define all the question variables
var q = document.getElementById("question");
var q2 = document.getElementById("text");


// Define all the <div>
var replaceable = document.getElementById("replaceable");
// Multiple Choice
var mc = document.getElementById("mc");
// Text Box container
var txtcont = document.getElementById("ta");

// Run every time a question is answered
function newquestion() {
  // Random question
  rng = Math.random(quests-1);

  // Actually writes the question
  // Ineffecient, probably will fid faster solution, but will work for now.
if (rng == 0){
  tgl = 0;
  crmc = 3;
    
  q.innerHTML = "Fill in the blank.";
  q2.innerHTML = "I am the ______";
  bt1.innerHTML = "ohio";
  bt2.innerHTML = "fanum tax";
  bt3.innerHTML = "sigma";
  bt4.innerHTML = "mewing";
  }

  // Toggles on and off multiple choice
  if (tgl == 0) {
    txtcont.disabled = "true";
    mc.disabled = "false";
  } else if (tgl == 1) {
    txtcont.disabled = "false";
    mc.disabled = "true";
  }
}


// Define all the input variables
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");
let txt = document.getElementById("text");


// The random number generated every quetion
var rng = 0;

// Toggle for multiple choice and text. 0 for multiple choice, 1 for text
var tgl = 0;


// Only for multiple choice, what answer is correct
var crmc = 0;

// Only for text, what spelling is correct
var crtxt = 0;


// The number of questions there are
var quests = 2;


// Define all the question variables
const q = document.getElementById("question");
const q2 = document.getElementById("text");


// Define all the <div>
var replaceable = document.getElementById("replaceable");
// Multiple Choice
var mc = document.getElementById("mc");
// Text Box container
var txtcont = document.getElementById("ta");

// Run every time a question is answered
function newquestion() {
  // Random question
  rng = Math.floor(Math.random(quests));

  // Actually writes the question
  // Ineffecient, probably will fid faster solution, but will work for now.
//  document.getElementById("text").innerHTML = "hi";
  txt.innerHTML = "hi";
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
  if (rng == 1){
    tgl = 0;
    crmc = 2;

    q.innerHTML = "Fill in the blank.";
    q2.innerHTML = "_______ toilet";
    bt1.innerHTML = "ohio";
    bt2.innerHTML = "skibidi";
    bt3.innerHTML = "mewing";
    bt4.innerHTML = "fanum tax";
   }
  

  // Toggles on and off multiple choice
  if (tgl == 0) {
    txtcont.style.display = "none";
    mc.style.display = "block";
  } else if (tgl == 1) {
    txtcont.style.display = "";
    mc.style.display = "none";
  }
}
// Checks the answer
function mc1a(){
  if (crmc == 1){
    alert("yes");
  } else {
    alert("no");  
  }
  delay(50);
  newquestion();
}

function mc2a(){
  if (crmc == 2){
    alert("yes");
  } else {
    alert("no");  
  }
  delay(50);
  newquestion();
}

function mc3a(){
  if (crmc == 3){
    alert("yes");
  } else {
    alert("no");  
  }
  delay(50);
  newquestion();
}

function mc4a(){
  if (crmc == 4){
    alert("yes");
  } else {
    alert("no");  
  }
  delay(50);
  newquestion();
}
newquestion();



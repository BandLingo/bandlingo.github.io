alert("burrito");
// Define all the input variables
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");
// The random number generated every quetion
let rng = 0;

// Toggle for multiple choice and text. 0 for multiple choice, 
var tgl = 0;


// Only for multiple choice, what answer is correct
var crmc = 0;



// The number of questions there are
let quests = 5;


// Submit button
var sub = document.getElementById("sub");

// Define all the question variables
const q = document.getElementById("question");
const q2 = document.getElementById("text");


// Define all the <div>
var replaceable = document.getElementById("replaceable");
// Multiple Choice
var mc = document.getElementById("mc");


// Fix a bug with RNG that causes unwanted values
quests = quests - 0.01;


// Run every time a question is answered
function newquestion() {
  // Random question
  rng = Math.floor(Math.random() * quests);
  
  document.getElementById("chktxt").innerHTML = "worky!!!";
  // Actually writes the question
  if (rng === 0) {
    tgl = 0;
    crmc = 2;

    q.innerHTML = "Fill in the blank";
    q2.innerHTML = "I am the _____";
    bt1.innerHTML = "fanum tax";
    bt2.innerHTML = "sigma";
    bt3.innerHTML = "rizz";
    bt4.innerHTML = "sigme";
  } 
  if (rng === 1) {
    tgl = 0;
    crmc = 2;

    q.innerHTML = "Fill in the blank.";
    q2.innerHTML = "_______ toilet";
    bt1.innerHTML = "ohio";
    bt2.innerHTML = "skibidi";
    bt3.innerHTML = "mewing";
    bt4.innerHTML = "fanum tax";
  }
  if (rng === 2){
    tgl = 0;
    crmc = 4;

    q.innerHTML = "Fill in the blank.";
    q2.innerHTML = "That wasn't very _____";
    bt1.innerHTML = "mewing";
    bt2.innerHTML = "fanum tax";
    bt3.innerHTML = "rizz";
    bt4.innerHTML = "skibidi";
  }
  if (rng === 3){
    tgl = 0;
    crmc = 1

    q.innerHTML = "Fix the spelling error";
    q2.innerHTML = "sigme";
    bt1.innerHTML = "sigma";
    bt2.innerHTML = "segma";
    bt3.innerHTML = "simga";
    bt4.innerHTML = "smega";
  }
  if (rng === 4){
    tgl = 0;
    crmc = 2;

    q.innerHTML = "Compliment timmy";
    q2.innerHTML = "\(ツ)/";
    bt1.innerHTML = "You have an ohio jawline.";
    bt2.innerHTML = "You have W rizz.";
    bt3.innerHTML = "You look like a skibidi toilet iPad baby.";
    bt4.innerHTML = "You have L rizz.";
  }

  // Toggles on and off multiple choice
  if (tgl === 0) {
    txtcont.style.display = "none";
    mc.style.display = "block";
  } else if (tgl === 1) {
    txtcont.style.display = "";
    mc.style.display = "none";
  } 
}



// Checks the answer
document.getElementById("bt1").addEventListener("click", function() {
    if (crmc === 1){
      alert("yes");
    } else {
      alert("no");
      bt1.style.background.color = "#bd2424";
      delay(1000);
      bt1.style.background.color = "#18b551c";
    }
  newquestion();
});

document.getElementById("bt2").addEventListener("click", function() {
    if (crmc === 2){
      alert("yes");
    } else {
      alert("no");
      bt2.style.background.color = "#bd2424";
      delay(1000);
      bt2.style.background.color = "#18b551c";
    }
  newquestion();
});

document.getElementById("bt3").addEventListener("click", function() {
    if (crmc === 3){
      alert("yes");
    } else {
      alert("no");
      bt3.style.background.color = "#bd2424";
      delay(1000);
      bt3.style.background.color = "#18b551c";
    }
  newquestion();
});

document.getElementById("bt4").addEventListener("click", function() {
    if (crmc === 4){
      alert("yes");
    } else {
      alert("no");
      bt4.style.background.color = "#bd2424";
      delay(1000);
      bt4.style.background.color = "#18b551c";
    }
  newquestion();
});
newquestion();




// Define all the input variables
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");
let txt = document.getElementById("text");


// The random number generated every quetion
let rng = 0;

// Toggle for multiple choice and text. 0 for multiple choice, 1 for text, 2 for 2 answer mc.
var tgl = 0;


// Only for multiple choice, what answer is correct
var crmc = 0;

// Only for text, what spelling is correct
var crtxt = 0;


// The number of questions there are
const quests = 2;


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
  const rng = Math.floor(Math.random() * quests);
  console.log('Random question index:', rng);

  // Actually writes the question
  alert(rng);
  if (rng === 0) {
    tgl = 2;
    crmc = 2;

    q.innerHTML = "Answer the scenario.";
    q2.innerHTML = "You have a project due in two days. What do you do?";
    bt1.innerHTML = "Do it now";
    bt2.innerHTML = "Do it in five minutes";
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
    q2.innerHTML = "";
    bt1.innerHTML = "ohio";
    bt2.innerHTML = "skibidi";
    bt3.innerHTML = "mewing";
    bt4.innerHTML = "fanum tax";
  }

  // Toggles on and off multiple choice
  if (tgl === 0) {
    txtcont.style.display = "none";
    mc.style.display = "block";
  } else if (tgl === 1) {
    txtcont.style.display = "";
    mc.style.display = "none";
  } else if (tgl === 2) {
    txtcont.style.display = "none";
    mc.style.display = "block";
    bt3.style.display = "none";
    bt4.style.display = "none";
  }
}



// Checks the answer
document.getElementById("bt1").addEventListener("click", function() {
    if (crmc === 1){
      alert("yes");
    } else {
      alert("no")
    }
  newquestion();
});

document.getElementById("bt2").addEventListener("click", function() {
    if (crmc === 2){
      alert("yes");
    } else {
      alert("no")
    }
  newquestion();
});

document.getElementById("bt3").addEventListener("click", function() {
    if (crmc === 3){
      alert("yes");
    } else {
      alert("no")
    }
  newquestion();
});

document.getElementById("bt4").addEventListener("click", function() {
    if (crmc === 4){
      alert("yes");
    } else {
      alert("no")
    }
  newquestion();
});
newquestion();



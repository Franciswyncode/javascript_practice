const readlineSync = require('readline-sync');
let batPoints = 0;
console.log( "What type of tech person are you?" );
console.log( "Do you care about the appearence of a website?" );
let option = readlineSync.question( "Options: Somewhat, I am obsessed, not really" );
switch(option) {
  case "Somewhat":
    console.log( "UX/UI might not be your thing" );
    batPoints += 1;
    break;
  case "I am obsessed":
    console.log( "You are already thinking like a UX/UI designer" );
    batPoints += 3;
    console.log(batPoints);
    break;
  case "not really":
    console.log( "Batman: \"Then learn coding.\"" );
    batPoints += 1;
    break;
  default: 
    console.log( "A prisoner punches you in the face." );
    console.log( "Prisoner: \"Quit messin' around.\"" );
} 
console.log('How do you feel about the Joker?');
let optionTwo = readlineSync.question('Options: I pity him, we are lovers');
if (optionTwo === "I pity him") {
    console.log("Me too, poor guy, how did he get that smile?");
    batPoints += 2;
    console.log(batPoints);
} else {
    console.log("Oh...I didn't know. Congratulations");
    batPoints += 1;
    console.log(batPoints);
}
if (batPoints <= 3) {
    console.log("You are nothing like Batman.");
} else {
    console.log("You remind me so much of Batman.");
}
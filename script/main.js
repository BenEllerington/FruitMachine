//get the interactive elements
const imgSlot1 = document.getElementById("slot1");
const imgSlot2 = document.getElementById("slot2");
const imgSlot3 = document.getElementById("slot3");
const txtOutput = document.getElementById("output");
const txtCredit = document.getElementById("creditoutput");
const txtWinnings = document.getElementById("winningsoutput");
const btnSpin = document.getElementById("spin");
const btnCredit = document.getElementById("addCredit");
const btnCollect = document.getElementById("collect");

//add event listeners
btnSpin.addEventListener("click", spin);
btnCredit.addEventListener("click", credit);
btnCollect.addEventListener("click", collect);

//this is when the page loads
let creditAmount = 0;
let winningAmount = 0;
let slotFullAmount = 0;
let slots1 = Math.floor(Math.random() * 8 + 1);
let slots2 = Math.floor(Math.random() * 8 + 1);
let slots3 = Math.floor(Math.random() * 8 + 1);
txtCredit.innerText = `Credit: ${creditAmount}`;
txtWinnings.innerText= `Winnings: ${winningAmount}`;
imgSlot1.setAttribute("src", "images/" + slots1 + ".png");
imgSlot2.setAttribute("src", "images/" + slots2 + ".png");
imgSlot3.setAttribute("src", "images/" + slots3 + ".png");
//checks to see if the credit amount is equal to or less than 0 to disable button
if (creditAmount <= 0);
    document.getElementById("spin").disabled = true;
if (winningAmount = 0);
    document.getElementById("collect").disabled = true;
      
      

//when spin button clicked
function spin() {
    let slots1 = Math.floor(Math.random() * 8 + 1);
    let slots2 = Math.floor(Math.random() * 8 + 1);
    let slots3 = Math.floor(Math.random() * 8 + 1);
    imgSlot1.setAttribute("src", "images/" + slots1 + ".png");
    imgSlot2.setAttribute("src", "images/" + slots2 + ".png");
    imgSlot3.setAttribute("src", "images/" + slots3 + ".png");
    const slotFullAmount = (slots1 + slots2 + slots3) / 3;
    txtCredit.innerText = `Credit: ${--creditAmount}`;
    txtOutput.innerText = `Better Luck Next Time!`;
    console.log(slotFullAmount)
    // this disables spin button if credits are less or equal to 0
        if (creditAmount <= 0) {
            document.getElementById("spin").disabled = true;
        } else {
             document.getElementById("spin").disabled = false; 
        } 

    
   
    //when player matches all 3 slots
    if (slots1 === slotFullAmount) {
        winningAmount += 10;
        txtWinnings.innerText = `Winnings: ${winningAmount}`;
        txtOutput.innerText = `Conggratulations! 10 winnings have been added to your prize pool!`;
    }
    //when player matches 2nd and 3rd slots
    else if (slots2 === slots3) {
        winningAmount += 5;
        txtWinnings.innerText = `Winnings: ${winningAmount}`;
        txtOutput.innerText = `Congratulations! 5 winnings have been added to your prize pool!`;

    //Disables the collect winnings button if it is less or equal to 
    }
    if (winningAmount <= 0) {
        document.getElementById("collect").disabled = true;
    } else {
         document.getElementById("collect").disabled = false; 
    } 


}

//when credit button clicked
function credit() {
    creditAmount ++;
    txtCredit.innerText = `Credit: ${creditAmount}`;
    //checks to see if credit is above 0
    if (creditAmount > 0);
    document.getElementById("spin").disabled = false;
    txtOutput.innerText = `1 Credit Added : Press Spin to Play!`;
}

//when collect button clicked
function collect() {
    txtOutput.innerText = `You have collected ${winningAmount} winnings!`;
    winningAmount -= winningAmount;
    txtWinnings.innerText = `Winnings: ${winningAmount}`;
    if (winningAmount <= 0) {
        document.getElementById("collect").disabled = true;
    } else {
         document.getElementById("collect").disabled = false; 
    } 




  
	
    
}


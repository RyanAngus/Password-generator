let leftBox= document.getElementById("passBoxLeft");
let rightBox= document.getElementById("passBoxRight");
let leftArray = [];
let rightArray = [];

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];
//console.log(characters.length)--> 91 items.




function generatePassLeft() {
  

  for (let i = 0; i < 15; i++) {

    let passWord = characters[~~(Math.random() * characters.length)];
  
    leftArray.unshift(passWord);

    leftBox.textContent += leftArray[0];

    var btn = document.querySelector("#buttonStyle");
btn.disabled = true;
 }
 
};

function generatePassRight() {
  
  for (let i = 0; i < 15; i++) {

    let passWord = characters[~~(Math.random() * characters.length)];
  
    rightArray.unshift(passWord);

    rightBox.textContent += rightArray[0];
 }
 
};

function reset() {

  location.reload();
  return false;

}










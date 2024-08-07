export function calculateScrabbleScore(word) {
// //Write software using TDD Approach (Red -> Green -> refactor)

const scoreMap = {  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
  N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};
let totalScore = 0;


for (let char of word.toUppercase()) {
  if (scoreMap[char] === undefined) { 
    throw new Error("Invalid character in the word");
  }
    totalScore += scoreMap[char];
  }
  return totalScore;
  



// Step 2: Define the word to check


// Function to check if the correct alphabet is matched
//function checkWordMatches(word, map) {
    


// //Declare a variable that detects user input

    //if (word === "A"){
      //return 1;
   // }


//Organise with Numerical order (Ascending or Decending)

//Score should be displayed correctly in ASC or DESC
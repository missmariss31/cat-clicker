/*
 * This app will record the number of times
 * you click the cat.
*/

//cat image
const cat = document.querySelector(".cat");

//click score
const score = document.querySelector(".score");

//add event listener to listen for click event and increment score
cat.addEventListener("click", function() {
    //get current score
    let clicks = score.innerHTML;
    //increase current score by 1
    score.innerHTML = parseInt(clicks) + 1;
});
/*
 * This app will record the number of times
 * you click each cat.
*/

/* select cat-group from the DOM */
const catGroup = document.querySelector(".cat-group");

/* select score from the DOM */
const score = document.querySelector(".score");

//add each cat to catGroup
for (cat in allCats) {

    //create cat img element
    let catImg = document.createElement('img');

    //add class, id, source img,  and alt text
    catImg.className = 'cat';
    catImg.id = cat.name;
    catImg.src = 'img/cat.png';
    catImg.alt = 'cat image';

    //add click event to cat
    catImg.addEventListener('click', function() {
        //get current score
        let clicks = score.innerHTML;
        //increase current score by 1
        cat.clicked += 1  //update individual score
        score.innerHTML = parseInt(clicks) + 1; //add to total score by updating DOM
    }, false);

    //append img to catGroup
    catGroup.appendChild(catImg);

}
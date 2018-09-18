/*
 * This app will record the number of times
 * you click each cat.
*/

/* select cat-group from the DOM */
const catGroup = document.querySelector(".cat-group");

/* select score from the DOM */
const score = document.querySelector(".score");

//add each cat to catGroup
for (cat of allCats) {

    //create cat img element and p element for name
    let catImg = document.createElement('img');
    let nameTag = document.createElement('p');

    //add class, id, source img,  and alt text to img
    catImg.className = 'cat';
    catImg.id = cat.name;
    catImg.src = cat.src;
    catImg.alt = 'cat image';

    //add class to p tag
    nameTag.className = 'name';
    nameTag.innerHTML = cat.name;

    //add click event to cat
    catImg.addEventListener('click', (function(catCopy) {
        return function() {
            //get current score
            let clicks = score.innerHTML;
            //increase current score by 1
            catCopy.clicked += 1  //update individual score
            score.innerHTML = parseInt(clicks) + 1; //add to total score by updating DOM
        };
    })(cat));

    const addElements = function () {
        for (let i = 0; i < arguments.length; i++) {
            //append element to catGroup
            catGroup.appendChild(arguments[i]);
        }
    };

    document.body.onload = addElements(catImg,nameTag);

}
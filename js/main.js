/*
 * This app will create cats and 
 * record the number of times
 * you click each cat.
*/

// select button from DOM
const addCat = document.querySelector('.add-cat');

//declare variable for user's cat
let addedCat;
let catState;

// add click event to add-cat button
addCat.addEventListener('click', function(addedCat) {
    // prompt user to add the name of the cat
    addedCat = prompt("Name of Cat");
    // make object state for cat
    catState = { src: 'img/cat.png', name: addedCat, clicked: 0 };
    //add cat to data object allCats
    allCats.push(catState);
    // run catMaker
    catMaker();
});

/* select cat-group from the DOM */
const catGroup = document.querySelector(".cat-group");

/* select score from the DOM */
const score = document.querySelector(".score");

// add cat to catGroup

const catMaker = function() {

    cat = catState;

    // create cat img element and p element for name
    let catImg = document.createElement('img');
    let nameTag = document.createElement('p');

    // add class, id, source img,  and alt text to img
    catImg.className = 'cat';
    catImg.src = cat.src;
    catImg.alt = 'cat image';
    catImg.title = cat.name;

    // add class to p tag
    nameTag.className = 'name';
    nameTag.innerHTML = cat.name;

    // add click event to cat
    catImg.addEventListener('click', (function(catCopy) {
        return function() {
            // get current score
            let clicks = score.innerHTML;
            // increase current score by 1
            catCopy.clicked += 1  //update individual score
            score.innerHTML = parseInt(clicks) + 1; //add to total score by updating DOM
        };
    })(cat));

    // add img tag to p tag
    nameTag.appendChild(catImg);

    // this function will add any number of cats to the catGroup
    const addElement = function () {
        for (let i = 0; i < arguments.length; i++) {
            // append element to catGroup
            catGroup.appendChild(arguments[i]);
        }
    };

    // if you add more nameTag elements to the arguments, you get more cats!
    addElement(nameTag);

};
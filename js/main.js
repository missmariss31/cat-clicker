/*
 * Update the state of each cat
*/

const update = {
    
    showCat: function(cat) {
        // change state of visible to true
        cat.visible = true;
        // render the page with updated state
        view.render();
    },

    addToClick: function(catEl) {
        // add clicks to clicked cat
        if (catEl.className === 'cat one') {
            allCats[0].clickCount += 1;
        }
        if (catEl.className === 'cat two') {
            allCats[1].clickCount += 1;
        }
        if (catEl.className === 'cat three') {
            allCats[2].clickCount += 1;
        }
        // add clicks to total
        totalClicks += 1;
        // render the page with updated state
        view.render();
    },

    changeName: function(buttonEl, newName) {
        // change the name of the kitten selected
        if (buttonEl.id === 'one') {
            allCats[0].name = newName;
        }
        if (buttonEl.id === 'two') {
            allCats[1].name = newName;
        }
        if (buttonEl.id === 'three') {
            allCats[2].name = newName;
        }

        // render the page with updated state
        view.render();
    }

};


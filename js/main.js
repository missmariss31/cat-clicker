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
        for (let i=0; i < allCats.length; i++) {
            let cat = allCats[i];
            if (catEl.className === cat.classes) {
                cat.clickCount += 1;
            }
        }
        // add clicks to total
        totalClicks += 1;
        // render the page with updated state
        view.render();
    },

    changeName: function(buttonEl, newName) {
        // change the name of the kitten selected
        for (let i=0; i < allCats.length; i++) {
            if (buttonEl.id === allCats[i].nameID) {
                allCats[0].name = newName;
            }
        }

        // render the page with updated state
        view.render();
    }

};


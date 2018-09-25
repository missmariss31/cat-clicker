/*
 * Update the state of each cat
*/

const update = {
    showCat: function(cat) {
        cat.visible = true;
        view.render();
    },

    addToClick: function(catEl) {

        if (catEl.className === 'cat one') {
            allCats[0].clickCount += 1;
        }
        if (catEl.className === 'cat two') {
            allCats[1].clickCount += 1;
        }
        if (catEl.className === 'cat three') {
            allCats[2].clickCount += 1;
        }

        totalClicks += 1;

        view.render();
    },

};


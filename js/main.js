/*
 * Update the state of each cat
*/

const update = {
    showCat: function(cat) {
        cat.visible = true;
        view.render();
    },

    addToClick: function(cat) {
        cat.clickCount += 1;
        view.render();
    }
};


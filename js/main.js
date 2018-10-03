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
            if (buttonEl.className.includes(i)) {
                allCats[i].name = newName;
            }
        }

        // render the page with updated state
        view.render();
    },

    addNewCat: function() {
        // get form data
        let newCatData = $('form').serializeArray();
        // make new cat object
        let newCatObject = {
            name: '',
            clickCount: 0,
            src: 'img/cat1.jpg',
            classes: `cat ${allCats.length}`,
            visible: true
        };
        // add values for name and link
        newCatData.forEach(function(field) {
            if (field.name === "name") {
                newCatObject.name = field.value;
            } else if (field.name === "link") {
                newCatObject.src = field.value;
            }
        });
        // add new object to state
        allCats.push(newCatObject);

        // render the page with updated state
        view.render();
    }

};


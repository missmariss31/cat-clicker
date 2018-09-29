
const view = {
    init: function () {
        // select elements that will update
        this.catGroup = $('.cat-group');
        this.clickScore = $('.score');
        // select buttons for default cats
        const showCat = $('.add-cat').toArray();
        // select admin button
        const adminBtn = $('.new-cat');

        // add click event to each add cat button
        showCat.forEach(function (addedCat, i) {
            addedCat.addEventListener('click', function () {
                // update state of cat selected
                update.showCat(allCats[i]);
            });
        });

        // add click event to admin button
        adminBtn.on('click', function() {
            alert("Working on Form");
        })


        // add click event to each cat
        this.catGroup.on('click', '.cat', function (e) {
            let catClicked = e.currentTarget;
            // update clicks of cat clicked
            update.addToClick(catClicked);
        })

        // add click event to change name buttons
        this.catGroup.on('click', '.change-name', function (e) {
            let buttonEl = e.currentTarget;
            let newName = prompt("What is your kitten's name?");
            // update name of cat selected
            update.changeName(buttonEl, newName);
        })
        // render the page to current state
        view.render();
    },
    render: function () {
        let htmlStr = '';

        allCats.forEach(function (cat, i) {
            if (cat.visible) {
                htmlStr +=
                    `<div class='show'>
                        <img class='${cat.classes}' src='${cat.src}'>
                        <p id='name'>${cat.name}</p>
                        <button class='change-name' id='${cat.nameID}'>Change Name</button>
                        <p id='clicks'>${cat.clickCount}</p>
                    </div>
                    `;

            }

        });
        // add html to the DOM
        this.catGroup.html(htmlStr);
        this.clickScore.html(totalClicks);

    }
};

view.init();


const view = {
    init: function () {

        this.catGroup = $('.cat-group');
        this.clickScore = $('.score');

        const showCat = $('.add-cat').toArray();

        // add click event to each cat button
        showCat.forEach(function (addedCat, i) {
            addedCat.addEventListener('click', function () {
                // update state of cat selected
                update.showCat(allCats[i]);
            });
        });

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

        view.render();
    },
    render: function () {
        let htmlStr = '';

        allCats.forEach(function (cat, i) {
            if (cat.visible) {
                htmlStr +=
                    `<div class='show'>
                        <img class='${cat.class}' src='${cat.src}'>
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

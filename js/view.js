
const view = {
    init: function () {
        // select elements that will update
        this.catGroup = $('.cat-group');
        this.clickScore = $('.score');
        // select buttons for default cats
        const showCat = $('.add-cat').toArray();
        // select admin button
        const adminBtn = $('.new-cat');
        // select new-cat-button
        const newCat = $('.new-cat-btn');

        // add click event to each add cat button
        showCat.forEach(function (addedCat, i) {
            addedCat.addEventListener('click', function () {
                // update state of cat selected
                update.showCat(allCats[i]);
            });
        });

        // add click event to admin button
        adminBtn.on('click', function() {
            let text = adminBtn.text();
            // toggle innerText
            adminBtn.text(text == "Add Your Own Cat" ? "Close Form" : "Add Your Own Cat");
            // toggle hiding and showing form
            $(".form").toggleClass("hide");
        });
        
        // add click event to new cat button
        newCat.click(function(e) {
            e.preventDefault()
            update.addNewCat();
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
            console.log(buttonEl);
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
                        <p id='clicks'>${cat.clickCount}</p>
                        <img class='${cat.classes}' src='${cat.src}'>
                        <p id='name'>${cat.name}</p>
                        <button class='change-name ${i}'>Change Name</button>
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

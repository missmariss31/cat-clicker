
const view = {
    init: function () {
        this.catGroup = $('.cat-group');
        this.clickScore = $('.score');
        const showCat = $('.add-cat').toArray();
        showCat.forEach(function (addedCat, i) {
            addedCat.addEventListener('click', function () {
                update.showCat(allCats[i]);
            });

        });

        

        this.catGroup.on('click', '.cat', function (e) {
            let catClicked = e.currentTarget;
            update.addToClick(catClicked);
        })

        view.render();
    },
    render: function () {
        let htmlStr = '';

        allCats.forEach(function (cat, i) {
            if (cat.visible) {
                htmlStr +=
                    `<div class="show">
                        <img class='${cat.class}' src='${cat.src}'>
                        <p id='name'>${cat.name}</p>
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

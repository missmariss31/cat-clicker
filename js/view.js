
const view = {
    init: function() {
        this.catGroup = $('.cat-group');
        const showCat = $('.add-cat').toArray();
        showCat.forEach(function(addedCat,i) {
            console.log(i);
            console.log(addedCat);
            addedCat.addEventListener('click', function() {
                update.showCat(allCats[i]);
            });
        });
        
        view.render();
    },
    render: function(){
        let htmlStr = '';
        allCats.forEach(function(cat){
            if (cat.visible) {
                htmlStr += 
                    `<div class="show">
                        <img class=${cat.class} src=${cat.src}>
                        <p id='name'>${cat.name}</p>
                        <p id='clicks'>${cat.clickCount}</p>
                    </div>`;
            }
        });
        this.catGroup.html( htmlStr );
    }
};

view.init();

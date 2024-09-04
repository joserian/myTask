var cards_area = document.querySelectorAll(".add-card-area");
for(var i = 0; i< cards_area.length; i++) {
    var doc = cards_area[i];
    cards_area[i].addEventListener("click", (e)=> {
        var card_ = document.createElement("div");
        card_.className = "card";
        card_.draggable = true;

        var card_description_ = document.createElement("div");
        card_description_.className = "description-card";
        card_description_.contentEditable = true;

        card_.appendChild(card_description_);
        document.getElementById("card-area-0").appendChild(card_);
        card_description_.focus()
    })
}
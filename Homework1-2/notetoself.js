$(document).ready(function() {

    $("#add_button").click(function createSticky() {
        var value = document.getElementById("note_text").value;
        var colorSelection = document.getElementById("note_color").value;
        var selectedIndex = document.getElementById("note_color").selectedIndex;

        var color = colorSelection[selectedIndex].value; //color is undefined

        var currentDate = new Date();

        var key = "sticky_" + currentDate.getTime();
        console.log("key is : " + key);
        var sticky = {
            "value": value,
            "color": color
        };
        localStorage.setItem(key, JSON.stringify(sticky)); //須先把sticky物件轉成文字才能存進localstorage
        var stickiesArray = getStickiesArray();
        stickiesArray.push(key); //Uncaught TypeError: Cannot read property 'push' of undefined
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
        addStickyToDOM(key, sticky);

    });


});


function getStickiesArray() {

}



function deleteSticky(e) {

}

function addStickyToDOM(key, stickyObj) {
    var stickies = document.getElementById('stickies');
    var sticky = document.createElement('li'); //ul下有li, li下有span class="note"
    sticky.setAttribute("id", key); //每個li有一個獨立的id = key
    sticky.style.backgroundColor = stickyObj.color;
    var span = document.createElement('span');
    span.setAttribute("class", "note");
    span.innerHTML = stickyObj.value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);

    sticky.onclick = deleteSticky;
}

function removeStickyFromDOM(key) {

}

function clearStickyNotes() {

}

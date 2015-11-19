$(document).ready(function() {

    $("#addButton").click(function() {
        var key = document.getElementById("key").value;
        var value = document.getElementById("value").value;
        localStorage.setItem(key, value);
        addItemToDOM(key, value);
    });

    $("#removeButton").click(function() {
        var key = document.getElementById("key").value;
        localStorage.removeItem(key);
        removeItemFromDOM(key);

    });

    $("#clearButton").click(function() {
        localStorage.clear();
        var ul = document.getElementById("items");
        var items = ul.childNodes;
        for (var i = items.length - 1; i >= 0; i--) {
            ul.removeChild(items[i]);
        };

    });

    for (var key in localStorage) {
        addItemToDOM(key, localStorage[key]);
    };

});

/*window.onload = init;

function init() {
    var addButton = document.getElementById("addButton");
    addButton.onclick = addItem;
    var removeButton = document.getElementById("removeButton");
    removeButton.onclick = removeItem;
    var clearButton = document.getElementById("clearButton");
    clearButton.onclick = clearItems;

    for (var key in localStorage) {
        addItemToDOM(key, localStorage[key]);
    };
}*/

/*function addItem(e) {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    localStorage.setItem(key, value);
    addItemToDOM(key, value);

}*/

function addItemToDOM(key, value) {
    var items = document.getElementById('items');
    var item = document.createElement('li'); //ul下有li, li下有span class="note"
    item.setAttribute("id", key); //每個li有一個獨立的id = key
    var span = document.createElement('span');
    span.setAttribute("class", "note");
    span.innerHTML = key + ": " + value;
    item.appendChild(span);
    items.appendChild(item);

}

/*function removeItem(e) {
    var key = document.getElementById("key").value;
    // var value = document.getElementById("value").value;
    localStorage.removeItem(key);
    removeItemFromDOM(key);
}*/

function removeItemFromDOM(key) {
    var item = document.getElementById(key);
    item.parentNode.removeChild(item);
}

/*function clearItems() {
    localStorage.clear();
    var ul = document.getElementById("items");
    var items = ul.childNodes;
    for (var i = items.length - 1; i >= 0; i--) {
        ul.removeChild(items[i]);
    };

}*/

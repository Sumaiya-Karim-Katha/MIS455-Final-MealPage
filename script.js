function getFive() {
    var meal = document.getElementById("meal").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.meals));
}

function display() {

}


function getAll() {
    var meal = document.getElementById("meal").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAll(data.meals));
}


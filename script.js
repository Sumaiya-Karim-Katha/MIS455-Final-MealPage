function getFive() {
    var meal = document.getElementById("meal").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.meals));
}

function display(itemList) {
    var container = document.getElementById("box");
    container.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        var divbox = document.createElement("div");
        divbox.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        divbox.innerHTML = `
            <div class="card mb-4 style="width: 18rem;">
                <img src="${itemList[i].strMealThumb}" class="card-img-top" alt="meal image">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <h5 class="card-title">${itemList[i].strMeal}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Meal ID: ${itemList[i].idMeal}</li>
                        <li class="list-group-item">Area: ${itemList[i].strArea}</li>
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>`;
        container.appendChild(divbox);
    }
}

function getAll() {
    var meal = document.getElementById("meal").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAll(data.meals));
}

function displayAll(itemList) {
    var container = document.getElementById("box");
    container.innerHTML = "";

    for (let i = 0; i < itemList.length; i++) {
        var divbox = document.createElement("div");
        divbox.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        divbox.innerHTML = `
            <div class="card mb-4 style="width: 18rem;">
                <img src="${itemList[i].strMealThumb}" class="card-img-top" alt="meal image">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <h5 class="card-title">${itemList[i].strMeal}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Meal ID: ${itemList[i].idMeal}</li>
                        <li class="list-group-item">Area: ${itemList[i].strArea}</li>
                        <li class="list-group-item"></li>
                    </ul>
                </div>
            </div>`;
        container.appendChild(divbox);
    }
}
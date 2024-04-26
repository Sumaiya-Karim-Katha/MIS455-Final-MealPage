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
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-info mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cooking Instruction
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${itemList[i].strMeal}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ${itemList[i].strInstructions}
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-info mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cooking Instruction
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${itemList[i].strMeal}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ${itemList[i].strInstructions}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        container.appendChild(divbox);
    }
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
}
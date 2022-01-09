const CLIMBING_LOGGER_URL = "http://localhost:3000/climbs";
const newClimbForm = document.getElementById('newClimb')

document.addEventListener('DOMContentLoaded', () => {
    getClimbs()
})

newClimbForm.addEventListener('submit', addClimb)

function climbParams () {
    const location = document.getElementById('location').value
    const difficulty = document.getElementById('difficulty').value
    const ascents = document.getElementById('ascents').value
    const description = document.getElementById('description').value

    data = {
        climb: {
            location: location,
            difficulty: difficulty,
            ascents: ascents,
            description: description
        }
    }
    return data
}

async function getClimbs () {
    try {
        const response = await fetch(CLIMBING_LOGGER_URL);
        const json = await response.json();
        return recordedClimb(json);
    } catch (error) {
        return console.error(error);
    }
}

function addClimb (event) {
    console.log(climbParams)
    fetch(CLIMBING_LOGGER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(climbParams())
    })
    .then(response => response.json())
    .then(result => console.log('Success:', result))
    .then(error => console.log('Error:', error))
}

function recordedClimb(data) {

    console.log(data)

    for (let i = 0; i < data.length; i++) {

        let climbPost = 
        "<div class='col'>" +
           "<div class='card shadow-sm'>" +
                "<div class='card-body'>" +
                    `<p id="climbID" hidden>${data[i].id}</p><p class='card-text'>Location: ${data[i].location}<br>Ascents: ${data[i].ascents}<br>Difficulty: ${data[i].difficulty}<br>Description: ${data[i].description}</p>` +
                    "<div class='d-flex justify-content-between align-items-center'>" +
                        "<div class='btn-group'>" +
                            `<button type='button'  data-bs-toggle="modal" data-bs-target="#exampleModal" data-toggle="tooltip" data-placement="bottom" class='btn btn-sm btn-outline-secondary'>Edit</button>` +
                            `<button type='button' onclick='removeClimb(${data[i].id})' class='btn btn-sm btn-outline-secondary' data-toggle="tooltip" data-placement="bottom" title="Click to Remove this Climb">Remove</button>` +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

        document.getElementById("myClimbs").innerHTML += climbPost;
    }
}

async function removeClimb (id) {
    await fetch(CLIMBING_LOGGER_URL + `/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(result => console.log('Success:', result))
    .then(error => console.log('Error:', error))
    window.location.reload();
}

function findClimb (id) {
    fetch(CLIMBING_LOGGER_URL + `/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(climbParams())
    })    
    .then(result => console.log('Success:', result))
    .then(error => console.log('Error:', error))
    window.location.reload();
}

function editClimb (id) {
    editModal(findClimb(id))

    fetch(CLIMBING_LOGGER_URL + `/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(result => console.log('Success:', result))
    .then(error => console.log('Error:', error))
    window.location.reload();
}



function editModal (data) {

    let editPost = 
        `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">` +
            `<div class="modal-dialog">` +
            `<div class="modal-content">` +
                `<div class="modal-header">` +
                `<h5 class="modal-title" id="exampleModalLabel">Add a Climb</h5>` +
                `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` +
                `</div>` +
                `<div class="modal-body">` +
                `<form id="newClimb">` +
                    `<div class="row g-3 align-items-center">` +
                    `<div class="col-auto">` +
                        `<label for="location" class="col-form-label">Location</label>` +
                    `</div>` +
                    `<div class="col-auto">` +
                        `<input type="text" id="location" name="location" class="location" placeholder="${data.location}">` +
                    `</div>` +
                    `</div>` +
                    `<div class="row g-3 align-items-center">` +
                    `<div class="col-auto">` +
                        `<label for="difficulty" class="col-form-label">Difficulty</label>` +
                    `</div>` +
                    `<div class="col-auto">` +
                        `<input type="text" id="difficulty" name="difficulty" class="form-control" placeholder="${data.difficulty}">` +
                    `</div>` +
                    `</div>` +
                    `<div class="row g-3 align-items-center">` +
                    `<div class="col-auto">` +
                        `<label for="ascents" class="col-form-label">Ascents</label>` +
                    `</div>` +
                    `<div class="col-auto">` +
                        `<input type="text" id="ascents" name="ascents" class="form-control placeholder="${data.ascents}">` +
                    `</div>` +
                    `</div>` +
                    `<br>` +
                    `<div class="mb-3">` +
                    `<label for="description" class="form-label">Description</label>` +
                    `<input type="textarea" class="form-control" id="description" name="description" placeholder="${data.description}">` +
                    `</div>` +
                    `<br>` +
                    `<div class="modal-footer">` +
                    `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>` +
                    `<button type="submit" class="btn btn-primary">Submit</button>` +
                    `</div>` +
                `</form>` +
                `</div>` +
            `</div>` +
            `</div>` +
        `</div>`
}



// const addBtn = document.querySelector('#new-climb-btn')
// const newClimb = document.getElementById("newClimb")

// let addClimb = false
// let divCollect = document.querySelector('#climb-collection')

// newClimb.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const formData = new FormData(this)

//     console.log(formData)

//     // fetch('http://localhost:3000/climbs', {method: 'POST', body: formData})
//     // .then(response => response.text())
//     // .then(text => console.log(text))
//     // .catch(error => console.error(error))
// })



// function getClimbs () {
//     return fetch('http://localhost:3000/climbs')
//     .then(response => response.json())
//     .then(object => console.log(object))
// }

// function postClimb () {

// }

// function testRenderClimb () {
//     let divCol = document.createElement('div').setAttribute('class', 'col')
//     let divCardShadowSM = document.createElement('div').setAttribute('class', 'card shadow-sm')
//     let divThumbnail = document.createElement('div')
//     document.getElementById("myClimbs").appendChild(divCol);

// }

// function renderClimb () {
//     let divCol = document.createElement('div').setAttribute('class', 'col')
//     let divCardShadowSM = document.createElement('div').setAttribute('class', 'card shadow-sm')
//     let divThumbnail = document.createElement('div')
//     renderThumbnail()
// }

// addBtn.addEventListener('click', () => {
//     addClimb = !addClimb
//     if (addClimb) {
//         climbForm.style.display = 'block'
//         climbForm.addEventListener('submit', event => {
//             event.preventDefault()
//             postClimb(event.target)
//             })
//     } else {
//         climbForm.style.display = 'none'
//     }
// })
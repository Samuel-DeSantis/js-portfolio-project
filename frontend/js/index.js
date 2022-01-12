const CLIMBING_LOGGER_URL = "http://localhost:3000/climbs";
const newClimbForm = document.getElementById('newClimb');
const editClimbForm = document.getElementById('editClimb');

document.addEventListener('DOMContentLoaded', getClimbs())

newClimbForm.addEventListener('submit', addClimb)
editClimbForm.addEventListener('submit', editClimb)

// -----INDEX-----
async function getClimbs () {
    try {
        const response = await fetch(CLIMBING_LOGGER_URL);
        const json = await response.json();
        return recordedClimb(json);
    } catch (error) {
        return console.error(error);
    }
}

function recordedClimb(data) {
    for (let i = 0; i < data.length; i++) {

        let climbPost = 
        "<div class='col'>" +
           "<div class='card shadow-sm'>" +
                "<div class='card-body'>" +
                    `<p class="climbID${data[i].id}" hidden></p><p class='card-text'>Location: ${data[i].location}<br>Ascents: ${data[i].ascents}<br>Difficulty: ${data[i].difficulty}<br>Description: ${data[i].description}</p>` +
                    "<div class='d-flex justify-content-between align-items-center'>" +
                        "<div class='btn-group'>" +
                            `<button type='button' onclick='findClimb(${data[i].id})' class='btn btn-sm btn-outline-secondary' data-bs-toggle="modal" data-bs-target="#exampleEditModal" data-toggle="tooltip" data-placement="bottom">Edit</button>` +
                            `<button type='button' onclick='removeClimb(${data[i].id})' class='btn btn-sm btn-outline-secondary' data-toggle="tooltip" data-placement="bottom" title="Click to Remove this Climb">Remove</button>` +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

        document.getElementById("myClimbs").innerHTML += climbPost;
    }
}

// -----CREATE-----
function addClimb (event) {
    event.preventDefault()

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
    window.location.reload();
}

function climbParams () {
    const location = getFormValue('location')
    const difficulty = getFormValue('difficulty')
    const ascents = getFormValue('ascents')
    const description = getFormValue('description')

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

// -----EDIT-----
function findClimb (id) {
    fetch(CLIMBING_LOGGER_URL + `/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })    
    .then(result => result.json())
    .then(json => editClimbFormUpdate(json))
}

function editClimbFormUpdate (data) {
    document.getElementById('editID').innerHTML = data.id

    addPlaceholder('editLocation', data.location)
    addValue('editLocation', data.location)

    addPlaceholder('editDifficulty', data.difficulty)
    addValue('editDifficulty', data.difficulty)
    
    addPlaceholder('editAscents', data.ascents)
    addValue('editAscents', data.ascents)

    addPlaceholder('editDescription', data.description)
    addValue('editDescription', data.description)
}

function addPlaceholder (element, text) {
    document.getElementById(element).setAttribute('placeholder', text)
}

function addValue (element, text) {
    document.getElementById(element).setAttribute('value', text)
}

function editClimb (event) {
    event.preventDefault()

    const id = document.getElementById('editID').innerHTML

    fetch(CLIMBING_LOGGER_URL + `/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(editClimbParams())
    })
    .then(response => response.json())
    .then(result => console.log('Success:', result))
    .then(error => console.log('Error:', error))
    window.location.reload();
}

function editClimbParams () {
    const location = getFormValue('editLocation')
    const difficulty = getFormValue('editDifficulty')
    const ascents = getFormValue('editAscents')
    const description = getFormValue('editDescription')

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

function getFormValue (formID) {
    return document.getElementById(formID).value
}

// -----DELETE-----
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
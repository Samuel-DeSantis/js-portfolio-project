const CLIMBING_LOGGER_URL = "http://localhost:3000/climbs";
const newClimbForm = document.getElementById('newClimb')
let myData = 0

document.addEventListener('DOMContentLoaded', () => {
    getClimbs()
})

newClimbForm.addEventListener('submit', addClimb)

function getClimbs () {
    return fetch(CLIMBING_LOGGER_URL)
    .then(response => response.json())
    .then(json => recordedClimb(json))
    .catch(error => console.error(error))
}


function addClimb () {
    
    data = {
        climb: {
            location: event.target.dataset.location,
            difficulty: event.target.dataset.difficulty,
            ascents: event.target.dataset.ascents,
            description: event.target.dataset.description
        }
    }

    fetch(CLIMBING_LOGGER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
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
                    `<p class='card-text'>Location: ${data[i].location}<br>Ascents: ${data[i].ascents}<br>Difficulty: ${data[i].difficulty}<br>Description: ${data[i].description}</p>` +
                    "<div class='d-flex justify-content-between align-items-center'>" +
                        "<div class='btn-group'>" +
                            "<button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>" +
                            `<button type='button' onclick='removeClimb(${data[i].id})' class='btn btn-sm btn-outline-secondary' data-toggle="tooltip" data-placement="bottom" title="Click to Remove this Climb">Remove</button>` +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

        document.getElementById("myClimbs").innerHTML += climbPost;
    }
}

function removeClimb (id) {
    return fetch(CLIMBING_LOGGER_URL+`/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }}).then(()=>{window.location.reload()})
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
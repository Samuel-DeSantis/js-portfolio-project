const addBtn = document.querySelector('#new-climb-btn')
const climbForm = document.querySelector('.container')
let addClimb = false
let divCollect = document.querySelector('#climb-collection')

function myFunc() {
    let climbPost = 
    "<div class='col'>" +
       "<div class='card shadow-sm'>" +
            "<svg class='bd-placeholder-img card-img-top' width='100%' height='225' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder: Thumbnail' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='#55595c'/><text x='50%' y='50%' fill='#eceeef' dy='.3em'>Thumbnail</text></svg>" +
            "<div class='card-body'>" +
                "<p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
                "<div class='d-flex justify-content-between align-items-center'>" +
                    "<div class='btn-group'>" +
                        "<button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>" +
                    "</div>" +
                    "<small class='text-muted'>9 mins</small>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "</div>";

    document.getElementById("myClimbs").innerHTML += climbPost;

    // var para = document.createElement("P");
    // para.innerText = "This is a paragraph.";
    // document.getElementById("myClimbs").appendChild(para);
}

function getClimbs () {
    return fetch('http://localhost:3000/climbs')
    .then(response => response.json())
    .then(object => console.log(object))
}

function postClimb () {

}

function testRenderClimb () {
    let divCol = document.createElement('div').setAttribute('class', 'col')
    let divCardShadowSM = document.createElement('div').setAttribute('class', 'card shadow-sm')
    let divThumbnail = document.createElement('div')
    document.getElementById("myClimbs").appendChild(divCol);

}

function renderClimb () {
    let divCol = document.createElement('div').setAttribute('class', 'col')
    let divCardShadowSM = document.createElement('div').setAttribute('class', 'card shadow-sm')
    let divThumbnail = document.createElement('div')
    renderThumbnail()
}

addBtn.addEventListener('click', () => {
    addClimb = !addClimb
    if (addClimb) {
        climbForm.style.display = 'block'
        climbForm.addEventListener('submit', event => {
            event.preventDefault()
            postClimb(event.target)
            })
    } else {
        climbForm.style.display = 'none'
    }
})

// function renderThumbnail () {
//     divThumbnail.setAttribute('class', 'bd-placeholder-img card-img-top')
//     divThumbnail.setAttribute('width', '100%')
//     divThumbnail.setAttribute('height', '225')
//     divThumbnail.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
//     divThumbnail.setAttribute('role', 'img')
//     divThumbnail.setAttribute('aria-label', 'Placeholder: Thumbnail')
//     divThumbnail.setAttribute('preserveAspectRatio', 'xMidYMid slice')
//     divThumbnail.setAttribute('focusable', 'false')
//     divThumbnail.setAttribute('focusable', 'false')
// }
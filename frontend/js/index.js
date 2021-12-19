const addBtn = document.querySelector('#new-climb-btn')
const climbForm = document.querySelector('.container')
let addClimb = false
let divCollect = document.querySelector('#climb-collection')

function () {}

function getClimbs () {
    return fetch('http://localhost:3000/climbs')
    .then(response => response.json())
    .then(object => console.log(object))
}

function postClimb () {

}

function renderThumbnail () {
    divThumbnail.setAttribute('class', 'bd-placeholder-img card-img-top')
    divThumbnail.setAttribute('width', '100%')
    divThumbnail.setAttribute('height', '225')
    divThumbnail.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    divThumbnail.setAttribute('role', 'img')
    divThumbnail.setAttribute('aria-label', 'Placeholder: Thumbnail')
    divThumbnail.setAttribute('preserveAspectRatio', 'xMidYMid slice')
    divThumbnail.setAttribute('focusable', 'false')
    divThumbnail.setAttribute('focusable', 'false')
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


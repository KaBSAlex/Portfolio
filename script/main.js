const about = document.querySelector('#click_about')
const project = document.querySelector('#click_project')
const section = document.querySelectorAll('section')
const contact = document.querySelector('#click_contact')

//WHEN CLICK ON THE BUTTON
about.addEventListener('click', transition)
project.addEventListener('click', transition2)
contacta.addEventListener('click', transition3)

// MOVE TO SECTION ABOUT
function transition() {
    if (section[0]) {
        section[1].classList.remove('index_apper')
        section[1].classList.add('index_disappear')
        section[0].classList.remove('index_disappear')
        section[0].classList.add('index_appear')
        section[0].style.transition = 'all 0.5s'
    }    
}

// MOVE TO SECTION PROJECT
function transition2() {
    if (section[1]) {
        section[0].classList.remove('index_apper')
        section[0].classList.add('index_disappear')

        section[1].classList.remove('index_disappear')
        section[1].classList.add('index_appear')
        section[1].style.transition = 'all 0.5s'
    }
}

// MOVE TO SECTION CONTACT
function transition3() {
    if (section[1]) {
        section[0].classList.remove('index_apper')
        section[0].classList.add('index_disappear')

        section[1].classList.remove('index_disappear')
        section[1].classList.add('index_appear')
        section[2].style.transition = 'all 0.5s'
    }
}

// When I click on the btn, the section has to change
const disappear = document.querySelector('#click_about')

// section[0].classList.remove('index_appear')
// section[0].classList.add('index_disappear')

disappear.addEventListener('click', transition)

function transition() {
    const section = document.querySelectorAll('section')
    let nextElement = section++

    console.log(nextElement)
}


// When I click on the btn, the section has to change 
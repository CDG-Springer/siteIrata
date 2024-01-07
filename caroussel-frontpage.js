const slider = document.querySelector('.slider-frontpage')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

const sections = document.querySelectorAll('#slider-frontpage section')
const sectionsAmount = sections.length

var sectionIndex = 0





rightArrow.addEventListener('click', function() {
    if(sectionIndex < 9 ){
        sectionIndex = sectionIndex + 1
    } else {
        sectionIndex = 0;
    }

    slider.style.transform = 'translate(' + (sectionIndex) * -100 +'%)'
})

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0

    slider.style.transform = 'translate(' + (sectionIndex) * -10 +'%)'

})
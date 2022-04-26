const emojis = document.querySelectorAll('.emoji')
const slider = document.querySelector('.slider__content')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

console.log(emojis)

const moveRight = () => {
    if (slider.classList.contains('slide-to-center')) {
        slider.classList.remove('slide-to-left')
        slider.classList.remove('slide-to-center')
    }
    if (slider.classList.contains('slide-to-left')) {
        slider.classList.remove('slide-to-left')
        slider.classList.add('slide-to-center')
    }
    if (slider.classList.contains('slide-to-right')) {
        slider.classList.remove('slide-to-right')
        slider.classList.remove('slide-to-center')
    }
    slider.classList.remove('slide-to-left')
    slider.classList.add('slide-to-right')
}

const moveLeft = () => {
    if (slider.classList.contains('slide-to-center')) {
        slider.classList.remove('slide-to-right')
        slider.classList.remove('slide-to-center')
    }
    if (slider.classList.contains('slide-to-right')) {
        slider.classList.remove('slide-to-right')
        slider.classList.add('slide-to-center')
    }
    if (slider.classList.contains('slide-to-left')) {
        slider.classList.remove('slide-to-left')
        slider.classList.remove('slide-to-center')
    }
    slider.classList.remove('slide-to-right')
    slider.classList.add('slide-to-left')
}

prevBtn.addEventListener('click', moveLeft)
nextBtn.addEventListener('click', moveRight)
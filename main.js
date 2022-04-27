const emojis = document.querySelectorAll('.emoji')
const visibleEmojis = document.querySelector('.emojis__slider')
const slider = document.querySelector('.slider__content')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const result = document.querySelector('.result')
let emojisMap = new Map()

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

const render = () => {
    const emojiKeys = Array.from(emojisMap.values())
    result.replaceChildren(...emojiKeys)
}

const addEmoji = event => {
    const newP = document.createElement('p')
    newP.textContent = event.target.textContent
    newP.classList.add(...event.target.classList)

    if (event.target.classList.contains('emoji')) {
        emojisMap.set(event.target.textContent, newP)
    }
}

prevBtn.addEventListener('click', moveLeft)
nextBtn.addEventListener('click', moveRight)

visibleEmojis.addEventListener('click', event => {
    addEmoji(event)
    render()
})

result.addEventListener('click', event => {
    result.removeChild(event.target)
    emojisMap.delete(event.target.textContent)
})

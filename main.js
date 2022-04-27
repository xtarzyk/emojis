const visibleEmojis = document.querySelector('.emojis__slider')
const slider = document.querySelector('.slider__content')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const result = document.querySelector('.result')
const emojisSet = new Set()

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

const render = newEmoji => {
    if (!emojisSet.has(newEmoji.textContent)) {
        result.appendChild(newEmoji)
    }
}

const addEmoji = event => {
    const newP = document.createElement('p')

    newP.textContent = event.target.textContent
    newP.classList.add(...event.target.classList)

    if (event.target.classList.contains('emoji')) {
        render(newP)
        emojisSet.add(event.target.textContent)
    }
}

prevBtn.addEventListener('click', moveLeft)
nextBtn.addEventListener('click', moveRight)

visibleEmojis.addEventListener('click', event => addEmoji(event))

result.addEventListener('click', event => {
    result.removeChild(event.target)
    emojisSet.delete(event.target.textContent)
    console.log(emojisSet)
})

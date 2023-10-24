const sliderTop = () => {
    const slider = document.querySelector('.top-slider')
    const items = slider.querySelectorAll('.item')
    const dotsContainer = document.createElement('ul')
    dotsContainer.classList.add('slick-dots')
    slider.append(dotsContainer)
    let activeIndex = 0
    let interval

    items.forEach((elem, index) => {
        const dot = document.createElement('li')
        dot.addEventListener('click', () => {
            setActiveSlide(index)
        })
        dotsContainer.append(dot)
    })

    const dotsList = dotsContainer.querySelectorAll('li')
    const setActiveSlide = (index) => {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active')
                dotsList[i].classList.add('slick-active')
            } else {
                item.classList.remove('active')
                dotsList[i].classList.remove('slick-active')
            }
        })
        activeIndex = index
    }
    
    const nextSlide = () => {
        let nextIndex = activeIndex + 1
        if (nextIndex >= items.length) {
            nextIndex = 0
        }
        setActiveSlide(nextIndex)
    }

    const startInterval = () => {
        interval = setInterval(nextSlide, 3000)
    }
    const stopInterval = () => {
        clearInterval(interval)
    }
    startInterval()
    dotsContainer.addEventListener('mouseenter', stopInterval)
    dotsContainer.addEventListener('mouseleave', startInterval)
    setActiveSlide(activeIndex)
}

export default sliderTop
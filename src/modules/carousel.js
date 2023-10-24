const carousel = () => {
    const servicesBlock = document.querySelector('.services-elements')
    let servicesBlockElements = servicesBlock.querySelectorAll('.element')
    const arrowsBlock = document.querySelector('.services-section > .container > .services-arrow')
    let pos = 0;
    let movePos = 0;

    arrowsBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('arrow-left') && pos > 0) {
            pos--
            movePos += 400
            servicesBlockElements.forEach((elem) => {
                elem.style.transform = `translateX(${movePos}px)`
            })
    } else if (e.target.classList.contains('arrow-right') && pos < 3) {
        pos++
        movePos -= 400
        servicesBlockElements.forEach((elem) => {
            elem.style.transform = `translateX(${movePos}px)`
        })
    }
    })
}

export default carousel
const headerMenu = () => {
    const menuItems = document.querySelectorAll('.top-menu>ul>li>a')
    
    const scroll = (e) => {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        document.querySelector(href).scrollIntoView({behavior: 'smooth'})
    }

    menuItems.forEach((elem) => {
        elem.addEventListener('click', scroll)
    })
}

export default headerMenu
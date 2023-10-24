const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')

    accordeon.addEventListener('click', (e) => {
        if (e.target.classList.contains('title')) {
            const block = e.target.closest('.element')
            const content = block.querySelector('.element-content')
            if (!block.classList.contains('active')) {
                const activeBlock = accordeon.querySelector('.active')
                const activeBlockContent = activeBlock.querySelector('.element-content')
                activeBlock.classList.remove('active')
                activeBlockContent.style.display = 'none'
                block.classList.add('active')
                content.style.display = 'block'
            }
        }
    })
}

export default accordeon
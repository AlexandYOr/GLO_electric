const modal = () => {
    const modalForm = document.querySelector('.modal-callback')
    const overlay = document.querySelector('.modal-overlay')
    const modalBtn = document.querySelectorAll('.callback-btn')
    const closeBtn = modalForm.querySelector('.modal-close')

    console.log(modalBtn)
    
    const changeModalDisplay = (flag) => {
        const displayValue = flag ? 'block' : 'none'  
        modalForm.style.display = displayValue
        overlay.style.display = displayValue     
    }
    
    const onModalOpen = (e) => {
        e.preventDefault()
        changeModalDisplay(true)
        
    } 

    const onModalClose = (e) => {
        e.preventDefault()
        changeModalDisplay(false)
    }

    modalBtn.forEach((elem) => {
        elem.addEventListener('click', onModalOpen)
    })
    closeBtn.addEventListener('click', onModalClose)
    overlay.addEventListener('click', onModalClose)

}

export default modal
const modal = () => {
    const buttonServices = document.querySelector('.button-services')
    const modalForm = document.querySelector('.modal-callback')
    const overlay = document.querySelector('.modal-overlay')
    const modalBtn = document.querySelectorAll('.callback-btn')
    const closeBtn = modalForm.querySelector('.modal-close')
    const modalInputs = modalForm.querySelector('form')
    const textModallInput = modalInputs.querySelector('input[name=fio]')
    const phoneModallInput = modalInputs.querySelector('input[name=tel]')



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


    const displayStatus = (elem, statusText, status) => {
        elem.textContent = statusText
        elem.classList.add(status)
    }
    const sendData = async (e) => {

        e.preventDefault()
        const newElem = document.createElement('p')
        newElem.classList.add('status-sending')
        newElem.textContent = 'Идет отправка'
        modalInputs.append(newElem)

        const data = {};
        const formData = new FormData(modalInputs)
        formData.forEach((value, key) => data[key] = value);
        const payload = JSON.stringify(data);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        })
            if (!res.ok) {
                throw new Error(res.error)
            }
            displayStatus(newElem, 'Отправлено', 'status-ok')
        } catch (err) {
            displayStatus(newElem, 'Ошибка', 'status-failed')
            console.log(err)
        }
    }
    textModallInput.addEventListener('input', (e) => {e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ]+/g, "")})
    phoneModallInput.addEventListener('input', (e) => {e.target.value = e.target.value.replace(/[^+\d]/g, "")})
    modalInputs.addEventListener('submit', sendData)
    modalBtn.forEach((elem) => elem.addEventListener('click', onModalOpen))
    buttonServices.addEventListener('click', onModalOpen)
    closeBtn.addEventListener('click', onModalClose)
    overlay.addEventListener('click', onModalClose)

}

export default modal
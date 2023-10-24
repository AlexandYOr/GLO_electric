const scrollUp = () => {
    const arrowUp = document.querySelector('.up')
    const target = document.querySelector('.top-slider')
    arrowUp.style.display = 'none'


    const options = {
        threshold: 0.3
    };
     
    
    
    const displayArrow = function(entries, observer) {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) {
                arrowUp.style.display = 'block'
            } else {arrowUp.style.display = 'none'}
        })
    }
    const observer = new IntersectionObserver( displayArrow, options );
    observer.observe( target )


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    arrowUp.addEventListener('click', scrollToTop)
  }

export default scrollUp
const isscrolling=()=>{
    const headerE1 =document.querySelector('primary-header')
    let windowpostion=window.scrollY>250
    headerE1.classList.toggle('active',windowpostion)
}
window.addEventListener('scroll',isscrolling)
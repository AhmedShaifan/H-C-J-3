let navbar = document.querySelector('.navbar');
let menu = document.getElementById("menu-btn");


menu.onclick = function () {
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}



document.querySelectorAll('input[type="number]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.ariaValueMax.length > inputNumber.maxLength)
        inputNumber.value = inputNumber.value.slice(0, inputNumber.maxlength);
    };
});

AOS.init({
    duration: 400,
    delay: 200,
});
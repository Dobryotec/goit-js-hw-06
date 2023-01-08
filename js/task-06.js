const input = document.getElementById('validation-input');
const length = input.getAttribute('data-length');

function onInputBlur(event) {
    if ((event.currentTarget.value.length) === Number(length)){
        input.classList.add('valid') 
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}
input.addEventListener('blur', onInputBlur);
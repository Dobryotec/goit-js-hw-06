const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

function onInputChange (event) {
    if (!event.currentTarget.value) {
    outputEl.textContent = 'Anonymous';
    } else {
      outputEl.textContent = event.currentTarget.value;
    }
}
inputEl.addEventListener('input', onInputChange);



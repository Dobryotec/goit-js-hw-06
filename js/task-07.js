const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

function onTextChange (event) {
console.log(event.currentTarget.value);
text.style.fontSize = event.currentTarget.value + "px";
}
input.addEventListener('input', onTextChange);
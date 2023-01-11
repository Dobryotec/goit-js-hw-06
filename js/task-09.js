function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');
// const body = document.getElementsByTagName('body');
// console.log(body);


btn.addEventListener('click', OnBackGroundChange);
function OnBackGroundChange () {
document.body.style.backgroundColor = getRandomHexColor();
text.textContent = getRandomHexColor();

}

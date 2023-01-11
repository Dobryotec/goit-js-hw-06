function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.getElementById('controls');
const input = controls.firstElementChild;
const boxes = document.getElementById('boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');


function createBoxes(amount) {
  const elements = [];
for (let i= 0; i <= amount; i+=1) {
  const div = document.createElement('div');
  div.style.width = 30 * i +"px";
  div.style.height = 30 * i +"px";
  div.style.backgroundColor = getRandomHexColor();
  elements.push(div);
}
return elements;

}

btnCreate.addEventListener('click', () => {if (input.value >=1 && input.value <=100)
{boxes.append(...createBoxes(input.value))
} else {
  alert('Максимальна кількість = 100, мінімальна = 1. Змініть,будь ласка,кількість!')
}});

btnDestroy.addEventListener('click', () =>boxes.innerHTML='');
btnDestroy.addEventListener("click", () => (input.value=''));




const div1 = document.createElement('div');
div1.classList.add('red');

const div2 = document.createElement('div');
div2.classList.add('green');

const div3 = document.createElement('div');
div3.classList.add('blue');
div3.textContent = 'Я вложен';

div2.append(div3);
div1.append(div2);

console.log(div1);
console.log(div2);
console.log(div3);
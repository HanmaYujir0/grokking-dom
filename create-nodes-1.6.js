const div9 = document.createElement('div');


const ul6 = document.createElement('ul');



const li1 = document.createElement('li');
const li2 = document.createElement('li');


const intocode = document.createElement('a');
const instagram = document.createElement('a');

intocode.textContent = 'наш сайт';
intocode.href = 'https://intocode.ru';

instagram.textContent = 'Наш инстаграм';
instagram.href = 'https://www.instagram.com/';


document.body.prepend(div9);

div9.append(ul6);
ul6.append(li1, li2);
li2.append(instagram);
li1.append(intocode);

console.log(div9)
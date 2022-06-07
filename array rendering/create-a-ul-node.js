let arr = ["html", "css", "js"];
const ul = document.createElement('ul');
document.body.append(ul);

for (let i = 0; i < arr.length; i++) {
  let li = document.createElement('li');
  ul.append(li);
  li.append(arr[i]);
};


const render = (arr) => {
for (let i = 0; i < arr.length; i++) {
  let li = document.createElement('li');
  ul.append(li);
  li.append(arr[i]);
  document.body.prepend(ul);
};
};
console.log(render(arr));

const obj = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  },
];

const render1 = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a')
    ul.append(li);
    a.textContent = obj[i].name
    li.append(a);
    a.href = obj[i].url
    document.body.prepend(ul);
  };
  };
  console.log(render1(obj))
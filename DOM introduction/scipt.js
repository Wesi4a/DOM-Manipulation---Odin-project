const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('div');
content.textContent = 'This is the glorious text-content!';

const content1 = document.createElement('p');
content1.style.color = 'red';
content1.textContent = 'I`m red!'

const header = document.createElement('h3');
header.style.color = 'blue';
header.textContent = 'I`m a blue h3!'

const diva = document.createElement('div');
diva.setAttribute('style','background: pink; border: black');

const head1 = document.createElement('h3');
head1.textContent = 'i`m in a div';

diva.appendChild(head1);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO';

diva.appendChild(para2);



container.appendChild(content);
container.appendChild(content1);
container.appendChild(header);
container.appendChild(diva);

document.body.insertBefore(diva,null);
import './index.css';

const text = 'Cyberpunk 2077';
const root = document.getElementById('root');

const createDom = () => {
  const html = `
    <h1 class="title">${text}</h1>
    <div class="picture-tube"></div>
  `
  root.innerHTML = html;
}

const init = () => {
  createDom();
}

init();

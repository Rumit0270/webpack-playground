// import css in js. Added to the bundle using webpack
// css loader
import './image_viewer.css';

const image = document.createElement('img');
image.src =
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';
image.classList.add('my-random-img');

document.body.appendChild(image);

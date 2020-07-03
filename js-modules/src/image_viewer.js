// import css in js. Added to the bundle using webpack
// css loader
import './image_viewer.css';
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';

const image = document.createElement('img');
image.src =
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';
image.classList.add('my-random-img');

document.body.appendChild(image);

// add local images
// compressed image is added for small images from bundle
const smallImage = document.createElement('img');
smallImage.src = small;
smallImage.classList.add('small-img');

document.body.appendChild(smallImage);

const largeImage = document.createElement('img');
largeImage.src = big;
largeImage.classList.add('large-img');

document.body.appendChild(largeImage);

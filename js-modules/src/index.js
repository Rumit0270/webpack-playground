import sum from './sum';

const total = sum(10, 5);
console.log(total);

const newline = document.createElement('br');
const imageShowButton = document.createElement('button');
imageShowButton.innerText = 'Show Images';

imageShowButton.onclick = () => {
  // Code Splitting: Dynamic import of modules
  // Each dynamic import module will be places in its own chunk
  import('./image_viewer.js').then(({ default: showImages }) => {
    showImages();
  });
};

document.body.appendChild(imageShowButton);
document.body.appendChild(newline);

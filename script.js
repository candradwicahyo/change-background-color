window.onload = () => {
  
  // ketika tombol ditekan
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    // warna
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    // ubah warna background
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
  });
  
}
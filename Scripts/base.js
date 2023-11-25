
const ctx = document.getElementById("LogoCanvas").getContext("2d");

const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "Imagens/index.png";
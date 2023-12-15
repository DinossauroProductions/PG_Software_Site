
const ctx = document.getElementById("LogoCanvas").getContext("2d");

const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};

var altura = 1;

var pathSequence = window.location.pathname.split("/");

for(var i = 0; i < pathSequence.length; i++){

  if(pathSequence[i].includes("PG_Software_Site")){

    var altura = pathSequence.length - (i + 1);
    //console.log("pasta root encontrada, i = " + i + " e tamanho total = "+pathSequence.length + ", logo altura da pasta atual = "+altura);
  }
}

var base = "";

for(var i = 1; i < altura; i++){
  base = base + "../";
}

image.src = base + "Imagens/index.png";

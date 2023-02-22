//CARROUSEL IMAGENES//
let imagenes = ['curso1.jpg','curso2.jpg','curso3.jpg','curso4.jpg'];
let contador = 0;

function carrousel(direccion){
let direccion1 = direccion;

if(direccion1=='atras'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[imagenes.length-1-contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[0];
    contador=0;
  }
}

if(direccion1=='adelante'){
  if(contador==0){
    document.getElementById('imagen').src= imagenes[0];
    contador++;
  }else if (contador<imagenes.length-1) {
    document.getElementById('imagen').src= imagenes[contador];
    contador++;

  }else {
    document.getElementById('imagen').src= imagenes[imagenes.length-1];
    contador=0;
  }
}

}
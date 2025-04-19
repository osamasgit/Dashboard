/* este script es para cambiar el fondo cada 15 segundo 
como queremos ejecutarlo en todos los html lo guardamos 
en un script aparte y lo llamamos desde los html */
const body = document.body;

const randomNumber = (min, max) => Math.floor(Math.random()*(max - min +1)) + min;
let previousImgNumber;

const backgroundImages = () =>{
  const imgNumber = randomNumber(1, 12); // las img tienen el nombre de 1 a 12
    if (imgNumber != previousImgNumber) {
      body.style.backgroundImage = `url(./assets/imgBackground/${imgNumber}.jpg)`;
      body.style.backgroundSize = 'cover';
      body.style.transition = 'background-image 2s linear';
      body.style.backgroundAttachment = 'fixed';// evita que la imagen se mueva con el scroll
      document.body.style.backgroundPosition = 'center';
      previousImgNumber = imgNumber;
    } // no carga dos veces seguidas la misma imagen
  }
  
  setInterval(() => {
    backgroundImages()
  }, 15000)

  backgroundImages()
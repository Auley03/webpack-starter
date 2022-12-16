import '../css/components.css';
import webpacklogo from '../assets/imgs/webpack-logo.png';


export const greetings = (firstName) => {

  console.log('creating h1 tag');

  const h1 = document.createElement('h1');
  h1.innerText = `Hola, ${firstName}!!!`;

  document.body.append(h1);

  //Img
  // console.log(webpacklogo);
  // const img = document.createElement('img');
  // img.src = webpacklogo;
  // document.body.append(img);
}



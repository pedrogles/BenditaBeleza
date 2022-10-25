import cliente1 from './assets/services/beforeafter/cliente1.jpeg';
import cliente11 from './assets/services/beforeafter/cliente1.1.jpeg';
import cliente2 from './assets/services/beforeafter/cliente2.jpeg';
import cliente22 from './assets/services/beforeafter/cliente2.1.png';
import cliente3 from './assets/services/beforeafter/cliente3.jpg';
import cliente33 from './assets/services/beforeafter/cliente3.1.jpg';
import cliente4 from './assets/services/beforeafter/cliente4.jpg';
import cliente44 from './assets/services/beforeafter/cliente4.1.jpg';

const images = [cliente1, cliente11, cliente2, cliente22, cliente3, cliente33, cliente4, cliente44];

export const before1 = () => {
    if (document.querySelector('.image1')) {
        document.querySelector('.image1').setAttribute("src", images[1]);
    }
}
export const after1 = () => {
    if (document.querySelector('.image1')) {
        document.querySelector('.image1').setAttribute("src", images[0]);
    }
}
export const before2 = () => {
    if (document.querySelector('.image2')) {
        document.querySelector('.image2').setAttribute("src", images[3]);
    }
}
export const after2 = () => {
    if (document.querySelector('.image2')) {
        document.querySelector('.image2').setAttribute("src", images[2]);
    }
}
export const before3 = () => {
    if (document.querySelector('.image3')) {
        document.querySelector('.image3').setAttribute("src", images[5]);
    }
}
export const after3 = () => {
    if (document.querySelector('.image3')) {
        document.querySelector('.image3').setAttribute("src", images[4]);
    }
}
export const before4 = () => {
    if (document.querySelector('.image4')) {
        document.querySelector('.image4').setAttribute("src", images[7]);
    }
}
export const after4 = () => {
    if (document.querySelector('.image4')) {
        document.querySelector('.image4').setAttribute("src", images[6]);
    }
}

export default images;


const tiltedImageContainer = document.getElementById('tiltedImageContainer');
const tiltedImage = document.getElementById('tiltedImage');

tiltedImageContainer.addEventListener('mousemove', handleMouseMove);


function handleMouseMove(e) {


    const { clientX, clientY } = e;
    const { left, top, width, height } = tiltedImageContainer.getBoundingClientRect();
    const mouseX = clientX - left - width / 10;
    const mouseY = clientY - top - height / 10;

    tiltedImage.style.transform = `rotateX(${mouseY / 20}deg) rotateY(${-mouseX / 20}deg)`;
    
}


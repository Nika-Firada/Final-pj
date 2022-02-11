const cover = document.querySelector('.header-cover');
const images = [];
images[0] = 'my-pics/pp.jpg';
images[1] = 'my-pics/pp1.jpg';
images[2] = 'my-pics/pp2.jpg';
const slideTime = 5000;
let pic = 0;
function changeSlide(){
    cover.style.backgroundImage = `url('${images[pic]}')`;
    if (pic < images.length -1){
        pic++;
    }else{
        pic = 0
    }
    setTimeout(changeSlide, slideTime);
}
changeSlide();
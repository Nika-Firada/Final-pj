// FIRST SLIDER //
const slideImgs = document.querySelectorAll('.header-slider-img')
let index2 = 0;
// setInterval(() => {
//     nextSlide();
//     rendering();
//   }, 5000);
  
//   function rendering() {
//     slideimgs.forEach((slide, i) => {
//       if (index2 === i) {
//         slide.classList.add("active");
//       } else {
//         slide.classList.remove("active");
//       }
//     });
//   }
//   function nextSlide() {
//     if (slideimgs === slideimgs.length - 1) {
//         index2 = 0;
//     } else {
//         index2++;
//     }
//     rendering();
//   }
const activeImgSlide = n =>{
    for(slideImg of slideImgs){
        slideImg.classList.remove('active');
    }
    slideImgs[n].classList.add('active');
}
const nextImgSlide = () =>{
    if(index2 == slideImgs.length -1){
        index2 = 0;
        activeImgSlide(index2)
    }else{
        index2++;
        activeImgSlide(index2)
    }
}
setInterval(nextImgSlide, 5000);










// --- PROJECTS FILTER---- //
let indicator = document.querySelector('.categories-ul').children;
let main = document.querySelector('.works').children;
for(let i = 0; i < indicator.length; i++){
    indicator[i].onclick = function(){
        for(let x = 0; x < indicator.length; x++){
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');
        for(let z = 0; z < main.length; z++){
            main[z].style.transform = 'scale(0)';
            setTimeout(()=>{
                main[z].style.display = 'none';
            }, 500);
            if((main[z].getAttribute('data-category')==displayItems) || displayItems == 'all'){
                main[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    main[z].style.display = 'block';
                }, 500);
            }
        }
    }
}
// --- PROJECTS FILTER---- //

// second slider
const slides = document.querySelectorAll('.sl');
const dots = document.querySelectorAll('.dot');
let index = 0;

const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}


const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
dots.forEach((item, indexDot) =>{
    item.addEventListener('click', ()=>{
        index = indexDot;
        activeDot(index);
        activeSlide(index);
    })
})

// SKILLS----scroll
const skillSection = document.getElementById('skills-section');
const progressBars = document.querySelectorAll('.progress-bar');


function showProgress(){
    progressBars.forEach(progressBar =>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    progressBars.forEach(progressBar =>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 0;
        progressBar.style.width = 0;
    });
}
window.addEventListener('scroll', ()=>{
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight/1.8;
    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
}); 

// server connect
const userForm = document.getElementById('form_id');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userWebsite = document.getElementById('user_website');
const userMessage = document.getElementById('user_message');

userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const userData ={
        name: userName.value,
        email: userEmail.value,
        website: userWebsite.value,
        message: userMessage.value,
    }
    console.log(userData);
    createUser(userData);
});

function createUser(userData){
    const creatUserRequest = fetch('http://api.kesho.me/v1/user-test/contact',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json'
        }
    });
    creatUserRequest.then(response =>{
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error =>{
        console.log(error);
    });

}
const open=document.querySelector(".open");
const close=document.querySelector(".close");
const navItems=document.querySelector(".nav-items");

let images=[
  "images/desktop-image-hero-1.jpg", 
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg"
];

let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.querySelector(".js-background").style.backgroundImage = "url('" + images[currentImageIndex] + "')";
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.querySelector(".js-background").style.backgroundImage = "url('" + images[currentImageIndex] + "')";
}


/*
function updateContent(index){
  let words=[{
    h1:"Discover innovative ways to decorate",
    p:"  We provide unmatched quality, comfort, and     style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love."
  },
{
  h1:"We are available all across the globe",
  p:" With stores all over the world, it's easy for you to find furniture for your home or place ofbusiness. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us todav."
},
{
  h1: "Manufactured with the best materials",
  p:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.",
}];

let content=`
  <div class="discover swiper-slide">
            <h1> 
              ${
                words.h1
              }
            </h1>
            <p> 
              ${words.p}
            </p>
            <div class="shop-now">
              <p>shop now</p>
              <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#00000" fill-rule="nonzero"/></svg>
            </div>
          </div>
`
document.querySelector('.content')=content


}















function openNavItems(){
  open.addEventListener('click',()=>{
    navItems.style.display = "flex";
  })
};
function closeNavItems(){
  close.addEventListener('click',()=>{
    navItems.style.display= "none";
  });
};
*/




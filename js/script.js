window.addEventListener("scroll", function () {
    // if (scrollAmount <= this.window.scrollY) {
    //   document.querySelector("header").classList.add("open2");
    // } else {
    //   document.querySelector("header").classList.remove("open2");
    // }

    if(this.window.scrollY > 10){
        this.document.querySelector(".top__body").classList.add("open");
    }else{
        this.document.querySelector(".top__body").classList.remove("open");
    }

    // && window.innerWidth > 900
    if (this.window.scrollY < 1500) {
        const mv = document.querySelector(".mv__cover-slide");
        console.log(window.scrollY);
        mv.style.clipPath = "circle(" + window.scrollY / 10 + "% at 50% 0%)" ;
      // スマホ表示の場合の処理（画面幅が900px以下の場合）
      } else {
        // メインビジュアルのCSS（width）を変更する
        // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
        // $('#mainvisual img').css({
        //   'width': 100 - scroll/10  + '%'
        // });
      }
  });

const swiper = new Swiper('.swiper', {
effect:'coverflow',
initialSlide: 0,
shortSwipes: false,
longSwipes:false,

autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},

pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },

});

const els = document.querySelectorAll('.observe');
const cb = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        } else {
        }
    });
};
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};
const io = new IntersectionObserver(cb, options);
els.forEach(el => io.observe(el));


// const btn = document.querySelector(".btn");
// btn.addEventListener('click',function(){
//    document.querySelector('.contact__modal-bg').classList.toggle('hide');
// });

const cbtn = document.querySelector(".close-btn");
cbtn.addEventListener('click',function(){
   document.querySelector('.contact__modal-bg').classList.toggle('hide');
});


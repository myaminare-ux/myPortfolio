/* index.js */

// 전체 스와이퍼 연결
const mainSlide = new Swiper('.main_slide', {
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

// 3행-웹&앱 프로젝트 클릭 시 해당 슬라이드로 이동
const pj1 = document.querySelector('.pj1');
const pj2 = document.querySelector('.pj2');
const pj3 = document.querySelector('.pj3');

pj1.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(3, 500);
})
pj2.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(4, 500);
})
pj3.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(5, 500);
})

// 7행-그래픽 디자인(포스터) 스와이퍼 연결
const pstSlide = new Swiper('.pst_slide', {
    nested:true,
    direction:'horizontal',
    slidesPerView:4.8,
    spaceBetween:20,
    loop:true,
    speed:2000,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
});

// 7행-이미지 클릭 시 크게 나오게 하기
const posterWrap = document.querySelector('#posterWrap');
const bigPstPopup = document.querySelector('#bigPst_popup');
const bigPoster = document.querySelector('#bigPoster');

if (posterWrap) {
    posterWrap.addEventListener('click', (e)=>{
        if (e.target.classList.contains('js_popup_img')) {
            const imgSrc = e.target.getAttribute('src');
            bigPoster.setAttribute('src', imgSrc);
            bigPstPopup.classList.add('active');
        }
    });
}

if (bigPstPopup) {
    bigPstPopup.addEventListener('click', ()=>{
        bigPstPopup.classList.remove('active');
    });
}

// 8행-그래픽 디자인(상세 페이지) 스와이퍼 연결
const dtlSlide = new Swiper('.dtl_slide', {
    nested:true,
    direction:'horizontal',
    slidesPerView:4,
    spaceBetween:20,
    loop:false,
});

// 8행-이미지 클릭 시 크게 나오게 하기
const detailWrap = document.querySelector('#detailWrap');
const bigDtlPopup = document.querySelector('#bigDtl_popup');
const bigDetail = document.querySelector('#bigDetail');

if (detailWrap) {
    detailWrap.addEventListener('click', (e)=>{
        if (e.target.classList.contains('js_popup_img')) {
            const imgSrc = e.target.getAttribute('src');
            bigDetail.setAttribute('src', imgSrc);
            bigDtlPopup.classList.add('active');
        }
    });
}

if (bigDtlPopup) {
    bigDtlPopup.addEventListener('click', ()=>{
        bigDtlPopup.classList.remove('active');
    });
}

// 메뉴 클릭 시 메뉴 탭 숨기기, 나오기
const menuBtn = document.querySelector('.menu_btn');
const btnClick = document.querySelector('.btn_click');

btnClick.addEventListener('click', (e)=>{
    e.preventDefault();
    menuBtn.classList.toggle('hide');
})

// 메뉴 탭 클릭 시 해당 슬라이드 이동
const home = document.querySelector('.tab1');
const profile = document.querySelector('.tab2');
const pjAll = document.querySelector('.tab3');
const pjWeb = document.querySelector('.tab4');
const pjApp = document.querySelector('.tab5');
const pjGraphic = document.querySelector('.tab6');
const contact = document.querySelector('.tab7');

home.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(0, 500);
})
profile.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(1, 500);
})
pjAll.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(2, 500);
})
pjWeb.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(3, 500);
})
pjApp.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(5, 500);
})
pjGraphic.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(6, 500);
})
contact.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(8, 500);
})
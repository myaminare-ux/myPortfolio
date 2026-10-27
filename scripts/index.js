/* index.js */

// 전체 스와이퍼 연결
const mainSlide = new Swiper('.main_slide', {
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

// 8행-그래픽 디자인(포스터) 스와이퍼 연결
const pstSlide = new Swiper('.pst_slide', {
    nested:true,
    direction:'horizontal',
    slidesPerView:4.5,
    spaceBetween:20,
    loop:true,
    speed:2000,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
});
/* index.js */

// 전체 스와이퍼 연결
const mainSlide = new Swiper('.main_slide', {
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

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

// 8행-그래픽 디자인(상세 페이지) 스와이퍼 연결
const dtlSlide = new Swiper('.dtl_slide', {
    nested:true,
    direction:'horizontal',
    slidesPerView:4,
    spaceBetween:20,
    loop:false,
});
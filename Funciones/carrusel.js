const nextIcon = '<img src="imagenes/der.svg" alt="right">';
const prevIcon = '<img src="imagenes/izq.svg" alt="left">';

$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
navText: [
prevIcon,
nextIcon,
],
responsive:{
    0:{
        items:1
    },
    400:{
        items:1
    },
    765:{
        items:1
    }
}
})
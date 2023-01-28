const cartBtn = document.querySelector('.cart');
const cartShow = document.querySelector('.showcart')
const inputSearch = document.querySelector('.input-text')
const clearInput = document.querySelector('.clear-input')

cartBtn.addEventListener('mouseover',() => {
    cartShow.classList.add('active')
    cartShow.addEventListener('mouseover',() => {
        cartShow.classList.add('active')
    })
})
cartBtn.addEventListener('mouseout',() => {
    cartShow.classList.remove('active')
})



clearInput.onclick = () => {
    inputSearch.value = ''
    clearInput.classList.remove('active-inputclear')
}

inputSearch.addEventListener("input",() => {
    clearInput.classList.add('active-inputclear')
})

var btnadd = document.querySelector('.icon-add');
var btnminus = document.querySelector('.icon-minus');


// let num = 0;
// btnadd.onclick = () => {
//     counter += 1
//     var radio = document.getElementById('radio' + counter);
//     radio.checked = true;
//     if(counter >= 7) {
//         counter= 1 ;
//     }
//     console.log(counter)
// }
// btnminus.onclick = () => {
//     counter -= 1
//     var radio = document.getElementById('radio' + counter);
//     radio.checked = true;
//     if(counter >= 7) {
//         counter = 1;
//     } else {
//         counter = 7
//     }
//     console.log(counter)
// }



document.getElementById('radio1').checked = true
let counter = 2;
setInterval( () => {
    let radio = document.getElementById('radio' + counter);
    radio.checked = true;
    counter ++
    if(counter > 7) {
        counter = 1;
    }
},4000)


// thư viện slick
$('.img-ul-listitem').slick({
  infinite: false,
  slidesToShow: 10,
  slidesToScroll: 2,
//   variableWidth: true
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left arow-icon' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right arow-icon' aria-hidden='true'></i></button>"
});

$('.list-flash-sale-product').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  //   variableWidth: true
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left arow-icon' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right arow-icon' aria-hidden='true'></i></button>"
});
$('.shoppe-mall-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots:true,
});
$('.shoppe-mall-img-content-ul').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left arow-icon' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right arow-icon' aria-hidden='true'></i></button>"
});


var hihi = document.querySelector('.footer')
var ApiProduct = 'http://localhost:3000/product';
fetch(ApiProduct)
.then( function(res) {
    return res.json()
})
.then ( function(products) {
    console.log(products)
    var hehe = products.map((product) => {
        console.log(product.name)
    }
);
    

})





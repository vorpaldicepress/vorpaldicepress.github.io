---
---
{% include /js/lunr.min.js %}

{% include /js/search-logic.js %}

$(window).on("load", function() {
  $("body").removeClass("preload");

  initSearch();
});

$(document).ready(function(){
  let slider = $(".slider");

  var sortedSlides = slider.find(".feature-item").sort(function(a,b){
    return +a.dataset.age - +b.dataset.age;
  });
  //append a maximum of 10 elements to the featured slider, with newest features taking precedence
  sortedSlides.slice(0, Math.min(10, sortedSlides.length)).appendTo(slider);


  slider.slick({
    dots: false,
    infinite: true,
    speed: 250,
    cssEase: 'ease-out',
    variableWidth: true,
    touchMove: true,
    swipeToSlide: true,
    draggable: true,
    initialSlide: -1,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          centerMode: false
        }
      },
      {

        breakpoint: 425,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerMode: false
        }
      }
    ]
  });

  let blogs = document.getElementsByClassName('blog');
  let reviews = document.getElementsByClassName('review');


  [...blogs].forEach((ele) => {
    var content = ele.getElementsByClassName("blog-content")[0];
    if ((content.scrollHeight > content.clientHeight) || (content.scrollWidth > content.clientWidth))
      ele.classList.add("show-more");
  });
  [...reviews].forEach((ele) => {
    var content = ele.getElementsByClassName("review-content")[0];
    if ((content.scrollHeight > content.clientHeight) || (content.scrollWidth > content.clientWidth))
      ele.classList.add("show-more");
  });

});

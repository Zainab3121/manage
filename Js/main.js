
$(".testimonial_content").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: true,
    arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

  // AOS.init();

const navOpen = document.querySelector(".ri-menu-line")
const navClose = document.querySelector(".ri-close-fill")
const nav = document.querySelector("nav ul")

navOpen.addEventListener("click", function(){
  nav.style.right = "0%"
})

navClose.addEventListener("click", function(){
    nav.style.right = "-200%"
  })

//   document.getElementById("")
//   document.getElementsByClassName

const navLinks = document.querySelectorAll("nav ul li")
console.log(navLinks)
navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        nav.style.right = "-200%"
    })
})


// declaration of const.
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
 
//listening for click event on the nextButton

nextButton.addEventListener("click", function () { // When the button is clicked, we get the width value of one slide
  const slideWidth = slide.clientWidth;  
  // I then increase the scrollLeft property of the slidescontainer with the slideWidth
  slidesContainer.scrollLeft += slideWidth;
});

 
//listening for click event on the previousButton
prevButton.addEventListener("click", function () {
  const slideWidth = slide.clientWidth;
  // I then increase the scrollLeft property of the slidescontainer with the slideWidth
  slidesContainer.scrollLeft -= slideWidth;
});


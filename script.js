const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % slides.length;
}

// Change slide every 5 seconds
setInterval(showSlide, 5000);


  document.getElementById('learn-more-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Learn More';
    }
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// Scroll to team section when clicking on "Explore Our Team" button
document.querySelector('.btn-explore').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
});






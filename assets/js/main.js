document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add animation to data cards
  const dataCards = document.querySelectorAll('.data-card');
  
  dataCards.forEach((card, index) => {
    // Add a slight delay to each card for a staggered effect
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 100);
  });
});
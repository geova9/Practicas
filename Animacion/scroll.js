
const cards = document.querySelectorAll('.scroll-card');

// primera visible desde el inicio
if (cards.length > 0) {
  cards[0].classList.add('active');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // reset
      cards.forEach(card => {
        card.classList.remove('active', 'prev');
      });

      // actual
      entry.target.classList.add('active');

      // anteriores
      let prev = entry.target.previousElementSibling;
      while (prev) {
        if (prev.classList.contains('scroll-card')) {
          prev.classList.add('prev');
        }
        prev = prev.previousElementSibling;
      }
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));

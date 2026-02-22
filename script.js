ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1000,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.photo1', { origin: 'left', delay: 100 });
ScrollReveal().reveal('.photo2', { origin: 'right', delay: 400 });
ScrollReveal().reveal('.photo3', { origin: 'bottom', delay: 800 });
ScrollReveal().reveal('.photo4', { scale: 0.7, delay: 1500 });
ScrollReveal().reveal('.photo5', { rotate: { x: 20, z: 10 }, delay: 2000 });


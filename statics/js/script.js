document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const btn = nav.querySelector('.hamburger');

  btn.addEventListener('click', () => {
    nav.classList.toggle('active');

    // animate hamburger into X
    btn.querySelectorAll('span').forEach((bar, i) => {
      if (nav.classList.contains('active')) {
        if (i === 0) bar.style.transform = 'rotate(45deg) translateY(6px)';
        if (i === 1) bar.style.opacity = '0';
        if (i === 2) bar.style.transform = 'rotate(-45deg) translateY(-6px)';
      } else {
        bar.style.transform = '';
        bar.style.opacity = '';
      }
    });
  });
});

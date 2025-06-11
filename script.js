// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Download button network request
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(() => alert('Kayna!'))
    .catch(() => alert('Waa33!'));
});

// 1. Fade-in .stat-box on scroll
const stats = document.querySelectorAll('.stat-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.3
});

stats.forEach(stat => {
  stat.classList.add('hidden');
  observer.observe(stat);
});

// 2. Mobile Menu Toggle
const toggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// 3. Download App Button Alert
const downloadBtn = document.getElementById('downloadBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    alert("Redirecting to App Store...");
  });

}


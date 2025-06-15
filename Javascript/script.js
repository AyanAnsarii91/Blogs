// Toggle hamburger menu
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
  document.getElementById('main-nav').classList.toggle('active');
});

// Fade-out transition on internal links
document.querySelectorAll('a').forEach(link => {
  if (link.href && link.hostname === window.location.hostname) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.href;
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location = target;
      }, 500);
    });
  }
})


  const text = "Explore the Universe with Us"; // Change text as needed
  const typingTarget = document.querySelector('.hero-content h1');
  
  function typeEffect(index = 0) {
  if (index < text.length) {
  typingTarget.textContent += text.charAt(index);
  setTimeout(() => typeEffect(index + 1), 100);
  }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
  typingTarget.textContent = "";
  typeEffect();
  });
  
  
// Search functionality: Filter featured articles by title or excerpt
const searchInput = document.getElementById('searchInput');
const articleGrid = document.getElementById('articleGrid');
const clearSearch = document.getElementById('clearSearch');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const articles = articleGrid.querySelectorAll('.article-card');
  articles.forEach(article => {
    const title = article.querySelector('.article-title a').textContent.toLowerCase();
    const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();
    if (title.includes(query) || excerpt.includes(query)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
  clearSearch.style.display = query.length ? 'block' : 'none';
});

clearSearch.addEventListener('click', function() {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
});
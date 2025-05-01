// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const menuToggleBtn = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#menu');
    const contentBtn = document.querySelector('#load-content');
    const contentContainer = document.querySelector('#content');
    const scrollBtn = document.querySelector('#scroll-top');
  
    // Toggle menu visibility
    menuToggleBtn?.addEventListener('click', () => {
      menu?.classList.toggle('visible');
    });
  
    // Load dynamic content
    contentBtn?.addEventListener('click', () => {
      const newContent = `
        <h2>New Dynamic Content</h2>
        <p>This content was loaded dynamically at ${new Date().toLocaleTimeString()}.</p>
      `;
      if (contentContainer) {
        contentContainer.innerHTML = newContent;
      }
    });
  
    // Smooth scroll to top when button is clicked
    scrollBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Optional: Add hover effect or other interactivity
    // Example: Change button text on hover
    if (contentBtn) {
      contentBtn.addEventListener('mouseenter', () => {
        contentBtn.textContent = 'Click to load content!';
      });
      contentBtn.addEventListener('mouseleave', () => {
        contentBtn.textContent = 'Load Content';
      });
    }
  });
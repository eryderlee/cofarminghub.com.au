document.addEventListener('DOMContentLoaded', () => {
    const resizableContainers = document.querySelectorAll('.resizable-container');
  
    resizableContainers.forEach(container => {
      const element = container.querySelector('.resizable');
      const handle = container.querySelector('.resize-handle');
  
      // Load saved sizes and positions from localStorage
      const savedHeight = localStorage.getItem(`${element.id}-height`);
      const savedWidth = localStorage.getItem(`${element.id}-width`);
      const savedTop = localStorage.getItem(`${element.id}-top`);
      const savedLeft = localStorage.getItem(`${element.id}-left`);
      if (savedHeight) {
        container.style.height = `${savedHeight}px`;
      }
      if (savedWidth) {
        container.style.width = `${savedWidth}px`;
      }
      if (savedTop) {
        container.style.top = `${savedTop}px`;
      }
      if (savedLeft) {
        container.style.left = `${savedLeft}px`;
      }
  
      // Resize functionality
      handle.addEventListener('mousedown', initResize);
  
      function initResize(e) {
        e.preventDefault();
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      }
  
      function resize(e) {
        const newHeight = e.clientY - container.getBoundingClientRect().top;
        const newWidth = e.clientX - container.getBoundingClientRect().left;
        container.style.height = `${newHeight}px`;
        container.style.width = `${newWidth}px`;
      }
  
      function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        // Save the new height and width to localStorage
        localStorage.setItem(`${element.id}-height`, container.offsetHeight);
        localStorage.setItem(`${element.id}-width`, container.offsetWidth);
        // Log the new values
        console.log(`Element: ${element.id}, Height: ${container.offsetHeight}px, Width: ${container.offsetWidth}px`);
      }
  
      // Drag functionality
      container.addEventListener('mousedown', initDrag);
  
      function initDrag(e) {
        if (e.target === handle) return; // Prevent drag if resizing
        e.preventDefault();
        const startX = e.clientX - container.offsetLeft;
        const startY = e.clientY - container.offsetTop;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
  
        function drag(e) {
          container.style.left = `${e.clientX - startX}px`;
          container.style.top = `${e.clientY - startY}px`;
        }
  
        function stopDrag() {
          document.removeEventListener('mousemove', drag);
          document.removeEventListener('mouseup', stopDrag);
          // Save the new position to localStorage
          localStorage.setItem(`${element.id}-top`, container.offsetTop);
          localStorage.setItem(`${element.id}-left`, container.offsetLeft);
          // Log the new values
          console.log(`Element: ${element.id}, Top: ${container.offsetTop}px, Left: ${container.offsetLeft}px`);
        }
      }
    });
  });
  
function createNavBar() {
    const navBarHTML = `
        <header>
            <div>
                <div class="container">
                    <div class="logo">
                        <img src="../images/CoFarming hub logo.webp" alt="Co-Farming Hub Logo">
                    </div>
                    <div class="dark-mode-switch">
                        <label class="switch" for="darkModeToggle">
                            <input type="checkbox" id="darkModeToggle" />
                            <div class="sunmoon">
                                <div class="darkside"></div>
                            </div>
                            <div class="border"></div>
                            <div class="clouds">
                                <img src="../images/cloud_1.svg" alt="" class="cloud cloud-1" />
                                <img src="../images/cloud_2.svg" alt="" class="cloud cloud-2" />
                                <img src="../images/cloud_3.svg" alt="" class="cloud cloud-3" />
                                <img src="../images/cloud_4.svg" alt="" class="cloud cloud-4" />
                                <img src="../images/stars.svg" alt="" class="stars" />
                            </div>
                        </label>
                    </div>
                    <nav>
                        <button id="nav-toggle" aria-label="Toggle navigation">
                            <i class="fa-solid fa-plus icon" style="color: #1fac0f;"></i>
                        </button>
                        <ul id="nav-menu" class="expanded">
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="pages/about.html">About Us</a></li>
                            <li><a href="pages/projects.html">Projects</a></li>
                            <li><a href="pages/products.html">Products</a></li>
                            <li><a href="pages/partners.html">Partners</a></li>
                            <li><a href="pages/news.html">News & Events</a></li>
                            <li><a href="pages/contact.html">Contact Us</a></li>
                           <li>
                        
                    </li>
                        
                    </nav>
                </div>
            </div>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navBarHTML);
    
    // Add event listeners for the toggle functionality
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const icon = navToggle.querySelector('.icon');

    navToggle.addEventListener('click', function() {
        if (navMenu.classList.contains('expanded')) {
            navMenu.classList.remove('expanded');
            navMenu.classList.add('collapsed');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-x');
            icon.classList.add('spin');
            icon.style.color = '#ff6666'; // Change the color when the menu is expanded
        } else {
            navMenu.classList.remove('collapsed');
            navMenu.classList.add('expanded');
            icon.classList.remove('fa-x');
            icon.classList.add('fa-plus');
            icon.classList.add('reverse-spin');
            icon.style.color = '#1fac0f'; // Change the color back when the menu is collapsed
        }
    });
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    // Ensure dark mode is disabled initially if not set in local storage
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', 'disabled');
    } 
    // Check local storage for dark mode state and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        body.classList.toggle('dark-mode');
        darkModeToggle.checked = true; // If you're using a checkbox for toggle
    }
    
    // Function to enable dark mode
    const enableDarkMode = () => {
        body.classList.add('dark');
        
        localStorage.setItem('darkMode', 'enabled');
    };
    
    // Function to disable dark mode
    const disableDarkMode = () => {
        body.classList.remove('dark');
        
        localStorage.setItem('darkMode', 'disabled');
    };
    
    // Event listener for the toggle
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark');
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    

    // Listen for the end of the animation and reset the classes
    icon.addEventListener('animationend', function() {
        if (icon.classList.contains('spin')) {
            icon.classList.remove('spin');
        }
        if (icon.classList.contains('reverse-spin')) {
            icon.classList.remove('reverse-spin');
        }
    });
}


// Call the function to create the navigation bar after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    createNavBar();
});





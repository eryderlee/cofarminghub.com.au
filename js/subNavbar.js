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
                 <div class="cover">
                    <button id="nav-open" aria-label="Open menu">
                        <i class="fa-solid fa-bars" style="color: #1fac0f;"></i>
                    </button>
                </div>
                    <nav id="nav" class="collapsed">
                        <div class="nav-header">
                            <button id="nav-close" aria-label="Close menu">
                                <i class="fa-solid fa-x" style="color:rgb(172, 15, 15);"></i>
                            
                            </button>
                    <div class="dark-mode-switch-mobile">
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
                </div>
                    <ul id="nav-menu" class="expanded">
                        
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="partners.html">Partners</a></li>
                        <li><a href="news.html">News & Events</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        
                           
                        
                 </ul>   
                </nav>
            </div>
        </div>
    </header>
    <div id="nav-overlay" class="hidden"></div>
`;
    
  document.body.insertAdjacentHTML('afterbegin', navBarHTML);

    const nav      = document.getElementById('nav');
    const openBtn  = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');
    const overlay  = document.getElementById('nav-overlay');
  
    function openNav() {
      nav.classList.replace('collapsed', 'expanded');
      overlay.classList.add('active');
      overlay.classList.remove('hidden');
    }
  
    function closeNav() {
      nav.classList.replace('expanded', 'collapsed');
      overlay.classList.remove('active');
      // keep it in the DOM so we can re-activate later
    }
  
    openBtn.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
  
    // also close if you click the dimmed area
    overlay.addEventListener('click', closeNav);
  

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

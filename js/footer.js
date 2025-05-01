function createFooter() {
    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h4>Contact Us</h4>
                <p>Address: 461 Point Cook Rd, Point Cook VIC 3030</p>
                <p>Phone: None</p>
                <p>Email: eden@ryderlee.me</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../pages/about.html">About Us</a></li>
                    <li><a href="../pages/projects.html">Projects</a></li>
                    <li><a href="../pages/products.html">Products</a></li>
                    <li><a href="../pages/partners.html">Partners</a></li>
                    <li><a href="../pages/news.html">News and Events</a></li>
                    <li><a href="../pages/contact.html">Contact Us</a></li>
                    <li><a href="../pages/faq.html">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-media">
                    <a href="https://facebook.com/Co-FarmingHub" target="_blank">
                        <img src="../images/icons8-facebook-48.png" alt="Facebook" class="social-icon">
                    </a>
                    <a href="https://twitter.com/Co-FarmingHub" target="_blank">
                        <img src="../images/icons8-twitter-48.png" alt="Twitter" class="social-icon">
                    </a>
                    <a href="https://instagram.com/Co-FarmingHub" target="_blank">
                        <img src="../images/icons8-instagram-48.png" alt="Instagram" class="social-icon">
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Legal</h4>
                    <ul>
                        <li><a href="#" id="privacy-link">Privacy Policy</a></li>
                        <li><a href="#" id="terms-link">Terms of Service</a></li>
                        <li><a href="#" id="cookie-link">Cookie Policy</a></li>
                    </ul>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Co-Farming Hub. All rights reserved. ABN: 73 619 371 470</p>
                <p>Website fully designed and developed by <a href="https://www.linkedin.com/in/eden-lee-6016a4300/" target="_blank" class="eden-link" style = "color: lightblue">Eden Lee</a> ❤️</p>
            </div>
<!-- Privacy Policy Modal -->
<div id="privacy-modal" class="modal">
    <div class="modal-content">
        <span class="close" data-modal="privacy-modal">&times;</span>
        <h2>Privacy Policy</h2>
        <p>
            At Co-Farming Hub, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>
        <h3>Information Collection:</h3>
        <p>
            We may collect personal information such as your name, email address, and other contact details when you interact with our website or services.
        </p>
        <h3>Use of Information:</h3>
        <p>
            Your information is used to provide and improve our services, respond to your inquiries, and send you relevant updates.
        </p>
        <h3>Data Security:</h3>
        <p>
            We implement appropriate security measures to protect your personal information from unauthorized access and use.
        </p>
        <h3>Third-Party Disclosure:</h3>
        <p>
            We do not sell or trade your personal information to third parties. We may share information with trusted partners who assist us in operating our website and providing our services.
        </p>
        <h3>Your Consent:</h3>
        <p>
            By using our website, you consent to our Privacy Policy.
        </p>
        <p>
            For any questions or concerns about our Privacy Policy, please contact us at eden@ryderlee.me.
        </p>
    </div>
</div>

<!-- Terms of Service Modal -->
<div id="terms-modal" class="modal">
    <div class="modal-content">
        <span class="close" data-modal="terms-modal">&times;</span>
        <h2>Terms of Service</h2>
        <p>
            Welcome to Co-Farming Hub! These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to comply with these terms.
        </p>
        <h3>Use of Services:</h3>
        <p>
            You agree to use our services only for lawful purposes and in a manner consistent with our policies and guidelines.
        </p>
        <h3>User Conduct:</h3>
        <p>
            You are responsible for all activities that occur under your account. You agree not to engage in any activity that disrupts or interferes with our services.
        </p>
        <h3>Intellectual Property:</h3>
        <p>
            All content on our website, including text, graphics, logos, and images, is the property of Co-Farming Hub and is protected by intellectual property laws.
        </p>
        <h3>Termination:</h3>
        <p>
            We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users.
        </p>
        <h3>Changes to Terms:</h3>
        <p>
            We may update these Terms of Service from time to time. Your continued use of our services after any changes constitutes your acceptance of the new terms.
        </p>
        <p>
            For any questions or concerns about our Terms of Service, please contact us at eden@ryderlee.me.
        </p>
    </div>
</div>

<!-- Cookie Policy Modal -->
<div id="cookie-modal" class="modal">
    <div class="modal-content">
        <span class="close" data-modal="cookie-modal">&times;</span>
        <h2>Cookie Policy</h2>
        <p>
            Co-Farming Hub uses cookies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
        </p>
        <h3>What Are Cookies:</h3>
        <p>
            Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience by remembering your preferences and recognizing you on subsequent visits.
        </p>
        <h3>Types of Cookies We Use:</h3>
        <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, allowing us to improve its performance.</li>
            <li><strong>Functionality Cookies:</strong> These cookies remember your preferences and settings to provide a more personalized experience.</li>
        </ul>
        <h3>Managing Cookies:</h3>
        <p>
            You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
        </p>
        <h3>Third-Party Cookies:</h3>
        <p>
            We may also use third-party cookies for analytics and advertising purposes. These cookies are subject to the respective privacy policies of these third parties.
        </p>
        <p>
            For any questions or concerns about our Cookie Policy, please contact us at eden@ryderlee.me.
        </p>
    </div>
</div>

        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // JavaScript for the modals
    // Get the modal elements
    var privacyModal = document.getElementById('privacy-modal');
    var termsModal = document.getElementById('terms-modal');
    var cookieModal = document.getElementById('cookie-modal');

    // Get the link elements
    var privacyLink = document.getElementById('privacy-link');
    var termsLink = document.getElementById('terms-link');
    var cookieLink = document.getElementById('cookie-link');

    // Get the <span> elements that close the modal
    var closeButtons = document.getElementsByClassName('close');

    // When the user clicks on the link, open the respective modal and prevent default link action
    privacyLink.onclick = function(event) {
        event.preventDefault();
        privacyModal.style.display = 'block';
    }
    termsLink.onclick = function(event) {
        event.preventDefault();
        termsModal.style.display = 'block';
    }
    cookieLink.onclick = function(event) {
        event.preventDefault();
        cookieModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            var modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == privacyModal) {
            privacyModal.style.display = 'none';
        }
        if (event.target == termsModal) {
            termsModal.style.display = 'none';
        }
        if (event.target == cookieModal) {
            cookieModal.style.display = 'none';
        }
    }
}
createFooter();

<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-sections">
          <div class="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/courses">Courses</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>
          <div class="footer-section contact-info">
            <h3>Contact Us</h3>
            <p><i class="fas fa-map-marker-alt"></i> 123 Learning Street, Education City, EC 12345</p>
            <p><i class="fas fa-phone"></i> +1 234 567 890</p>
            <p><i class="fas fa-envelope"></i> info@example.com</p>
          </div>
          <div class="footer-section newsletter-signup">
            <h3>Subscribe to Our Newsletter</h3>
            <form @submit.prevent="subscribe">
              <input type="email" v-model="email" placeholder="Enter your email" required />
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div class="footer-section social-media">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 MySite. All rights reserved.</p>
          <div class="footer-bottom-links">
            <router-link to="/privacy-policy">Privacy Policy</router-link> | 
            <router-link to="/terms-of-service">Terms of Service</router-link>
          </div>
          <button class="btn btn-secondary back-to-top" @click="scrollToTop">
            <i class="fas fa-chevron-up"></i> Back to Top
          </button>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      subscribe() {
        // Implement newsletter subscription logic
        console.log('Subscribed with email:', this.email);
        this.email = '';
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 40px 20px;
    color: #333;
  }
  
  .footer .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-sections {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
  .footer-section h3 {
    margin-bottom: 15px;
    font-size: 1.25rem;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .footer-section ul li a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }
  
  .footer-section form {
    display: flex;
  }
  
  .footer-section form input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .footer-section form button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .footer-section form button:hover {
    background-color: #0056b3;
  }
  
  .social-icons a {
    color: #333;
    margin-right: 15px;
    font-size: 1.25rem;
    transition: color 0.3s;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    margin-bottom: 10px;
  }
  
  .footer-bottom-links {
    margin-bottom: 10px;
  }
  
  .footer-bottom-links a {
    color: #007bff;
    text-decoration: none;
    margin: 0 5px;
  }
  
  .footer-bottom-links a:hover {
    text-decoration: underline;
  }
  
  .back-to-top {
    display: inline-flex;
    align-items: center;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .back-to-top:hover {
    background-color: #0056b3;
  }
  
  .back-to-top i {
    margin-right: 5px;
  }
  </style>
  
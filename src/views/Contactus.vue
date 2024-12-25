<template>
    <section class="contact-page">
      <div class="contact-hero">
        <h1>Get In Touch With Us</h1>
        <p>We would love to hear from you! Please fill out the form below or contact us via phone or email.</p>
      </div>
  
      <div class="contact-info">
        <div class="info-block">
          <h2>Our Address</h2>
          <p>1234 Learning St, Knowledge City, Education World, 56789</p>
        </div>
        <div class="info-block">
          <h2>Phone</h2>
          <p>+1 123 456 7890</p>
        </div>
        <div class="info-block">
          <h2>Email</h2>
          <p>info@coursesite.com</p>
        </div>
      </div>
  
      <div class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" v-model="form.message" rows="6" required></textarea>
          </div>
  
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
  
      <div class="social-media">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic (e.g., send data to server)
        alert(`Thank you, ${this.form.name}, for reaching out!`);
        this.resetForm();
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  <style scoped>
  /* General Styles */
  body {
    font-family: 'Helvetica', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .contact-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
  }
  
  /* Hero Section */
  .contact-hero {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 100px 20px;
  }
  
  .contact-hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
  
  .contact-hero p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  /* Contact Info Section */
  .contact-info {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }
  
  .info-block {
    text-align: center;
    flex: 1;
    margin: 0 10px;
  }
  
  .info-block h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  .info-block p {
    font-size: 1.2rem;
    color: #555;
  }
  
  /* Contact Form Section */
  .contact-form {
    background-color: #f9f9f9;
    padding: 40px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
  }
  
  .contact-form h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333;
  }
  
  .contact-form form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-size: 1.2rem;
    margin-bottom: 10px;
    display: block;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
  
  .submit-btn {
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 1.2rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  /* Social Media Section */
  .social-media {
    text-align: center;
    margin-top: 40px;
  }
  
  .social-media h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-icons a {
    font-size: 2rem;
    color: #007bff;
    text-decoration: none;
  }
  
  .social-icons a:hover {
    color: #0056b3;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .contact-info {
      flex-direction: column;
      text-align: center;
    }
  
    .info-block {
      margin-bottom: 20px;
    }
  
    .contact-form form {
      width: 100%;
    }
  }
</style>
  
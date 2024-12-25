<template>
    <section class="newsletter-signup">
      <div class="signup-content">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter to receive the latest course updates, special offers, and more.</p>
        <form @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NewsletterSignup',
    data() {
      return {
        email: '',
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      subscribe() {
        // Simple validation
        if (!this.email) {
          this.errorMessage = 'Please enter a valid email address.';
          return;
        }
        this.successMessage = 'Thank you for subscribing!';
        this.errorMessage = '';
        this.email = ''; // Clear the input field
        // Here you would typically handle the form submission, e.g., send data to a server
      },
    },
  };
  </script>
  
  <style scoped>
  .newsletter-signup {
    padding: 60px 20px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .signup-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .newsletter-signup h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .newsletter-signup p {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    margin-bottom: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 15px 30px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: #28a745;
    margin-top: 10px;
  }
  
  .error-message {
    color: #dc3545;
    margin-top: 10px;
  }
  </style>
  
<template>
    <section class="call-to-action">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Join our community today and start your learning journey with expert-guided courses and valuable resources.</p>
        <router-link to="/signup" class="cta-button">Sign Up Now</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CallToAction',
  };
  </script>
  
  <style scoped>
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    background: linear-gradient(to right, #42b983, #007a7a);
    color: white;
    text-align: center;
  }
  
  .cta-content {
    max-width: 800px;
  }
  
  .call-to-action h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .call-to-action p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 15px 30px;
    font-size: 1.2rem;
    color: rgb(34, 32, 32);
    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #42b983;
    color: white;
  }
  </style>
  
<template>
    <div class="auth-page">
      <h1>Log In</h1>
      <form @submit.prevent="logIn" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
        </div>
  
        <button  type="submit" class="submit-btn">Log In</button>
      </form>
  
      <router-link to="/signup" class="switch-link">Don't have an account? Sign Up</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      logIn() {
        // Logic to handle log-in (e.g., authentication API call)
         alert(`Logged in as ${this.email}`);
        this.$router.push('/Dashboard'); // Redirect after login
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-page {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f7f7f7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 2em;
    color: #2c3e50;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-size: 1.1em;
    margin-bottom: 5px;
    text-align: left;
    display: block;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #bdc3c7;
  }
  
  input:focus {
    outline: none;
    border-color: #42b983;
  }
  
  .submit-btn {
    background-color: #42b983;
    color: white;
    padding: 12px 20px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #3da773;
  }
  
  .switch-link {
    display: block;
    margin-top: 15px;
    font-size: 1.1em;
    color: #2980b9;
    text-decoration: none;
  }
  
  .switch-link:hover {
    color: #3498db;
  }
  </style>
  
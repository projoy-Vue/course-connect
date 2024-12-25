<template>
    <div class="auth-page">
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp" class="auth-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" placeholder="Enter your name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm your password" required />
        </div>
  
        <button type="submit" class="submit-btn">Sign Up</button>
      </form>
  
      <router-link to="/login" class="switch-link">Already have an account? Log In</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      signUp() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
          this.$router.push('/dashboard');
        }
        // Logic to handle sign-up (e.g., API call or state update)
        alert(`Account created for ${this.name}`);
        this.$router.push('/login'); // Redirect to login after sign-up
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
  
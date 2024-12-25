<template>
    <div class="enroll-page">
      <h1>Enroll in {{ courseTitle }}</h1>
      
      <form @submit.prevent="submitEnrollment" class="enroll-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" placeholder="Enter your name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
  
        <div class="form-group">
          <label for="course">Course</label>
          <input v-model="courseTitle" type="text" id="course"  readonly />
        </div>
  
        <button type="submit" class="submit-btn">Submit Enrollment</button>
      </form>
  
      <router-link to="/courses" class="back-link">← Back to Courses</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        courseTitle: ''
      }
    },
    created() {
      this.courseTitle = this.$route.params.courseTitle; // Fetch course title from route params
    },
    methods: {
      submitEnrollment() {
        // Logic to process enrollment (could be sending data to API or state management)
        if (this.name && this.email) {
          alert(`Successfully enrolled in ${this.courseTitle}, ${this.name}!`);
          this.$router.push('/courses'); // Redirect to courses page after submission
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  .enroll-page {
    min-height: 100vh;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 2em;
    color: #2c3e50;
  }
  
  .enroll-form {
    margin-top: 30px;
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
  
  .back-link {
    display: block;
    margin-top: 20px;
    text-decoration: none;
    color: #2980b9;
    font-size: 1.2em;
    transition: color 0.3s ease;
  }
  
  .back-link:hover {
    color: #3498db;
  }
  </style>
  
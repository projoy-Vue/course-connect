<template>
    <div class="course-overview">
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <div class="course-meta">
        <div class="rating">
          <span>Rating: {{ course.rating }} ⭐</span>
        </div>
        <div class="price">
          <span>Price: ${{ course.price }}</span>
        </div>
        <button @click="enrollCourse">Enroll Now</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseOverview',
    props: {
      course: Object,
    },
    methods: {
      enrollCourse() {
        alert('You have enrolled in the course!');
      },
    },
  };
  </script>
  
  <style scoped>
  .course-overview {
    margin-bottom: 20px;
  }
  
  .course-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
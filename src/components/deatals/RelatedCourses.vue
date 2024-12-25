<template>
    <div class="related-courses">
      <h2>Related Courses</h2>
      <div class="course-card" v-for="course in relatedCourses" :key="course.id">
        <h3>{{ course.title }}</h3>
        <p>{{ course.price }} USD</p>
        <button @click="$emit('view-course', course.id)">View Details</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RelatedCourses',
    props: {
      relatedCourses: Array,
    },
  };
  </script>
  
  <style scoped>
  .related-courses {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .course-card {
    border: 1px solid #ccc;
    padding: 20px;
    width: 200px;
    text-align: center;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
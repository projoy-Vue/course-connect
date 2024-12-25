<template>
    <div class="instructor-info">
      <h2>Instructor: {{ instructor.name }}</h2>
      <p>{{ instructor.bio }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InstructorInfo',
    props: {
      instructor: Object,
    },
  };
  </script>
  
  <style scoped>
  .instructor-info {
    margin-bottom: 20px;
  }
  </style>
  
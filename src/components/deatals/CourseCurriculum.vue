<template>
    <div class="course-curriculum">
      <h2>Course Curriculum</h2>
      <ul>
        <li v-for="(module, index) in curriculum" :key="index">
          {{ index + 1 }}. {{ module.title }} - {{ module.duration }} minutes
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseCurriculum',
    props: {
      curriculum: Array,
    },
  };
  </script>
  
  <style scoped>
  .course-curriculum {
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  </style>
  
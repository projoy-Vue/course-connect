<template>
    <section class="featured-courses">
      <h2>Featured Courses</h2>
      <div class="courses-grid">
        <div v-for="course in courses" :key="course.id" class="course-card">
          <img :src="course.image" :alt="course.title" class="course-image" />
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <button @click="viewCourse(course.id)" class="course-button">View Course</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeaturedCourses',
    data() {
      return {
        courses: [
          {
            id: 1,
            title: 'Introduction to Vue.js',
            description: 'Learn the basics of Vue.js and start building dynamic web applications.',
            image: '@/assets/vue-course.jpg', // Replace with actual image paths
          },
          {
            id: 2,
            title: 'Advanced JavaScript',
            description: 'Deep dive into advanced JavaScript concepts and best practices.',
            image: '@/assets/js-course.jpg',
          },
          {
            id: 3,
            title: 'Web Design Fundamentals',
            description: 'Master the fundamentals of web design and create beautiful, user-friendly websites.',
            image: '@/assets/design-course.jpg',
          },
          // Add more courses as needed
        ],
      };
    },
    methods: {
      viewCourse(courseId) {
        this.$router.push(`/courses/${courseId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .featured-courses {
    background: #fff;
    padding: 50px 20px;
    text-align: center;
  }
  
  .featured-courses h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .course-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .course-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .course-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .course-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .course-description {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .course-button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .course-button:hover {
    background-color: #358a67;
  }
  </style>
  
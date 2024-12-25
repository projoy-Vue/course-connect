<!-- src/views/CourseDetail.vue -->
<template>
  <div class="course-detail">
    <div class="course-header">
      <h1>{{ course.title }}</h1>
      <p class="course-description">{{ course.description }}</p>
    </div>

    <div class="course-info">
      <div class="course-content">
        <h2>Course Content</h2>
        <p>{{ course.content }}</p>
      </div>

      <div class="course-meta">
        <p><strong>Duration:</strong> {{ course.duration }}</p>
        <p><strong>Prerequisites:</strong> {{ course.prerequisites }}</p>
        <p><strong>Instructor:</strong> {{ course.instructor }}</p>
        <p><strong>Rating:</strong> {{ course.rating }} / 5</p>

        <!-- <button @click="enrollInCourse" :disabled="isEnrolled" class="enroll-btn">
          {{ isEnrolled ? 'Enrolled' : 'Enroll Now' }}
        </button> -->

        <router-link :to="{ name: 'enroll', params: { courseTitle: course.title } }" class="enroll-btn">
          Enroll Now
        </router-link>

      </div>
    </div>

    <router-link to="/courses" class="back-link">← Back to Courses</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {},
      isEnrolled: false
    }
  },
  created() {
    const courseId = this.$route.params.id;
    const courses = [
      {
        id: 1,
        title: 'Vue.js Basics',
        description: 'Learn Vue.js basics and start building interactive web apps.',
        content: 'Course content covers Vue instance, data binding, event handling, and components.',
        duration: '3 hours',
        prerequisites: 'Basic HTML, CSS, and JavaScript knowledge',
        instructor: 'John Doe',
        rating: 4.8
      },
      {
        id: 2,
        title: 'Vue Router',
        description: 'Master Vue Router to build powerful single-page applications.',
        content: 'Advanced routing techniques, route guards, lazy loading routes, and nested routes.',
        duration: '2.5 hours',
        prerequisites: 'Vue.js Basics',
        instructor: 'Jane Smith',
        rating: 4.7
      },
      {
        id: 3,
        title: 'Vuex State Management',
        description: 'Learn Vuex, the state management pattern + library for Vue.js apps.',
        content: 'State management concepts, mutations, actions, getters, and modules.',
        duration: '4 hours',
        prerequisites: 'Vue.js Basics, Vue Router knowledge',
        instructor: 'Mark Lee',
        rating: 4.6
      },
      {
        id: 4,
        title: 'Vue.js Testing',
        description: 'Learn how to write unit and integration tests for Vue.js components.',
        content: 'Testing tools like Jest, Vue Test Utils, and best practices for testing Vue components.',
        duration: '2 hours',
        prerequisites: 'Basic Vue.js knowledge',
        instructor: 'Emily Davis',
        rating: 4.5
      },
      {
        id: 5,
        title: 'Vue.js Composition API',
        description: 'Learn how to use the Vue.js Composition API for more flexible and reusable logic.',
        content: 'Setup, usage of reactive properties, and integrating Composition API with Vue Router and Vuex.',
        duration: '3.5 hours',
        prerequisites: 'Vue.js Basics',
        instructor: 'Michael Chen',
        rating: 4.9
      },
      {
        id: 6,
        title: 'Vue.js DevTools',
        description: 'Learn how to use Vue.js DevTools to debug and enhance your applications.',
        content: 'Features of Vue DevTools, analyzing Vue components, performance tracking, and state management debugging.',
        duration: '1.5 hours',
        prerequisites: 'Basic Vue.js knowledge',
        instructor: 'Sarah Wilson',
        rating: 4.6
      }
    ];

    this.course = courses.find(course => course.id === parseInt(courseId));
  },
  methods: {
    enrollInCourse() {
      // Simulate enrollment logic
      this.isEnrolled = true;
    }
  }
}
</script>

<style scoped>
/* Overall Container */
.course-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Course Header */
.course-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #2c3e50;
}

.course-description {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #7f8c8d;
}

/* Course Info */
.course-info {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

/* Course Content Section */
.course-content {
  flex: 1;
  min-width: 280px;
}

.course-content h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

.course-content p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #34495e;
}

/* Course Meta Section */
.course-meta {
  flex: 1;
  min-width: 280px;
}

.course-meta p {
  font-size: 1.1em;
  margin: 8px 0;
}

.course-meta p strong {
  color: #2c3e50;
}

.enroll-btn {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.enroll-btn:hover {
  background-color: #3da773;
}

.enroll-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

/* Back Link */
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

/* Responsive Design */
@media (max-width: 768px) {
  .course-info {
    flex-direction: column;
  }

  .course-header h1 {
    font-size: 2em;
  }

  .course-content h2 {
    font-size: 1.5em;
  }

  .enroll-btn {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .course-header h1 {
    font-size: 1.8em;
  }

  .course-description {
    font-size: 1em;
  }

  .course-content h2 {
    font-size: 1.3em;
  }
}
</style>

<template>
  <div class="card-item">
    <div class="course-card">
      <img :src="course.image" alt="Course Image" class="course-image" />
      <div class="course-content">
        <h3 class="course-title">{{ course.title }}</h3>
        <p class="course-instructor">By {{ course.instructor }}</p>
        <p class="course-description">{{ course.description }}</p>
        <div class="course-meta">
          <span class="course-rating">⭐ {{ course.rating }}</span>
          <span class="course-price">{{ formattedPrice }}</span>
        </div>
      </div>
      <button @click="$router.push({ name: 'CourseDetail', params: { id: course.id } })" class="view-details"> View
        Details</button>
      <!-- praginastion -->

    </div>
  </div>
</template>

<script>
// import router from '@/router';

export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return this.course.price === 0
        ? 'Free'
        : `$${this.course.price.toFixed(2)}`;
    },

  },
};
</script>

<style scoped>
.course-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.course-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.course-content {
  padding: 16px;
  flex-grow: 1;
}

.course-title {
  font-size: 1.2em;
  margin: 0 0 8px;
}

.course-instructor {
  color: #757575;
  margin: 0 0 12px;
}

.course-description {
  font-size: 0.9em;
  color: #424242;
  margin-bottom: 16px;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-rating {
  font-size: 0.9em;
  color: #ffb400;
}

.course-price {
  font-size: 1em;
  font-weight: bold;
}

 .view-details {
    width: 100%;
    padding: 12px;
    background-color: #3FB683;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1em;
    border-radius: 0 0 8px 8px;
  }

  .view-details:hover {
    background-color: #358a67;
  }</style>
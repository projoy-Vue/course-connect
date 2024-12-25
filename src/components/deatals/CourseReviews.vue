<template>
    <div class="course-reviews">
      <h2>Reviews</h2>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <strong>{{ review.user }}</strong> - Rating: {{ review.rating }} ⭐
          <p>{{ review.comment }}</p>
        </li>
      </ul>
  
      <div class="review-form">
        <h3>Leave a Review</h3>
        <input v-model="newReview.user" placeholder="Your Name" />
        <select v-model="newReview.rating">
          <option value="5">5 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="3">3 ⭐</option>
          <option value="2">2 ⭐</option>
          <option value="1">1 ⭐</option>
        </select>
        <textarea v-model="newReview.comment" placeholder="Your Comment"></textarea>
        <button @click="submitReview">Submit Review</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseReviews',
    data() {
      return {
        newReview: {
          user: '',
          rating: 5,
          comment: '',
        },
      };
    },
    props: {
      reviews: Array,
    },
    methods: {
      submitReview() {
        if (this.newReview.user && this.newReview.comment) {
          this.$emit('add-review', this.newReview);
          this.newReview = { user: '', rating: 5, comment: '' }; // reset form
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .course-reviews {
    margin-bottom: 20px;
  }
  
  .review-form {
    margin-top: 20px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
  }
  
  button {
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  
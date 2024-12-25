<template>
    <div class="sort-courses">
      <label for="sort">Sort by:</label>
      <select v-model="selectedSort" @change="sortCourses">
        <option value="default">Default</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="ratingHighToLow">Rating: High to Low</option>
        <option value="titleAZ">Title: A to Z</option>
        <option value="titleZA">Title: Z to A</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SortCourses',
    data() {
      return {
        selectedSort: 'default',
      };
    },
    methods: {
      sortCourses() {
        this.$emit('sort-courses', this.selectedSort);
      },
    },
  };
  </script>
  
  <style scoped>
  .sort-courses {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  
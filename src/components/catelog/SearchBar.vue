<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for courses..."
        @input="onSearch"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      onSearch() {
        this.$emit('search-courses', this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin-bottom: 16px;
  }
  
  .search-bar input {
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  .search-bar input:focus {
    border-color: #007a7a;
  }

  </style>
  
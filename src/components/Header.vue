<template>
    <header class="header">
      <div class="container">
        <div class="logo">
          <router-link to="/">BrandLogo</router-link>
        </div>
  
        <nav class="nav-links">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/courses" class="nav-item">Courses</router-link>
          <div class="dropdown">
            <router-link to="/courses" class="nav-item">Courses</router-link>
            <div class="mega-menu">
              <div class="menu-column">
                <h4>Categories</h4>
                <router-link to="/category/design">Design</router-link>
                <router-link to="/category/development">Development</router-link>
                <router-link to="/category/marketing">Marketing</router-link>
              </div>
              <div class="menu-column">
                <h4>Featured Courses</h4>
                <router-link to="/course/ux-design">UX Design</router-link>
                <router-link to="/course/frontend-dev">Frontend Development</router-link>
                <router-link to="/course/digital-marketing">Digital Marketing</router-link>
              </div>
            </div>
          </div>
          <router-link to="/about" class="nav-item">About Us</router-link>
          <router-link to="/blog" class="nav-item">Blog</router-link>
          <router-link to="/contact" class="nav-item">Contact Us</router-link>
        </nav>
  
        <div class="search-bar">
          <input type="text" placeholder="Search courses..." />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
  
        <div class="cta-button">
          <router-link to="/signup" class="cta">Sign Up</router-link>
          <!-- <router-link to="/login" class="cta">Log In</router-link> -->

        </div>
        <!-- <router-link to="/dashboard" class="">dashbord</router-link> -->

        <div class="mobile-menu">
          <button @click="toggleMobileMenu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
  
      <div class="mobile-nav-links" v-if="isMobileMenuOpen">
        <router-link to="/" class="mobile-nav-item">Home</router-link>
        <router-link to="/courses" class="mobile-nav-item">Courses</router-link>
        <router-link to="/about" class="mobile-nav-item">About Us</router-link>
        <router-link to="/blog" class="mobile-nav-item">Blog</router-link>
        <router-link to="/contact" class="mobile-nav-item">Contact Us</router-link>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* General header styling */
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
  }
  
  .logo a {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
  
  /* Navigation links styling */
  .nav-links {
    display: flex;
    align-items: center;
  }
  
  .nav-item {
    margin-left: 20px;
    font-size: 1rem;
    color: #333;
    text-decoration: none;
    padding: 10px;
    position: relative;
  }
  
  .nav-item:hover,
  .nav-item:focus {
    color: #007bff;
  }
  
  /* Dropdown & Mega Menu styling */
  .dropdown {
    position: relative;
  }
  
  .mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
    flex-direction: row;
    padding: 20px;
    z-index: 10;
  }
  
  .dropdown:hover .mega-menu {
    display: flex;
  }
  
  .menu-column {
    margin-right: 30px;
    width: 200px;
  }
  
  .menu-column h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .menu-column a {
    display: block;
    margin-bottom: 10px;
    font-size: 0.95rem;
    color: #333;
    text-decoration: none;
  }
  
  .menu-column a:hover {
    color: #007bff;
  }
  
  /* Search bar styling */
  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 0 4px 4px 0;
  }
  
  .search-bar input {
    padding: 8px 10px;
    outline: none;
    border: none;
    flex: 1;
    font-size: 1rem;
  }
  
  .search-bar button {
    padding: 8px 19px;
    border: none;
    background-color: #3FB683;
    border-radius: 0 4px 4px 0;
    color: white;
    cursor: pointer;
    
  }
  
  .search-bar button i {
    font-size: 1rem;
  }
  
  /* Call to Action button styling */
  .cta-button .cta {
    padding: 10px 20px;
    background-color: #3FB683;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .cta-button .cta:hover {
    background-color: #358a67;
  }
  
  /* Mobile Menu styling */
  .mobile-menu button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
  }
  
  .mobile-nav-item {
    padding: 10px 0;
    font-size: 1.2rem;
    text-decoration: none;
    color: #333;
  }
  
  .mobile-nav-item:hover {
    color: #007bff;
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .nav-links,
    .search-bar,
    .cta-button {
      display: none;
    }

    .mobile-menu {
      display: block;
    }
  
    .mobile-nav-links {
      display: flex;
    }
  }
  
  @media (min-width: 769px) {
    .mobile-menu,
    .mobile-nav-links {
      display: none;
    }
  }
  </style>
  
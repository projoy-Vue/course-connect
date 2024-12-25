<template>
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="headline">Elevate Your Learning Experience</h1>
        <p class="subheadline">Join thousands of learners on their journey to mastering new skills.</p>
        <div class="cta-buttons">
          <button @click="navigateToCourses" class="cta-button">Browse Courses</button>
          <button @click="scrollToAbout" class="cta-button secondary">Learn More</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    methods: {
      navigateToCourses() {
        this.$router.push('/courses');
      },
      scrollToAbout() {
        const aboutSection = document.getElementById('about-us');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
  </script>
  
  <style scoped>
  .hero-section {
    font-family:'Inter', sans-serif; ;
    position: relative;
    background: linear-gradient(130deg, #1a1a1a, #5cacda);
    /* background-image: url('https://picsum.photos/536/354');  */
    /* Use a background video instead if preferred */
    background-size: cover;
    background-position: center;
    padding: 150px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    height: 300px; /* Full screen height */
    overflow: hidden;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for better text visibility */
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
  }
  
  .headline {
    font-size: calc(2.5rem + 1vw); /* Responsive font size */
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeIn 1s forwards ease-in-out; /* Fade-in animation */
  }
  
  .subheadline {
    font-size: calc(1.25rem + 0.5vw); /* Responsive font size */
    margin-bottom: 40px;
    opacity: 0;
    animation: fadeIn 1.5s forwards ease-in-out;
  }
  
  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  
  .cta-button {
    background-color: #42b983;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .cta-button:hover {
    background-color: #358a67;
    transform: translateY(-3px);
  }
  
  .cta-button.secondary {
    background-color: transparent;
    border: 2px solid #42b983;
  }
  
  .cta-button.secondary:hover {
    background-color: #42b983;
    color: white;
  }
  
  /* Fade-in animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .hero-section {
      padding: 100px 20px;
    }
    .headline {
      font-size: calc(2rem + 1vw);
    }
    .subheadline {
      font-size: calc(1rem + 0.5vw);
    }
  }
  </style>
  
<template>
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step" v-for="step in steps" :key="step.id">
          <img :src="step.icon" :alt="step.title" class="step-icon" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HowItWorks',
    data() {
      return {
        steps: [
          {
            id: 1,
            title: 'Sign Up',
            description: 'Create an account to start exploring our courses and learning resources.',
            icon: '@/assets/signup-icon.png', // Replace with your actual icon path
          },
          {
            id: 2,
            title: 'Browse Courses',
            description: 'Browse our extensive catalog to find courses that suit your interests and goals.',
            icon: '@/assets/browse-icon.png',
          },
          {
            id: 3,
            title: 'Enroll and Learn',
            description: 'Enroll in your chosen courses and start learning at your own pace.',
            icon: '@/assets/enroll-icon.png',
          },
          {
            id: 4,
            title: 'Get Certified',
            description: 'Complete the course and receive a certification to showcase your new skills.',
            icon: '@/assets/certify-icon.png',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .how-it-works {
    padding: 60px 20px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .how-it-works h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .step {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 250px;
    text-align: center;
    transition: all 0.3s ease;
  }
  .step:hover{
    transform: scale(1.1);

  }
  .step-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  
  .step h3 {
    font-size: 1.5rem;
    margin: 15px 0;
  }
  
  .step p {
    font-size: 1rem;
  }
  /* Media queries */
  @media screen and (max-width: 768px) {
    .steps {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
  }
  </style>
  
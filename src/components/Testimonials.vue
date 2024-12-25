<template>
    <section class="testimonials">
      <h2>What Our Users Say</h2>
      <div class="testimonial-cards">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <img :src="testimonial.photo" :alt="testimonial.name" class="user-photo" />
          <blockquote>
            <p>{{ testimonial.quote }}</p>
            <footer>
              <cite>{{ testimonial.name }}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Testimonials',
    data() {
      return {
        testimonials: [
          {
            id: 1,
            name: 'John Doe',
            quote: 'This platform has transformed my learning experience! The courses are top-notch and the support is exceptional.',
            photo: '@/assets/john-doe.jpg', // Replace with your actual photo path
          },
          {
            id: 2,
            name: 'Jane Smith',
            quote: 'I’ve gained so much knowledge from these courses. The content is clear and the instructors are very knowledgeable.',
            photo: '@/assets/jane-smith.jpg',
          },
          {
            id: 3,
            name: 'Alice Johnson',
            quote: 'The interactive content and real-world examples made learning enjoyable and effective.',
            photo: '@/assets/alice-johnson.jpg',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 60px 20px;
    background-color: #ffffff;
    text-align: center;
  }
  
  .testimonials h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .testimonial-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .testimonial-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
    transition: all 0.3s ease;
  }
  .testimonial-card:hover{
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .testimonial-card p {
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .user-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  blockquote {
    font-style: italic;
    margin: 20px 0;
  }
  
  footer {
    margin-top: 10px;
  }
  
  cite {
    font-weight: bold;
  }
  </style>
  
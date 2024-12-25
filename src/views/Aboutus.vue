<template>
    <div class="about-us">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>About Us</h1>
          <p>Empowering learners through quality education and dynamic courses.</p>
          <button @click="scrollToMission">Learn More</button>
        </div>
      </section>
  
      <!-- Mission Section -->
      <section id="mission" class="mission">
        <div class="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make education accessible and enjoyable for everyone by offering high-quality courses designed by experts. We believe in empowering individuals with the knowledge and skills they need to succeed.
          </p>
        </div>
      </section>
  
      <!-- Interactive Instructor Section -->
      <section class="instructors">
        <div class="container">
          <h2>Meet Our Instructors</h2>
          <div class="instructor-grid">
            <div
              v-for="instructor in instructors"
              :key="instructor.id"
              class="instructor-card"
              @mouseenter="instructor.hover = true"
              @mouseleave="instructor.hover = false"
            >
              <img :src="instructor.photo" :alt="instructor.name" />
              <div class="instructor-info" :class="{ hovered: instructor.hover }">
                <h3>{{ instructor.name }}</h3>
                <p>{{ instructor.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="faq">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <h3 @click="toggleFaq(faq.id)" class="faq-question">
              {{ faq.question }}
              <span>{{ faq.open ? '−' : '+' }}</span>
            </h3>
            <p v-if="faq.open" class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to <a href="mailto:info@coursewebsite.com">email us</a>.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        instructors: [
          {
            id: 1,
            name: "Jane Doe",
            photo: "https://via.placeholder.com/150",
            bio: "Jane is a web development expert with over 10 years of experience.",
            hover: false,
          },
          {
            id: 2,
            name: "John Smith",
            photo: "https://via.placeholder.com/150",
            bio: "John specializes in data science and has a passion for teaching.",
            hover: false,
          },
        ],
        faqs: [
          { id: 1, question: "What courses do you offer?", answer: "We offer courses in web development, data science, AI, and more.", open: false },
          { id: 2, question: "How can I enroll?", answer: "You can enroll by signing up on our website and choosing a course.", open: false },
          {
        id: 3,
        question: "Do I get a certificate after completing a course?",
        answer: "Yes! Upon successful completion of a course, you’ll receive a certificate of achievement that you can download and share.",
        open: false,
      },
      {
        id: 4,
        question: "Can I access the course content after completion?",
        answer: "Absolutely! Once you’ve enrolled in a course, you’ll have lifetime access to the content, including all future updates.",
        open: false,
      },
      {
        id: 5,
        question: "What payment methods are accepted?",
        answer: "We accept various payment methods, including credit cards, PayPal, and bank transfers. All transactions are secured for your safety.",
        open: false,
      },
      {
        id: 6,
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a full refund within 30 days of purchase.",
        open: false,
      },
      {
        id: 7,
        question: "Do I need any prior knowledge to take the courses?",
        answer: "Some courses require basic knowledge, while others are designed for beginners. Each course description will specify the prerequisites, if any.",
        open: false,
      },
      {
        id: 8,
        question: "Are the courses self-paced?",
        answer: "Yes, all our courses are self-paced, so you can learn at your own convenience and on your own schedule.",
        open: false,
      },
      {
        id: 9,
        question: "Can I interact with the instructors?",
        answer: "Yes! Our instructors are available to answer questions and provide feedback via the course discussion boards or scheduled live sessions.",
        open: false,
      },
      {
        id: 10,
        question: "Are there any group discounts for teams or organizations?",
        answer: "Yes, we offer special discounts for teams, organizations, and educational institutions. Please contact us for more details.",
        open: false,
      },
      {
        id: 11,
        question: "How often are new courses added?",
        answer: "We continuously update our course catalog with new content. You can subscribe to our newsletter to stay informed about new releases.",
        open: false,
      },
      {
        id: 12,
        question: "Do you offer any free courses?",
        answer: "Yes! We have a variety of free introductory courses that you can enroll in to get a feel for the platform and the learning experience.",
        open: false,
      }
        ],
      };
    },
    methods: {
      scrollToMission() {
        const missionSection = document.getElementById("mission");
        missionSection.scrollIntoView({ behavior: "smooth" });
      },
      toggleFaq(id) {
        this.faqs = this.faqs.map(faq => {
          if (faq.id === id) faq.open = !faq.open;
          return faq;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Styling */
  .about-us {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }
  
  /* Hero Section */
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x400') center/cover no-repeat;
    height: 50vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero-content {
    max-width: 600px;
  }
  .hero h1 {
    font-size: 3rem;
  }
  .hero button {
    padding: 10px 20px;
    font-size: 1.1rem;
    background-color: #ff5722;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .hero button:hover {
    background-color: #e64a19;
  }
  
  /* Mission Section */
  .mission {
    padding: 40px 0;
    text-align: center;
  }
  .mission .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Instructor Section */
  .instructors .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }
  .instructor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  .instructor-card {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s;
    cursor: pointer;
  }
  .instructor-card:hover {
    transform: scale(1.05);
  }
  .instructor-info {
    transition: background-color 0.3s, color 0.3s;
  }
  .instructor-info.hovered {
    background-color: #ff5722;
    color: white;
  }
  
  /* FAQ Section */
  .faq .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
  }
  .faq-question {
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #e0e0e0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .faq-answer {
    padding: 10px 20px;
    background-color: #f5f5f5;
    margin-top: -10px;
  }
  
  /* Contact Section */
  .contact {
    padding: 40px 0;
    text-align: center;
  }
  .contact a {
    color: #ff5722;
    text-decoration: none;
  }
  .contact a:hover {
    text-decoration: underline;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    .instructor-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  </style>
  
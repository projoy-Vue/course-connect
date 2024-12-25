<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <HeroSection />
    <FeaturedCourses/>
    <HowItWorks/>
    <Testimonials/>
    <CallToAction/>
    <NewsletterSignup/>
  </div>
</template>

<script>

import FeaturedCourses from '@/components/FeaturedCourses.vue';
import HeroSection from '@/components/HeroSection.vue';
import HowItWorks from '@/components/HowItWorks.vue';
import Testimonials from '@/components/Testimonials.vue';
import CallToAction from '@/components/CallToAction.vue';
import NewsletterSignup from '@/components/NewsletterSignup.vue';


export default {
  name: 'Home',
  components: {
    HeroSection,
    FeaturedCourses,
    HowItWorks,
    Testimonials,
    CallToAction,
    NewsletterSignup,
  },
};
</script>

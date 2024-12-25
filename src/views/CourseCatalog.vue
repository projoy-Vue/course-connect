<!-- src/views/CourseCatalog.vue -->
<template>
  <div class=" course-catalog">
    <CourseList />
  </div>
</template>


<script>
import CourseList from '@/components/catelog/CourseList.vue';
export default {
  name: 'CourseCatalog',
  components: {
    CourseList,
  },
}
</script>

<style scoped>
.course-catalog {
  margin: 0 auto;
  padding: 30px;
}
</style>

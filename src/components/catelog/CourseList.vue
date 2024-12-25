<template>
    <div class="course-list-page">
        <div class="top">
            <div class="search">
                <SearchBar @search-courses="searchCourses" />
            </div>
            <div class="sort">
                <CourseSort @sort-courses="sortCourses" />
            </div>
        </div>
        <div class="down">
            <div class="CourseFilter">
                <CourseFilter @filter-courses="filterCourses" />
            </div>
            <div class="course-list">
                <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
            </div>
        </div>
       
    </div>
</template>
<script>
import CourseCard from './CourseCard.vue';
import CourseFilter from './CourseFilter.vue';
import SearchBar from './SearchBar.vue';
import CourseSort from './SortCourses.vue';


export default {
    name: 'CourseList',
    components: {
        CourseCard,
        CourseFilter,
        SearchBar,
        CourseSort,

    },
    data() {
        return {
            perpage: 4,
            courses: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Introduction to Vue.js',
                    instructor: 'Jane Doe',
                    description: 'Learn the basics of Vue.js and build dynamic web applications.',
                    rating: 4.5,
                    price: 0,
                    category: 'Web Development',
                    level: 'Beginner',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Advanced JavaScript Techniques',
                    instructor: 'John Smith',
                    description: 'Master advanced concepts in JavaScript programming.',
                    rating: 4.8,
                    price: 49.99,
                    category: 'Web Development',
                    level: 'Advanced',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Python for Data Science',
                    instructor: 'Emily Johnson',
                    description: 'Explore data science concepts using Python and real-world datasets.',
                    rating: 4.7,
                    price: 39.99,
                    category: 'Data Science',
                    level: 'Intermediate',
                },
                {
                    id: 4,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'UI/UX Design Fundamentals',
                    instructor: 'Chris Lee',
                    description: 'Learn the principles of UI/UX design and create user-friendly interfaces.',
                    rating: 4.6,
                    price: 29.99,
                    category: 'Design',
                    level: 'Beginner',
                },
                {
                    id: 5,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Machine Learning with TensorFlow',
                    instructor: 'Alex Martinez',
                    description: 'Dive into machine learning and build models with TensorFlow.',
                    rating: 4.9,
                    price: 59.99,
                    category: 'Artificial Intelligence',
                    level: 'Advanced',
                },
                {
                    id: 6,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Digital Marketing Strategy',
                    instructor: 'Laura Bennett',
                    description: 'Learn effective digital marketing strategies to grow your business.',
                    rating: 4.3,
                    price: 24.99,
                    category: 'Marketing',
                    level: 'Intermediate',
                },
                {
                    id: 7,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'React Native for Mobile Development',
                    instructor: 'Michael Brown',
                    description: 'Build mobile applications using React Native.',
                    rating: 4.4,
                    price: 49.99,
                    category: 'Mobile Development',
                    level: 'Intermediate',
                },
                {
                    id: 8,
                    image: 'https://via.placeholder.com/300x160',
                    title: 'Cybersecurity Essentials',
                    instructor: 'Sarah Wilson',
                    description: 'Understand the fundamentals of cybersecurity and how to protect systems.',
                    rating: 4.6,
                    price: 34.99,
                    category: 'Cybersecurity',
                    level: 'Beginner',
                },
               
               
             
            ],
            filteredCourses: [],

        };
    },
    created() {
        this.filteredCourses = this.courses; // Initialize with all courses
    },
    methods: {
        filterCourses(filters) {
            this.filteredCourses = this.courses.filter((course) => {
                const categoryMatch = filters.category === '' || course.category === filters.category;
                const levelMatch = filters.level === '' || course.level === filters.level;
                const priceMatch = course.price <= filters.price;

                return categoryMatch && levelMatch && priceMatch;
            });
        },
        searchCourses(query) {
            this.filteredCourses = this.courses.filter((course) => {
                const titleMatch = course.title.toLowerCase().includes(query.toLowerCase());
                const descriptionMatch = course.description.toLowerCase().includes(query.toLowerCase());

                return titleMatch || descriptionMatch;
            });
        },

        sortCourses(sortBy) {
            if (sortBy === 'priceLowToHigh') {
                this.filteredCourses.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'priceHighToLow') {
                this.filteredCourses.sort((a, b) => b.price - a.price);
            } else if (sortBy === 'ratingHighToLow') {
                this.filteredCourses.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === 'titleAZ') {
                this.filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortBy === 'titleZA') {
                this.filteredCourses.sort((a, b) => b.title.localeCompare(a.title));
            } else {
                this.filteredCourses = this.courses;
            }
        },

    },
};

</script>

<style scoped>
.course-list-page {
    width: 100%;
}

.top {
    margin-bottom: 10px;
}

.search {
    width: 90%;
    margin-left: 4%;
    margin-bottom: 10px;
}

.sort {
    width: 90%;
    margin-left: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
}



.course-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    overflow: auto;
    padding: 
    20px;


}

@media screen and (max-width: 768px) {
    .down {
        display: flex;
        flex-direction: column;
    }

    .CourseFilter {
        display: none;

    }

    .course-list {
        grid-template-columns: repeat(2, 1fr);
    }

}
</style>
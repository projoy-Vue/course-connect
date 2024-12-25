<template>
    <div class="Filter">
        <div class="course-filter" v-if="!isMobile">
            <div class="filter-section">
                <h4>Category</h4>
                <select v-model="selectedCategory" @change="applyFilters">
                    <option value="">All</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>

            <div class="filter-section">
                <h4>Level</h4>
                <select v-model="selectedLevel" @change="applyFilters">
                    <option value="">All</option>
                    <option v-for="level in levels" :key="level" :value="level">
                        {{ level }}
                    </option>
                </select>
            </div>

            <div class="filter-section">
                <h4>Price Range</h4>
                <input type="range" v-model="selectedPrice" min="0" max="100" @input="applyFilters" />
                <span>{{ selectedPrice | currency }}</span>
            </div>
        </div>
        
    </div>
    <div class="filter-icon" @click="Filter">
            <i class="fa-solid fa-filter"></i>
        </div>
</template>

<script>
export default {
    name: 'CourseFilter',
    data() {
        return {
            isMobile: false,
            selectedCategory: '',
            selectedLevel: '',
            selectedPrice: 100,
            categories: ['Web Development', 'Data Science', 'Design', 'Marketing'],
            levels: ['Beginner', 'Intermediate', 'Advanced'],
        };
    },
    methods: {
        applyFilters() {
            this.$emit('filter-courses', {
                category: this.selectedCategory,
                level: this.selectedLevel,
                price: this.selectedPrice,

            });
        },
        Filter() {
            this.isMobile = !this.isMobile;

            if (this.isMobile) {
                document.querySelector('.Filter').style.transform = 'translateX(-100%)';
            } else {
                document.querySelector('.Filter').style.transform = 'translateX(0)';
            }
        },
       
    },

    filters: {
        currency(value) {
            return `$${parseFloat(value).toFixed(2)}`;
        },
    },
};



</script>

<style scoped>
.filter-icon{
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgb(21, 22, 22);
}
.filter-icon i{
    color: #fff;
    font-size: 20px;
}
.Filter{
    margin-top: 50px;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    background-color: hsla(180, 7%, 27%, 0.753);
    color: #fff;
    border-radius: 10px; ;
    border: 1px solid #ccc;
    height: 100vh;
}
.course-filter {
    width: 250px;
    padding: 10px;
    background-color: #0000;
    display: flex;
    flex-direction: column;
    gap: 16px;
   
}

.filter-section {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
}


select,
input[type="range"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* background: #3FB683; */
}
@media screen and (max-width: 768px) {
    .course-filter {
        width: 100%;
        flex-direction: row;
        height:auto ;
    }
    
}
</style>
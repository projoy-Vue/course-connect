<template>
    <div class="blog-page">
      <!-- Hero Section -->
      <section class="blog-hero">
        <div class="hero-content">
          <h1>Our Blog</h1>
          <p>Explore expert tips, student success stories, and latest updates</p>
          <input type="text" v-model="searchQuery" placeholder="Search blog posts..." @input="searchPosts" />
        </div>
      </section>
  
      <!-- Featured Article Section -->
      <section class="featured-article">
        <h2>Featured Article</h2>
        <div class="featured-article-content" v-if="featuredPost">
          <img :src="featuredPost.image" alt="Featured Post" />
          <div class="featured-details">
            <h3>{{ featuredPost.title }}</h3>
            <p>{{ featuredPost.excerpt }}</p>
            <router-link :to="`/blog/${featuredPost.slug}`" class="read-more">Read Full Post</router-link>
          </div>
        </div>
      </section>
  
      <!-- Main Blog Content -->
      <div class="blog-container">
        <!-- Interactive Sidebar -->
        <aside class="blog-sidebar">
          <h3>Filter by Category</h3>
          <ul>
            <li v-for="category in categories" :key="category" @click="filterByCategory(category)">
              {{ category }}
            </li>
          </ul>
  
          <h3>Popular Posts</h3>
          <ul>
            <li v-for="post in popularPosts" :key="post.id">
              <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
            </li>
          </ul>
  
          <h3>Recent Posts</h3>
          <ul>
            <li v-for="post in recentPosts" :key="post.id">
              <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
            </li>
          </ul>
  
          <!-- Newsletter Signup -->
          <div class="newsletter-signup">
            <h3>Subscribe to our newsletter</h3>
            <input type="email" v-model="email" placeholder="Your Email" />
            <button @click="subscribeToNewsletter">Subscribe</button>
          </div>
        </aside>
  
        <!-- Blog List Section with Pagination -->
        <section class="blog-list">
          <div class="blog-post" v-for="post in paginatedPosts" :key="post.id">
            <img :src="post.image" alt="Post Image" />
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.slug}`" class="read-more">Read More</router-link>
          </div>
  
          <!-- Pagination -->
          <div class="pagination">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
          </div>
        </section>
      </div>
  
      <!-- Popular Categories Section -->
      <section class="popular-categories">
        <h3>Popular Categories</h3>
        <ul>
          <li v-for="category in popularCategories" :key="category">
            <router-link :to="`/blog/category/${category}`">{{ category }}</router-link>
          </li>
        </ul>
      </section>
  
      <!-- Author Spotlight Section -->
      <section class="author-spotlight">
        <h3>Author Spotlight</h3>
        <div class="author-profile" v-for="author in featuredAuthors" :key="author.id">
          <img :src="author.profileImage" alt="Author Image" />
          <h4>{{ author.name }}</h4>
          <p>{{ author.bio }}</p>
        </div>
      </section>
  
      <!-- Social Media Integration -->
      <section class="social-media">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        email: "",
        currentPage: 2,
        postsPerPage: 6,
        categories: ["Web Development", "Data Science", "UI/UX Design", "AI & ML", "Learning Tips"],
        popularCategories: ["Web Development", "AI & ML", "Data Science"],
        featuredPost: {
          id: 101,
          title: "Mastering JavaScript in 2024",
          excerpt: "Discover how to take your JavaScript skills to the next level...",
          image: "path_to_featured_image.jpg",
          slug: "mastering-javascript-2024",
        },
        posts: [
          // Sample posts
        ],
        popularPosts: [],
        recentPosts: [],
        featuredAuthors: [
          {
            id: 1,
            name: "Jane Doe",
            profileImage: "path_to_author_image.jpg",
            bio: "Jane is a senior instructor with 10 years of experience in web development.",
          },
          // Add more authors
        ],
      };
    },
    computed: {
      filteredPosts() {
        return this.posts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      },
      paginatedPosts() {
        const start = (this.currentPage - 1) * this.postsPerPage;
        const end = start + this.postsPerPage;
        return this.filteredPosts.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.filteredPosts.length / this.postsPerPage);
      },
    },
    methods: {
      searchPosts() {
        this.currentPage = 1; // Reset to the first page when searching
      },
      filterByCategory(category) {
        // Logic for filtering posts by category
      },
      subscribeToNewsletter() {
        if (this.email) {
          alert("Thank you for subscribing!");
          this.email = "";
        }
      },
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Styles */
.blog-page {
  background: linear-gradient(130deg, #1a1a1a, #5cacda);

  font-family: 'Helvetica', sans-serif;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 20px;
}

/* Hero Section */
.blog-hero {
  background: url('https://picsum.photos/536/354') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 120px 20px;
  color: white;
}

.blog-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.blog-hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.blog-hero input {
  padding: 15px;
  width: 70%;
  max-width: 500px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Featured Article */
.featured-article {
  padding: 40px 20px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  margin-top: 40px;
}

.featured-article img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
}

.featured-details {
  max-width: 600px;
}

.featured-details h3 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.featured-details p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
}

.featured-details .read-more {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
}

.featured-details .read-more:hover {
  text-decoration: underline;
}

/* Blog Container */
.blog-container {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

/* Blog List Section */
.blog-list {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.blog-post {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s;
}

.blog-post:hover {
  transform: translateY(-5px);
}

.blog-post img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #eee;
}

.blog-post h2 {
  font-size: 1.8rem;
  padding: 15px 20px 5px 20px;
  color: #333;
}

.blog-post p {
  padding: 0 20px 20px 20px;
  font-size: 1rem;
  color: #555;
}

.blog-post .read-more {
  padding: 15px 20px;
  display: inline-block;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
}

.blog-post .read-more:hover {
  text-decoration: underline;
}

/* Sidebar Section */
.blog-sidebar {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.blog-sidebar h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.blog-sidebar ul {
  list-style: none;
  padding: 0;
}

.blog-sidebar li {
  margin-bottom: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  color: #007bff;
}

.blog-sidebar li:hover {
  text-decoration: underline;
}

/* Newsletter Signup */
.newsletter-signup {
  margin-top: 30px;
}

.newsletter-signup h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.newsletter-signup input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
}

.newsletter-signup button {
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-signup button:hover {
  background-color: #0056b3;
}

/* Pagination */
.pagination {
  text-align: center;
  margin-top: 40px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1.1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #ccc;
}

.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* Popular Categories */
.popular-categories {
  margin-top: 40px;
  text-align: center;
}

.popular-categories h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.popular-categories ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 15px;
}

.popular-categories li {
  font-size: 1.2rem;
  color: #007bff;
  cursor: pointer;
}

.popular-categories li:hover {
  text-decoration: underline;
}

/* Author Spotlight */
.author-spotlight {
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
  margin-top: 40px;
  border-radius: 12px;
}

.author-profile {
  display: inline-block;
  margin: 0 30px;
  text-align: center;
}

.author-profile img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.author-profile h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.author-profile p {
  font-size: 1rem;
  color: #555;
  max-width: 200px;
  margin: 0 auto;
}

/* Social Media Section */
.social-media {
  padding: 20px;
  margin-top: 40px;
  text-align: center;
}

.social-media h3 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icons a {
  font-size: 1.5rem;
  color: #007bff;
  text-decoration: none;
}

.social-icons a:hover {
  text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .blog-container {
    flex-direction: column;
  }

  .blog-sidebar {
    position: relative;
    top: 0;
    max-height: none;
  }

  .featured-article {
    flex-direction: column;
    text-align: center;
  }

  .blog-post {
    margin-bottom: 30px;
  }

  .pagination {
    display: block;
  }
}
</style>

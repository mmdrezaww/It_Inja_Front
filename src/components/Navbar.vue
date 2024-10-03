<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/logo.png" alt="It Inja Logo"/>
      </div>

      <!-- Links -->
      <ul class="nav-links">
        <li><a href="#">خانه</a></li>
        <li><a href="#">فروشگاه</a></li>
        <li><a href="#">تماس با ما</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">وبلاگ</a></li>
      </ul>

      <!-- Search and Actions -->
      <div class="actions">
        <input type="text" class="search-bar" placeholder="جستجو کنید..."/>
        <button class="btn-login">ورود</button>
        <button class="btn-cart">سبد خرید</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Global Navbar Container */
.navbar {
  background-color: #f0f0f0; /* Light gray for background */
  padding: 15px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Logo Styles */
.logo img {
  height: 50px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin: 0 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333; /* Dark gray for links */
  font-weight: 600;
}

/* Search Bar and Buttons */
.actions {
  display: flex;
  align-items: center;
}

.search-bar {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
}

.btn-login,
.btn-cart {
  background-color: #ffcc00; /* Bright yellow for buttons */
  color: #333; /* Dark gray text */
  border: none;
  padding: 7px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

/* Add Hover Effects */
.btn-login:hover,
.btn-cart:hover,
.nav-links a:hover {
  background-color: #333;
  color: #ffcc00;
  transition: 0.3s ease-in-out;
}
</style>

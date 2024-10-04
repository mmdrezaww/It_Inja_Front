<template>
  <div>
    <nav class="navbar">

      <!-- Navigation Links -->
      <ul class="navbar-links">
        <li>
          <a href="#" class="nav-link"><i class="fa fa-home"></i> خانه</a>
        </li>
        <li>
          <a href="#" class="nav-link"><i class="fa fa-store"></i> فروشگاه</a>
        </li>
        <li>
          <a href="#" class="nav-link"><i class="fa fa-info-circle"></i> درباره ما</a>
        </li>
        <li>
          <a href="#" class="nav-link"><i class="fa fa-phone"></i> تماس با ما</a>
        </li>
        <li>
          <a href="#" class="nav-link"><i class="fa fa-blog"></i> بلاگ</a>
        </li>
      </ul>

      <!-- Logo Section -->
      <div class="navbar-logo">
        <img src="@/assets/logo.png" alt="Logo"/>
        <!--        <span class="logo-text">ITinja</span>-->
      </div>

      <!-- Search Bar and User Options -->
      <div class="navbar-actions">
        <input type="text" placeholder="جستجو..." class="search-bar"/>
        <button class="search-button">Search</button>
        <div class="user-options">
          <a href="#" class="nav-link"><i class="fa fa-user"></i> Login</a>
          <a href="#" class="nav-link"><i class="fa fa-shopping-cart"></i> Cart</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
/* Navbar Container */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
}

/* Logo Section */
.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  width: 100px; /* Adjusted size for the logo */
  height: 55px;
  margin-right: 10px;
}

.logo-text {
  /*font-size: 1.5rem;*/
  /*font-weight: bold;*/
}

/* Navigation Links */
.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar-links li {
  display: inline-block;
}

.nav-link {
  color: #bbb;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffcc00; /* Yellow color on hover */
}

/* Search Bar */
.navbar-actions {
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #555;
  color: #fff;
  margin-right: 1rem;
}

.search-button {
  background-color: #ffcc00;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #e6b800; /* Darker yellow */
}

/* User Options (Login & Cart) */
.user-options {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-options .nav-link {
  display: flex;
  align-items: center;
}

.user-options .nav-link i {
  margin-right: 5px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-links,
  .navbar-actions {
    margin-top: 1rem;
  }
}
</style>

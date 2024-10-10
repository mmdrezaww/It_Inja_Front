<template>
  <div>
    <nav class="bg-gray-800 text-white px-8 py-4 flex items-center justify-between">
      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
          <a href="#" class="text-gray-300 hover:text-yellow-400 flex items-center">
            خانه <i class="fa fa-home mr-2"></i>
          </a>
        </li>

        <hr>

        <li>
          <a href="#" class="text-gray-300 hover:text-yellow-400 flex items-center">
            فروشگاه <i class="fa fa-store mr-2"></i>
          </a>
        </li>

        <li>
          <a href="#" class="text-gray-300 hover:text-yellow-400 flex items-center">
            درباره ما <i class="fa fa-info-circle mr-2"></i>
          </a>
        </li>

        <li>
          <a href="#" class="text-gray-300 hover:text-yellow-400 flex items-center">
            تماس با ما <i class="fa fa-phone mr-2"></i>
          </a>
        </li>

        <li>
          <a href="#" class="text-gray-300 hover:text-yellow-400 flex items-center">
            بلاگ <i class="fa fa-blog mr-2">

          </i>
          </a>
        </li>

      </ul>

      <!-- Logo Section -->
      <div class="flex items-center">
        <img src="@/assets/logo.png" alt="Logo" class="h-16 w-auto"/>
      </div>

      <!-- Search Bar and User Options -->
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="جستجو..."
               class="px-3 p-2 bg-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        <button class="bg-yellow-400 text-gray-800 px-2 py-1 rounded-md hover:bg-yellow-500 transition">
          Search
        </button>
        <div class="flex space-x-4 items-center">
          <a href="#" class="flex items-center text-gray-300 hover:text-yellow-400">
            <i class="fa fa-user mr-2"></i>حساب ها
          </a>
          <hr>
          <a href="#" class="flex items-center text-gray-300 hover:text-yellow-400">
            <i class="fa fa-shopping-cart mr-2"></i>سبد خرید
          </a>
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

<!-- No additional scoped styles necessary when using TailwindCSS -->

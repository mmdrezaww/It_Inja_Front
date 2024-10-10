<template>
  <nav class="bg-gray-900 text-white p-4 shadow-lg">
    <ul class="flex justify-center space-x-5 text-right">
      <!-- Main Menu Items -->
      <li v-for="(item, index) in menuItems" :key="index"
          class="relative group">
        <!-- Main Menu Link -->
        <a href="#"
           class="flex items-center text-lg hover:text-yellow-300 transition duration-300">
          {{ item.name }}
          <span class="ml-2">▼</span>
        </a>

        <!-- Sub Menu -->
        <ul v-if="item.subMenu"
            class="absolute right-0 mt-1 hidden group-hover:block bg-gray-800 shadow-md rounded-lg py-2 text-gray-100 w-48 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100">
          <li
              v-for="(subItem, subIndex) in item.subMenu"
              :key="subIndex"
              class="px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition duration-300"
          >
            <a href="#" class="block">{{ subItem }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {name: 'لپ تاپ', subMenu: ['مدل 1', 'مدل 2', 'مدل 3']},
        {name: 'کامپیوتر کیس', subMenu: ['مدل A', 'مدل B']},
        {name: 'مانیتور', subMenu: ['نوع 1', 'نوع 2']},
        {name: 'قطعات ذخیره سازی', subMenu: ['SSD', 'HDD']},
        {name: 'کارت گرافیک', subMenu: ['NVIDIA', 'AMD']},
        // Add more categories as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Scoped styles can be used for more custom tweaking */
</style>

import {createApp} from 'vue';

import App from './App.vue';

import './assets/main.css';

import '@fortawesome/fontawesome-free/css/all.css'

import {library} from '@fortawesome/fontawesome-svg-core';

import {faShoppingCart, faUser, faSearch} from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faShoppingCart, faUser, faSearch);

// Import Tailwind CSS
import './assets/main.css'; // Make sure you have Tailwind CSS here

createApp(App).mount('#app');

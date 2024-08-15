// main.js
import { accordion } from './accordion.js';
import { togglePricing } from './togglePricing.js';
import { hoverTemplates } from './hoverTemplates.js';
import { navbarToggle } from './navbar.js';

// Select all items with .list-item and .dropdown-item classes
const items = document.querySelectorAll('.list-item, .dropdown-item');

// Initialize all functionalities
accordion(items);
togglePricing();
hoverTemplates();
navbarToggle();

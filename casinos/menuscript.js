// Select DOM elements once outside of the event handler
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('#menu');
const menuItems = document.querySelector('.menu-items');
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const elementosLista1 = document.querySelector('#elementosLista1');
const elementosLista2 = document.querySelector('#elementosLista2');
const elementosLista3 = document.querySelector('#elementosLista3');

let isBar2Visible = true; // Tracks the visibility of bar2 to control toggle state

// Toggle function to handle menu and icon transformation
function toggleMenu() {
    // Toggle menu items visibility
    menuItems.classList.toggle('show');

    // Transform bars to create 'X' icon or hamburger icon
    if (isBar2Visible) {
        bar1.style.transform = 'translateY(4px) translateX(-1px) rotate(45deg)';
        bar2.style.transform = 'translateY(-4px) translateX(-1px) rotate(-45deg)';
        bar3.style.display = 'none';
        isBar2Visible = false;
    } else {
        bar1.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
        bar2.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)';
        bar3.style.display = 'block';
        isBar2Visible = true;
    }
}

// Attach event listener to the menu icon only
menuIcon.addEventListener('click', toggleMenu);

// Attach event listener to elementosLista1, elementosLista2, and elementosLista3
elementosLista1.addEventListener('click', toggleMenu);
elementosLista2.addEventListener('click', toggleMenu);
elementosLista3.addEventListener('click', toggleMenu);


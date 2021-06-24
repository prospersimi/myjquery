// Declaring Variables
let navIcon = document.getElementById('bar');
navIcon.addEventListener('click', showNavBar);
let closeIcon = document.getElementById('closenav');
closeIcon.addEventListener('click', hideNavBar)

// Show Navbar
function showNavBar() {
  let navbar = document.getElementById('nav');
  navbar.style.display = 'block';
};

// Hide Nabar
function hideNavBar() {
  let navbar = document.getElementById('nav');
  navbar.style.display = 'none'; 
};



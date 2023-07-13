// navbar functionality----------
const burgerContainer = document.querySelector('.burger-container');
const navController = document.querySelector('.nav-controller');
const toggleBtn = document.querySelector('.la-angle-double-down');

burgerContainer.addEventListener('click', () => {
    // Toggle the show class and rotate
    navController.classList.toggle('show');
    toggleBtn.classList.toggle('rotate'); 
});

navController.addEventListener('click', (event) => {
    // Remove show class and rotate
    navController.classList.remove('show'); 
    toggleBtn.classList.remove('rotate'); 
});



// textmonial functionality----------------
const nextButton = document.querySelector('.textmonial-btn');
const boxContainers = document.querySelectorAll('.box-container');
const textmonialContainer = document.querySelector('.textmonial-boxes-container');

nextButton.addEventListener('click', () => {
    // Get the current active box-container
    const activeBoxContainer = document.querySelector('.box-container.active');

    // Find the index of the active box-container
    const activeIndex = Array.from(boxContainers).indexOf(activeBoxContainer);

    // Calculate the next index in a circular manner
    const nextIndex = (activeIndex + 1) % boxContainers.length;

    // Remove the active class from the current active box-container
    activeBoxContainer.classList.remove('active');

    // change active box-container element order
    activeBoxContainer.style.order = 1;

    // Add the active class to the next box-container
    boxContainers[nextIndex].classList.add('active');

    // Keep the active box-container to the last order position
    boxContainers[nextIndex].style.order = textmonialContainer.children.length;
});

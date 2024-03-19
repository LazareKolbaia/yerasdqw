document.addEventListener('DOMContentLoaded', function() {
    const closeWelcome = document.querySelector('.close_welcome');
    const containerWelcome = document.querySelector('.container-welcome');

    closeWelcome.addEventListener('click', function() {
        containerWelcome.style.animation = 'slideLeft 0.3s ease-in-out forwards';
        setTimeout(() => {
            containerWelcome.style.display = 'none';
        }, 200); // Change the timeout value to match your animation duration
    });
});



const password = document.getElementById('pWord');
const confirmPassword = document.getElementById('confirm-pWord');
const submitBtn = document.querySelector('.submit-btn');

function submitEvent(event) {
    if (password.value != confirmPassword.value) {
        password.setCustomValidity(' ');
        confirmPassword.setCustomValidity(' ');
        console.log(password.value);
        console.log(confirmPassword.value);
        event.preventDefault();
    }
}

submitBtn.addEventListener('click', () => {
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
});


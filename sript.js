const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Check password strength criteria
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Display password strength
    if (strength <= 2) {
        message.textContent = 'Weak Password';
        message.style.color = 'red';
    } else if (strength === 3 || strength === 4) {
        message.textContent = 'Moderate Password';
        message.style.color = 'orange';
    } else if (strength === 5) {
        message.textContent = 'Strong Password';
        message.style.color = 'green';
    }
});

// error message
function showError(message) {

    const formMessage = document.getElementById("formMessage");

    formMessage.innerHTML = `
        <div class="alert alert-danger">
            ${message}
        </div>
    `;

    setTimeout(() => {
        formMessage.innerHTML = "";
    }, 5000);
}


// email validation
function validateEmail(email) {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


// contact for validation
function validateContactForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        showError("Please fill in all fields.");

        return false;

    }

    if (!validateEmail(email)) {

        showError("Please enter a valid email address.");

        return false;

    }

    return true;

}
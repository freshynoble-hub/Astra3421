const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        if (!validateContactForm()) {

            e.preventDefault();
            return;

        }

        const submitBtn = contactForm.querySelector("button[type='submit']");

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Sending...';

    });

}



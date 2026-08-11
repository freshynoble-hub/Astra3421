const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {

    applicationForm.addEventListener("submit", function (e) {

        if (!validateApplicationForm()) {

            e.preventDefault();

        }

        // If validation passes,
        // Netlify automatically submits the form.

    });

}
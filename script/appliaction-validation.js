function validateApplicationForm() {

    const name = document.getElementById("appName").value.trim();
    const email = document.getElementById("appEmail").value.trim();
    const team = document.getElementById("teamSelection").value;
    const application = document.getElementById("application").value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (team === "") {
        alert("Please select a service.");
        return false;
    }

    if (application === "") {
        alert("Please describe the service you require.");
        return false;
    }

    return true;

}
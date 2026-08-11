function openProjectModal(button) {

    const card = button.closest(".project-card");

    if (!card) return;

    const title = card.querySelector("h4");
    const description = card.querySelector("p");
    const image = card.querySelector("img");

    document.getElementById("projectTitle").textContent =
        title ? title.textContent : "";

    document.getElementById("projectDescription").textContent =
        description ? description.textContent : "";

    if (image) {
        document.getElementById("projectImage").src = image.src;
        document.getElementById("projectImage").alt =
            title ? title.textContent : "";
    }

}
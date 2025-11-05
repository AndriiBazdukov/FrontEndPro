const form = document.querySelector('form');

const nameInput = form.elements["name"];
const messageInput = form.elements["message"];
const phoneInput = form.elements["phone"];
const emailInput = form.elements["e-mail"];

function showError(input, message) {
     clearError(input);

    input.classList.add("input-error", "mb-0");

    const error = document.createElement("div");
    error.classList.add("error-text");
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
}

 function clearError(input) {
        input.classList.remove("input-error", "mb-0");

        const next = input.nextElementSibling;
        if (next && next.classList.contains("error-text")) {
            next.remove();
        }
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        valid = false;
    }
    else clearError(nameInput);

    if (messageInput.value.trim().length < 5) {
        showError(messageInput, "Message must contain at least 5 characters");
        valid = false;
    }
    else clearError(messageInput);

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, "Phone must start with +380 and contain 9 digits after");
        valid = false;
    }else clearError(phoneInput);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Email must contain @ and a dot");
        valid = false;
    }else clearError(emailInput);

    if (!valid) return;

    const userData = {
        name: nameInput.value.trim(),
        message: messageInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim()
    };

    console.log("User submitted data:", userData);
    alert("Message sent successfully!");
    form.reset();
});

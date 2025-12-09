const form = document.querySelector('form');

const nameInput = form.elements["name"];
const messageInput = form.elements["message"];
const phoneInput = form.elements["phone"];
const emailInput = form.elements["e-mail"];

const fields = {
    name: {
        input: form.elements["name"],
        validate: (value) => value.trim() !== "",
        message: "Name is required"
    },
    message: {
        input: form.elements["message"],
        validate: (value) => value.trim().length >= 5,
        message: "Message must contain at least 5 characters"
    },
    phone: {
        input: form.elements["phone"],
        validate: (value) => /^\+380\d{9}$/.test(value.trim()),
        message: "Phone must start with +380 and contain 9 digits after"
    },
    email: {
        input: form.elements["e-mail"],
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        message: "Email must contain @ and a dot"
    }
};


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

function validateField({ input, validate, message }) {
    const isValid = validate(input.value);
    if (!isValid) showError(input, message);
    else clearError(input);
    return isValid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    for (const field of Object.values(fields)) {
        const ok = validateField(field);
        if (!ok) valid = false;
    }

    if (!valid) return;

    const userData = {};

    for (const key in fields) {
        const field = fields[key];
        userData[key] = field.input.value.trim();
    }

    console.log("User submitted data:", userData);
    alert("Message sent successfully!");
    form.reset();
});

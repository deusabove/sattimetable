// Function to load checkbox states from local storage
function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const id = checkbox.getAttribute('data-id');
        const isChecked = localStorage.getItem(`checkbox-${id}`) === 'true';
        checkbox.checked = isChecked;
    });
}

// Function to save checkbox state to local storage
function saveCheckboxState(event) {
    const checkbox = event.target;
    const id = checkbox.getAttribute('data-id');
    localStorage.setItem(`checkbox-${id}`, checkbox.checked);
}

// Add event listeners to checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
});

// Load checkbox states on page load
document.addEventListener('DOMContentLoaded', loadCheckboxStates);

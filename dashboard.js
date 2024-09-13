// Example JavaScript to handle simple task list interaction
document.querySelectorAll('#task-items input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.textDecoration = 'line-through';
        } else {
            this.parentElement.style.textDecoration = 'none';
        }
    });
});

// Handle upload button click
document.getElementById('upload-design').addEventListener('click', () => {
    alert('Upload functionality coming soon!');
});

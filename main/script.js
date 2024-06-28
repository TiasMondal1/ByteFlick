// Example: Alert when a social media icon is clicked
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', () => {
        alert('You are leaving the website!');
    });
});

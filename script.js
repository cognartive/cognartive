// Example: Dynamically resize iframe based on content
window.addEventListener('message', function(event) {
    const iframe = document.querySelector('iframe');
    if (event.data.height) {
        iframe.style.height = event.data.height + 'px';
    }
});

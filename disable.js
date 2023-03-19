// Disable right click and save as
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    // Disable F12 key
    if (event.keyCode === 123) {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+I keys
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+C keys
    if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+J keys
    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
    }

    // Disable Ctrl+U keys
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});

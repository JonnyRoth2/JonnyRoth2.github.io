async function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const response = await fetch('send_email.php', {
        method: 'POST',
        body: formData,
    });
}
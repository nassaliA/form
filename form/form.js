document.getElementById('survey-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form elements
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('number').value;

    // Error messages
    let errorMessages = [];

    // Validate name
    if (name === '') {
        errorMessages.push('Name is required.');
    }

    // Validate email with regex
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        errorMessages.push('Email is required.');
    } else if (!emailPattern.test(email)) {
        errorMessages.push('Email is not valid.');
    }

    // Validate age
    if (age === '' || isNaN(age)) {
        errorMessages.push('Age is required and must be a number.');
    } else if (age < 5 || age > 99) {
        errorMessages.push('Age must be between 5 and 99.');
    }

    // Display error messages or submit the form
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        alert('Form submitted successfully!');
        // You can uncomment the next line to submit the form for real.
        // document.getElementById('survey-form').submit();
    }
});

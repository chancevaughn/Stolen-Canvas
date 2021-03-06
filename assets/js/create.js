const accountForm = document.querySelector('#createAccountForm');

const createAccountFormHandler = async (event) => {

    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
    if (password === passwordConfirm) {
        console.log()
        if (email && password) {
            const response = await fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/login');
            } else {
                alert('Failed to create account');
            }
        }
    }
    else {
        console.log("passwords do not match");
        alert("passwords do not match");
    }
};

accountForm.addEventListener("submit", createAccountFormHandler);
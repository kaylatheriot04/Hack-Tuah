
// Signup function with username uniqueness check and redirect to profile creation
function signUp() {
    //alert("Sign Up button clicked!"); // This alert checks if the function is called

    const phone = document.getElementById('signup-phone').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (phone && username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const usernameExists = users.some(user => user.username === username);

        if (usernameExists) {
            alert('Username is already in use. Please choose a different username.');
        } else {
            const newUser = { phone, username, password };
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            //alert('Sign up successful! Please complete your profile.');
            window.location.href = "profile.html";
        }
    } else {
        alert('Please fill in all fields');
    }
}

// Login function to authenticate users and manage sessions
function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Log in successful!');
        window.location.href = "../html/main.html";
    } else {
        alert('Incorrect username or password');
    }
}

document.getElementById('password').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        logIn();
    }
});

document.getElementById('username').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        logIn();
    }
});

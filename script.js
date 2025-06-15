

//    <form id="registration-form">
//         <label for="username">Username:</label>
//         <input type="text" id="username" required>

//         <label for="email">Email:</label>
//         <input type="email" id="email" required>

//         <label for="password">Password:</label>
//         <input type="password" id="password" required>

//         <button type="submit">Register</button>
//         <div id="form-feedback"></div>
//     </form>
document.addEventListener('DOMContentLoaded', () =>
{
    console.log("DOM loaded OK");
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");


    form.addEventListener("submit", (event) => {
        event.preventDefault();


        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        const usernameTrim = username.value.trim();
        const emailTrim =  email.value.trim();
        const passwordTrim = password.value.trim();
        const a = "anas"
        a = "hello";
        console.log(a);

    })
})
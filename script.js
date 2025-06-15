

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
    
            let isValid =  true;
            let messages = [];
    
            if (usernameTrim.length < 3)
            {
                isValid = false;
                messages.push("Username must be at least 3 characters long.");
            }
            if (/^[^@]+@[^@]+\.[^@]+$/.test(emailTrim) == false)
            {
                isValid = false;
                messages.push("Email must be a valid address (e.g. user@example.com).");
            }
            if (passwordTrim.length < 8)
            {
                isValid = false;
                messages.push("Password must be at least 8 characters long.");
            }
            feedbackDiv.style.display = 'block';
            if (isValid == true)
            {
                
                feedbackDiv.textContent = "Registration successful!";
                feedbackDiv.style.color = "#28a745";
            }
            else
            {
                feedbackDiv.style.color = "#dc3545";
                feedbackDiv.innerHTML = messages.join("<br>"); 
            }
        })
    })
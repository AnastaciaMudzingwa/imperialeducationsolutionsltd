                function validateForm() {
                let isValid = true;
                //Get form inputs
                let name = document.getElementById("name").value.trim();
                let email = document.getElementById("email").value.trim();
                let feedback = document.getElementById("feedback").value.trim();
                //Get error elements
                let nameError = document.getElementById("nameError");
                let emailError = document.getElementById("emailError");
                let feedbackError = document.getElementById("feedbackError");
                //Reset error messages
                nameError.textContent="";
                emailError.textContent="";
                feedbackError.textcontent="";
                //Validate Name (Minimum 3 characters)
                if (name.length <3) {
                    nameError.textContent = "Name must be atleat 3 characters long.";
                    isValid = false;
                }
                //Validate Email (Basic pattern check)
                let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPttern.test(email)) {
                    emailError.textContent = "Enter a valid email address.";
                    isValid = false;
                }
                //Validate Feedback (Minimum 10 characters)
                if (feedback.length < 10) {
                    feedbackError.textContent = "Feedback must be at least 10 characters long.";
                    isValid = false;
                }
    
                return isValid;
            }
        
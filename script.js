
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");
const button=document.getElementById(".button");




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText=message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function length(input){
// //     input.innerText="Invalid";
// }

form.addEventListener("submit", function(e){
    e.preventDefault();


function navigatetoanotherpage(){
    window.location.href="http://127.0.0.1:5500/main.html";
}

 
let firstname1=document.getElementById("firstname").value;
let lastname1 = document.getElementById("lastname").value;
let email1 = document.getElementById("email").value;
let feedback1= document.getElementById("feedback").value;

    if (firstname.value === "") {
        showError(firstname, "First name is required");
  
    } else {
        showSuccess(firstname);
       
    }
    if (lastname.value ==="") {
        showError(lastname,"Last Name is required");        
    }else{
        showSuccess(lastname);
        
    }
    if (email.value === "") {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Invalid email format");
    } else {
        showSuccess(email);
        
    }

    if (feedback.value === "") {
        showError(feedback, "Feedback is required");
    } else {
        showSuccess(feedback);
     

    }
    

        const store={
            "First Name":firstname1,
            "Last Name":lastname1,
            "Email":email1,
            "FeedBack":feedback1
        }


    
    localStorage.setItem("Data",JSON.stringify(store));


    alert("Successfully Updated");

});



// localStorage.setItem("First Name",firstname1);
// localStorage.setItem("Last Name",lastname1);
// localStorage.setItem("Email",email1);
// localStorage.setItem("FeedBack",feedback1);
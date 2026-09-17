// =========================================================
// CAMPUS CONNECT PORTAL
// EXPERIMENT 4
// STATE HANDLING AND INTERACTION
// =========================================================


// ================= APPLICATION STATE =================

// This object stores the current state of the application.

let appState = {

    isLoggedIn: false,

    currentUser: "",

    currentRole: "",

    formMode: ""

};


// ================= EXPLORE PORTALS =================

function showRoles() {

    const roles = document.getElementById("roles");

    roles.scrollIntoView({
        behavior: "smooth"
    });

}


// ================= SHOW LOGIN =================

function showLogin() {

    appState.formMode = "login";

    document.getElementById("form-title").textContent =
        "Login";

    document.getElementById("form-message").textContent =
        "Enter your email and password to continue.";

    document.getElementById("submit-text").textContent =
        "Login";

    document.getElementById("form-section")
        .classList.remove("hidden");

}


// ================= SHOW REGISTER =================

function showRegister() {

    appState.formMode = "register";

    document.getElementById("form-title").textContent =
        "Register";

    document.getElementById("form-message").textContent =
        "Create your Campus Connect account.";

    document.getElementById("submit-text").textContent =
        "Register";

    document.getElementById("form-section")
        .classList.remove("hidden");

}


// ================= CLOSE FORM =================

function closeForm() {

    document.getElementById("form-section")
        .classList.add("hidden");

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";

}


// ================= HANDLE LOGIN / REGISTER =================

function handleForm(event) {

    event.preventDefault();


    // Get input values

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    // Check input

    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;

    }


    // Update application state

    appState.currentUser = email;

    appState.isLoggedIn = true;


    // Check Login or Register

    if (appState.formMode === "login") {

        alert("Login successful!");

    }

    else {

        alert("Registration successful!");

    }


    // Close form

    closeForm();


    // Update interface

    updateInterface();

}


// ================= OPEN PORTAL =================

function openPortal(role) {

    // User must login first

    if (!appState.isLoggedIn) {

        alert("Please login first.");

        showLogin();

        return;

    }


    // Update selected role

    appState.currentRole = role;


    // Update interface

    updateInterface();


    // Scroll to dashboard

    document.getElementById("dashboard")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= UPDATE INTERFACE =================

function updateInterface() {

    const dashboard =
        document.getElementById("dashboard");

    const title =
        document.getElementById("dashboard-title");

    const text =
        document.getElementById("dashboard-text");


    // If logged in

    if (appState.isLoggedIn) {

        dashboard.classList.remove("hidden");


        let roleName =
            appState.currentRole;


        // Default role

        if (roleName === "") {

            roleName = "User";

        }


        // Capitalize first letter

        roleName =
            roleName.charAt(0).toUpperCase()
            + roleName.slice(1);


        title.textContent =
            "Welcome to " + roleName + " Portal";


        text.textContent =
            "Logged in as: " + appState.currentUser;

    }

    else {

        dashboard.classList.add("hidden");

    }

}


// ================= LOGOUT =================

function logout() {

    // Reset state

    appState.isLoggedIn = false;

    appState.currentUser = "";

    appState.currentRole = "";


    // Update interface

    updateInterface();


    alert("You have been logged out.");

}


// ================= INITIAL STATE =================

// Application starts in logged-out state.

updateInterface();
function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
            $("#submit").text("Message sent!");
            $("#submit").removeClass("btn-outline-danger")
            $("#submit").addClass("btn-primary")
            $("#contactModal").modal("toggle");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

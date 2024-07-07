function sendEmail(){
    var email = document.getElementById("email").value;
    var purpose = document.getElementById("purpose").value;
    var message = document.getElementById("message").value;
    var name = document.getElementById("name").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
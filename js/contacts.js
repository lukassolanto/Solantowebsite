

function sendMessage(){
    Email.send({
        SecureToken : "84369a2b-c7e5-462a-8aff-6732b2d674e4",
        To : 'akseli.siili@gmail.com',
        From : "viesti.sol@proton.me",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("Viesti lähetetty!")
    );
}
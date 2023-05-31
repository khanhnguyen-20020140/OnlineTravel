const apiRegister = 'http://localhost:3000/api/user/register';
// register
var register = document.getElementById("register-show");

var modalRegister = document.getElementById("myModal-register");

var spanRegister = document.getElementsByClassName("close")[1];

var messageRegister = document.getElementById("message-register");

const formR = document.getElementsByClassName("form")[1];

register.onclick = function() {
    modalRegister.style.animation = "fade In";
    modalRegister.style.display = "flex";
}

spanRegister.onclick = function() {
    modalRegister.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modalRegister) {
        modalRegister.style.display = "none"
    }
}

//handle register form
formR.addEventListener("submit", async function(e) {

    try {
        e.preventDefault();

        let username = document.querySelector(".form-email")
        let password = document.querySelector(".form-passwordR")
        let passwordRAgain = document.querySelector(".form-passwordRAgain")

        await fetch(apiRegister, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username.value,
                "password": password.value,
                "passwordAgain": passwordRAgain.value,
            })
            })
            .then(res => res.json())
            .then(function(data) {
                if(data.message === "Successfully registered") {
                    alert("Đăng ký thành công.")
                    modalRegister.style.display = "none";
                    modalRegister.style.animation = "fade In";
                    modalLogin.style.display = "flex";
                    return window.location = 'http://127.0.0.1:5500/FE/index.html?#login'
                } else {
                    messageRegister.innerText = data.error;
                    return location.reload
                }
            })
    } catch(error) {
        return console.log(error);
    } 
});

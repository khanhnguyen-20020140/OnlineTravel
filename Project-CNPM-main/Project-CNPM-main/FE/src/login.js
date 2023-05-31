// login

var modalLogin = document.getElementById("myModal-login");

// Get the button that opens the modal
var login = document.getElementById("login-show");

var register = document.getElementById("register-show");

// Get the <span> element that closes the modal
var spanLogin = document.getElementsByClassName("close")[0];

var submit = document.getElementById("submit")

var suggest = document.getElementById("suggest");

var messageLogin = document.getElementById("message-login");

const formL = document.getElementsByClassName("form")[0];


// When the user clicks the button, open the modal 
login.onclick = function() {
    modalLogin.style.animation = "fade In";
    modalLogin.style.display = "flex";
}

// When the user clicks on <span> (x), close the    modalLogin
spanLogin.onclick = function() {
    modalLogin.style.display = "none";
}

suggest.onclick = function() {
    modalLogin.style.display = "none";
    modalLogin.style.animation = "fade In";
    modalRegister.style.display = "flex";
}

// When the user clicks anywhere outside of the modalLogin, close it
window.onclick = function(event) {
  if (event.target ==   modalLogin) {
    modalLogin.style.display = "none";
  }
}

const apiLogin = 'http://localhost:3000/api/user/login';

// handle login

formL.addEventListener("submit", async function(e) {

    try {
        e.preventDefault();

        let username = document.querySelector(".form-user")
        let password = document.querySelector(".form-password")

        await fetch(apiLogin, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username.value,
                "password": password.value
            })
            })
            .then(res => res.json())
            .then(function(data) {
                if( data.message === "Success") {
                    localStorage.setItem('token', data.user.token);
                    localStorage.setItem('user', username.value);
                    localStorage.setItem('id', data.user._id);
                    if(data.user.role ==="admin") {
                        return window.location = 'http://127.0.0.1:5500/FE/admin/index.html';
                    }
                    return redirect(data.user.token, data.user._id);
                }
                else {
                    return messageLogin.innerHTML = data;
                }
            })

    } catch(error) {
        return console.log(error)
    } 
});


function redirect(token, userID) {
    if(token) { 
        return window.location= `http://127.0.0.1:5500/FE/index.html?/id=${userID}`;
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


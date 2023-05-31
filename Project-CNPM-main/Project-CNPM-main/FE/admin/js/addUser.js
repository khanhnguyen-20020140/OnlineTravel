const apiAddUser = 'http://localhost:3000/api/admin/user';
const username = document.getElementById("inputUser");
const password = document.getElementById("passwordUser")

//add user
document.getElementById("submitUser").onclick = async function () {
    try {
        await fetch(apiAddUser,{
            method: "POST",
            headers: {                      
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username" : username.value,
                "password" : password.value
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
}   
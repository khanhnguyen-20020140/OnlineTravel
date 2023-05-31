
const showUser = document.getElementById("showUser");
const showAgain = document.getElementById("showAgain")

const getUser ={
    users: [],
    
    render: function () {
        const htmls = this.users.map((user) => {
          
          return `
            <tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user._id}</td>
            <td class="option" onclick="deleteU(this)" id="${user._id}" >
            <i id="${user._id}" class="fa-solid fa-circle-trash"></i>
            </td>
            </tr>   
            `
        });
        document.getElementsByClassName("dataUser")[0].innerHTML = htmls.join("");
      },
      start: function () {

        // get data user

          [showUser, showAgain].map(element =>element.addEventListener("click", async function() {
            try {
                await fetch('http://localhost:3000/api/admin/user',{
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
                .then(res => res.json())
                .then(data => {
                    getUser.users = data.users
                    console.log(getUser)
                    getUser.render()
                })
            } catch(error) {
                console.log(error)
            }
          })
          )
        }
}
getUser.start();

//function delete user

async function deleteU(e) {
  console.log(e)
  console.log(e.id)
  if(e) {
      var id = e.id;
      const apiDeleteUser = `http://localhost:3000/api/admin/user/${id}`;
      try {
          await fetch(apiDeleteUser, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => console.log(data))  
      } catch (error) {
          console.log(error)
      }
  }
}



const btnReload = document.getElementById("reLoadMusics");
const showMusics = document.getElementById("showMusics");

const getMusics ={
    songs: [],
    
    render: function () {
        const htmls = this.songs.map((song) => {
          
          return `
            <tr>
            <td>${song.name}</td>
            <td>${song.singer}</td>
            <td class="option" onclick="deleteMusic(this)" id="${song._id}" >
            <i id="${song._id}" class="fa-solid fa-circle-trash"></i>
            </td>
            </tr>   
            `
        });
        document.getElementsByClassName("dataMusics")[0].innerHTML = htmls.join("");
      },
      
      start: function () {
          [showMusics, btnReload].map(element => element.addEventListener("click", async function() {
            try {
                await fetch('http://localhost:3000/api/admin/music',{
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
                .then(res => res.json())
                .then(data => {
                    getMusics.songs = data.musics
                    getMusics.render()
                })
            } catch(error) {
                console.log(error)
            }
          })
      )
      }
}
getMusics.start();

async function deleteMusic(e) {
  console.log(e)
  console.log(e.id)
  if(e) {
      var id = e.id;
      const apiDeleteUser = `http://localhost:3000/api/admin/music/${id}`;
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


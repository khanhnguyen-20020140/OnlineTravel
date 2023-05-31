
const btnVideos = document.getElementById("reloadVideo");
const showVideos = document.getElementById("showVideos");

const getVideos ={
    videos: [],
    
    render: function () {
        const htmls = this.videos.map((video) => {
          
          return `
            <tr>
            <td>${video.title}</td>
            <td>${video.image}</td>
            <td class="option" onclick="deleteMusic(this)" id="${video._id}" >
            <i id="${video._id}" class="fa-solid fa-circle-trash"></i>
            </td>
            </tr>   
            `
        });
        document.getElementsByClassName("dataVideos")[0].innerHTML = htmls.join("");
      },
      
      start: function () {
          [showVideos, btnVideos].map(element => element.addEventListener("click", async function() {
            try {
                await fetch('http://localhost:3000/api/admin/video',{
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
                .then(res => res.json())
                .then(data => {
                    getVideos.videos = data.videos
                    getVideos.render()
                })
            } catch(error) {
                console.log(error)
            }
          })
      )
      }
}
getVideos.start();

async function deleteMusic(e) {
  console.log(e.id)
  if(e) {
      var id = e.id;
      const apiDeleteVideo = `http://localhost:3000/api/admin/video/${id}`;
      try {
          await fetch(apiDeleteVideo, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => console.log(data))  
      } catch (error) {
          console.log(error)
      }
  }
}


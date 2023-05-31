// get playlist
const apiGetPl = 'http://localhost:3000/api/user/playlist';

var showList = document.getElementById("showlists") 
console.log(showList)

showList.onclick = async function getPlaylist() {
    try {
          await fetch(apiGetPl, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
            user: JSON.stringify({
                id: localStorage.getItem('id'),
            })
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const html = `<i class="fa-solid fa-compact-disc"></i>`
            for(let i = 1; i < data.playlist.length + 1 ; i++) {
                document.getElementsByClassName("music")[i].innerHTML = html
            }
            html1 = `<i class="fa-solid fa-plus"></i>`
            document.getElementsByClassName("music")[data.playlist.length+1].innerHTML = html1
          })
      } catch(error) {
        console.log(error)
      }
  }
  

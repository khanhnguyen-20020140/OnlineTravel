
var modelAddPlaylist = document.getElementById("myModal-playlist")

var createPlaylist = document.getElementById("btn-playlist");

var messagePl = document.getElementById("message-playlist");

const apiGetAllPl = 'http://localhost:3000/api/user/addplaylist'

// console.log(modelAddPlaylist)

function addElementPl(count) {
      const htmls = `<i class="fa-solid fa-compact-disc" id="icon" ></i>

                            <div class="player" style="cursor: pointer;">
                                <div class="dashboard">
                                    
                                    <header>
                                        <h4 style="text-align:center;display: flex;align-items:baseline;justify-content: center;color:red;font-size: 0.75em;margin-bottom: 0px;padding-top: 5px;background-color: aliceblue;margin-top: 0;padding-bottom: 10px;">Now playing:</h4>
                                
                                        <h2 class="h22" style="margin-top: 13px;margin-bottom: 20px;font-size: 0.7em;">Music</h2>
                                    
                                    </header>
                                
                                    <!-- CD -->
                                    <div class="cd">
                                    <div class="cd-thumb" style="background-image: url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg')">
                                    </div>
                                    </div>
                                
                                    <!-- Control -->
                                    <div class="control">
                                    <div class="btn btn-repeat">
                                        <i class="fas fa-redo"></i>
                                    </div>
                                    <div class="btn btn-prev">
                                        <i class="fas fa-step-backward"></i>
                                    </div>
                                    <div class="btn btn-toggle-play">
                                        <!-- <i class="fa-brands fa-google-play"></i> -->
                                        <i class="fas fa-pause icon-pause"></i>
                                        <i class="fas fa-play icon-play"></i>
                                    </div>
                                    <div class="btn btn-next">
                                        <i class="fas fa-step-forward"></i>
                                    </div>
                                    <div class="btn btn-random">
                                        <i class="fas fa-random"></i>
                                    </div>
                                    </div>
                                
                                    <input id="progress" class="progress" type="range" value="0" step="1" min="0" max="100">
                                
                                    <audio id="audio" src=""></audio>
                                </div>
                                
                                <!-- Playlist -->
                                <div class="playlist">
                                    
                                </div>
                            </div>`
        document.getElementsByClassName("music")[count].innerHTML = htmls;
        count++;
        html = `<i class="fa-solid fa-plus"></i>`
        if(!document.getElementsByClassName("music")[count]) {
          return
        }
        return document.getElementsByClassName("music")[count].innerHTML = html;
}

document.getElementsByClassName("music")[1].onclick = async function () {
  try {
        await fetch(apiGetAllPl, {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
              id: localStorage.getItem('id'),
              name: "Play list 2"
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          addElementPl(1);
        })
    } catch(error) {
      console.log(error)
    }
}


// window.onclick = function(event) {
//     if (event.target ==   modelAddPlaylist) {
//       modelAddPlaylist.style.display = "none";
//     }
//   }

// document.getElementsByClassName("addPlayList")[0].addEventListener('click', async function(){
//     try {
//         const response = await fetch('http://localhost:3000/api/user/addplaylist', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             },
//             body: JSON.stringify({
//                 token: localStorage.getItem('token'),
//                 id : localStorage.getItem('id')
//             })
//         });
//         const data = await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// });



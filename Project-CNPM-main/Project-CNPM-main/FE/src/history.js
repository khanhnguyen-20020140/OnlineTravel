

const historyMusic ={
    songs: [],
    
      render: function () {
        const htmls = this.songs.map((song, index) => {
          
          return `
          <div class="song ${ index === this.currentIndex ? 'active' : '' }" data-index="${index}">
                      <div class="thumb" style="background-image: url('${song.image}')">
                          
                      </div>
                      <div class="body">
                          <h3 class="title">${song.name}</h3>
                          <p class="author">${song.singer}</p>
                      </div>
                      <div class="option">
                          <i class="fas fa-ellipsis-h"></i>
                      </div>
                  </div>
                        `;
        });
        $(".displayhistory").innerHTML = htmls.join("");
      },
      start: function () {

        // get history
        if(localStorage.getItem('token')) {
          document.getElementsByClassName("history")[0].addEventListener('click', async function() {
            try {
                  await fetch('http://localhost:3000/api/user/history',{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    user: JSON.stringify({
                      id : localStorage.getItem('id')
                    })
                  })
                  .then(res => res.json())
                  .then(data => {
                    historyMusic.songs = data.musics.reverse();
                    historyMusic.render();
                  })
            } catch(error) {
                  console.log(error)
            }
        })  
      }
    }
}
historyMusic.start();


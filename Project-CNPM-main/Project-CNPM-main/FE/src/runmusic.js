// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
const apiGetYourList = 'http://localhost:3000/api/user/yourlist';


const yourPlayer = $(".yourlist");
const yourCd = $(".yourcd");
const yourHeading = $(".yourh22");
const yourCdThumb = $(".yourcd-thumb");
const yourAudio = $("#youraudio");
const yourPlayBtn = $(".yourbtn-toggle-play");
const yourProgress = $("#yourprogress");
const yourPrevBtn = $(".yourbtn-prev");
const yourNextBtn = $(".yourbtn-next");
const yourRandomBtn = $(".yourbtn-random");
const yourRepeatBtn = $(".yourbtn-repeat");
const yourPlaylist = $(".yourlistsong");

const yourList = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},

  songs: []
  ,
  setConfig: function (key, value) {
    this.config[key] = value;
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song ${ index === this.currentIndex ? 'active' : '' }" data-index="${index}">
                  <div class="thumb" style="background-image: url('${song.image}')">
                      
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name} </h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="yOption" data-index="${index}">
                    <i class="fa-solid fa-circle-minus"></i>
                  </div>
              </div>
                    `;
    });
    yourPlaylist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    try {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  } catch(error) {
    console.log(error)
  }
  },
  handleEvents: function () {
    const _this = this;
    const yourCdWidth = yourCd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const yourCdThumbAnimate = yourCdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 20000, // 10 seconds
      iterations: Infinity
    });
    yourCdThumbAnimate.pause();


    //scroll
    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    // document.onscroll = function () {
    //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //   const newCdWidth = cdWidth - scrollTop;

    //   cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
    //   cd.style.opacity = newCdWidth / cdWidth;
    // };

    // Xử lý khi click play
    // Handle when click play
    yourPlayBtn.onclick = function () {
      if (_this.isPlaying) {
        yourAudio.pause();
      } else {
        yourAudio.play();
      }
    };

    // Khi song được play
    // When the song is played
    yourAudio.onplay = function () {
      _this.isPlaying = true;
      yourPlayer.classList.add("playing");
      yourCdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    yourAudio.onpause = function () {
      _this.isPlaying = false;
      yourPlayer.classList.remove("playing");
      yourCdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song yourProgress changes
    yourAudio.ontimeupdate = function () {
      if (yourAudio.duration) {
        const yourProgressPercent = Math.floor(
          (yourAudio.currentTime / yourAudio.duration) * 100
        );
        yourProgress.value = yourProgressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    yourProgress.onchange = function (e) {
      const seekTime = (yourAudio.duration / 100) * e.target.value;
      yourAudio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    yourNextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      yourAudio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    yourPrevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      yourAudio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    yourRandomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      yourRandomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    yourRepeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      yourRepeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi yourAudio ended
    // Handle next song when yourAudio ended
    yourAudio.onended = function () {
      if (_this.isRepeat) {
        yourAudio.play();
      } else {
        yourNextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào yourPlaylist
    // Listen to yourPlaylist clicks
    yourPlaylist.onclick = function (e) {
      console.log(e.target);
      const songNode = e.target.closest(".song:not(.active)");
      const indexNode = e.target.closest(".yOption")

      if (songNode || indexNode) {

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (indexNode) {
          e.stopPropagation();
          const index = Number(indexNode.dataset.index)
          if(localStorage.getItem("token")) {
            return deleteMusicYourList(_this.songs[index]._id);
          }        
        }
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          yourAudio.play();
        }
        
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    yourHeading.textContent = yourList.currentSong.name;
    yourCdThumb.style.backgroundImage = `url('${yourList.currentSong.image}')`;
    yourAudio.src = yourList.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    if(localStorage.getItem('token')) {
      document.getElementsByClassName("favorite")[0].addEventListener("click", async function() {
        try {
          await fetch(apiGetYourList, {
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
            console.log(data.musics)
            yourList.songs = data.musics;
            // Gán cấu hình từ config vào ứng dụng
            // Assign configuration from config to application
            yourList.loadConfig();

            // Định nghĩa các thuộc tính cho object
            // Defines properties for the object
            yourList.defineProperties();

            // Lắng nghe / xử lý các sự kiện (DOM events)
            // Listening / handling events (DOM events)
            yourList.handleEvents();

            // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
            // Load the first song information into the UI when running the app
            yourList.loadCurrentSong();

            // Render yourPlaylist
            yourList.render();
                  
              })
        } catch(error) {
          console.log(error);
        }
    })   
  }

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    yourRandomBtn.classList.toggle("active", this.isRandom);
    yourRepeatBtn.classList.toggle("active", this.isRepeat);
  }
};

yourList.start();


async function deleteMusicYourList(idSong) {
  try{
    await fetch('http://localhost:3000/api/user/yourlist/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        id : idSong
      }),
      user: JSON.stringify({
        id: localStorage.getItem('id')
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  } catch(error) {
    console.log(error)
  }
}

// document.getElementsByClassName("favorite")[0].addEventListener("click", async function() {
//   try {
//     await fetch(apiGetYourList, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       },
//       user: JSON.stringify({
//         id : localStorage.getItem('id')
//       })
//     })
//     .then(res => res.json())
//     .then(data => {

//     })
//   } catch(error) {
//     console.log(error);
//   }
// })
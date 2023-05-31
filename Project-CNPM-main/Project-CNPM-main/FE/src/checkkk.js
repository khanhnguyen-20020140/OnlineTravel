// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $(".h22");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

// audio.crossOrigin = 'anonymous';


var api = 'http://localhost:3000/api/admin/music'


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [{}]
  ,
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      // song.path.crossOrigin = "anonymous";
      return `
      <div class="song ${ index === this.currentIndex ? 'active' : '' }" data-index="${index}">
                  <div class="thumb" style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option" data-index="${index}">
                  <i class="fa-duotone fa-plus"></i>
                  </div>
          </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    console.log(Object)
      
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 20000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();


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
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
    //   console.log("hii");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
        
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = async function  (e) {
  
      const songNode = e.target.closest(".song:not(.active)");
      const indexNode = e.target.closest(".option")

      if (songNode || indexNode) {

      if(indexNode) {
        e.stopPropagation();
        const index = Number(indexNode.dataset.index)
        if(localStorage.getItem("token")) {
          return addMusicToYourList(_this.songs[index]._id)
        }
      }
      
      // if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        // console.log(Number(songNode.dataset.index));
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
          if(localStorage.getItem('token')) {
            getPlayMusic(_this.songs[_this.currentIndex]._id);
          }
        }
        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        // if (e.target.closest(".option")) {

        //     e.stopPropagation();
        //     // e.target.closest(".option").stopPropagation();
        //     if(localStorage.getItem("token")) {
        //       addMusicToYourList(_this.songs[_this.currentIndex]._id)
        //     }
        // }
      }
    }
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
    var songCurrent = app.currentSong;
    heading.textContent = songCurrent.name;
    
    cdThumb.style.backgroundImage = `url('${songCurrent.image}')`;
    audio.src = songCurrent.path
    // audio.src.crossOrigin ='anonymous';
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
  start: async function () {
    // getListMusic(function (data) {
      document.getElementsByClassName("list")[0].addEventListener('click', async function() {
        try {
          await fetch(api)
            .then(res => res.json())
            .then(data => {
              app.songs = data.musics;
              console.log(app.songs)
              app.loadConfig();
              app.defineProperties();
              app.handleEvents();
              app.loadCurrentSong();
              app.render();
            })
        } catch (error) {
          console.log(error)
        }
      })

    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();


//get music playing

async function getPlayMusic(idSong) {
  try{
    await fetch(`http://localhost:3000/api/user/play/${idSong}`, {
      method: 'POST',
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

// add music to user list

async function addMusicToYourList(idSong) {
  try{
    await fetch('http://localhost:3000/api/user/yourlist/add', {
      method: 'POST',
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





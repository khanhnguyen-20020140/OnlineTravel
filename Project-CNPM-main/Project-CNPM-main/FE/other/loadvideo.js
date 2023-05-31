function Render() {
    const htmls = marvel.map((video) => {
    return `
    <div class="suggestion euro vid select" onmouseenter="demo()" onmouseleave="exdemo()" onclick="beach3()">
                        <div id="img-demo">                            
                            <img  src="https://i.ytimg.com/vi/tRp4fAXEOEU/maxresdefault.jpg"  alt="">
                            <h6 style="color: aliceblue;"> Thanos Kills Vision</h6>
                        </div>
                        
                        <video  id="video-demo"  autoplay muted loop >
                           
                            <source id="change-demo" src="https://www.dropbox.com/s/0waqd1tbn5m7cg0/Thanos%20Kills%20Vision%20Scene%20-%20Thanos%20Uses%20Time%20Stone%20-%20Avengers-%20Infinity%20War%20%282018%29%20Movie%20Clip.mp4?raw=1">
                        </video>
                    </div>`
    })
    
}

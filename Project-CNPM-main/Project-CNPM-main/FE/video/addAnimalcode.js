const videoanimal ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/837ysacqanhgyuy/anime1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/dk92ko9nbmy64ut/anime1.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/2rvtlfuq1b7jy0f/animal2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/0nkobwuwx9xo8na/animal2.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/3oyf160x1rcldnd/animal3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/gb5axmw3g9cvixx/animal3.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/s7bgb335wxt5p8b/animal4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/c48vg4lp5s66zp0/animal4.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/b7jggjx45006cbb/animal5.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3pq98tvei6n7bb0/animal5.mp4?raw=1",
            title:"New York",
        },
    ],

    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demoanimal(${this.playVid+vidd.st})" onmouseleave="exdemoanimal(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-animal${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-animal${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-animal${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-animal${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-animal${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demoanimal${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-animal${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-animal${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemoanimal${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-animal${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-animal${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".animal .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
      }
}
videoanimal.start();
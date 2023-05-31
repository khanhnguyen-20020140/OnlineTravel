const videoanime ={
    playVid :1,
    vidd: [
        {   st:0,

            img:"https://www.dropbox.com/s/c2613zid9ub7rwo/anime1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/fyep5865puv7pdq/anime1.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/63lfwyw10al4rmz/anime2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/grl530uaecxa14z/anime2.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/0xnuam6trnx2ebq/anime3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/a04acd478ku1dqp/anime3.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/3gt548820nn7xq3/anime4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/vyc6eniaaz08n5q/anime4.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/ygkjca8ywg60we8/anime5.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3n102dheadmv4yd/anime5.mp4?raw=1",
            title:"New York",
        },
        
    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demoanime(${this.playVid+vidd.st})" onmouseleave="exdemoanime(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-anime${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-anime${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-anime${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-anime${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-anime${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demoanime${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-anime${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-anime${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemoanime${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-anime${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-anime${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                    </script>
                        `;
        });
        $(".anime .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videoanime.start();
const videocode ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/yvo6wj1tai62z59/2hr%20quiet%20music.jpg?raw=1",            
            path:"https://www.dropbox.com/s/wwnofx236td7s5z/2hr%20quiet%20music.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/7uk4xqb8sundrmv/Building%20Personal%20Website.jpg?raw=1",            
            path:"https://www.dropbox.com/s/oazq1o42b1lydo4/building%20personal%20website.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/q2d013bhoft5yv6/cod1.png?raw=1",            
            path:"https://www.dropbox.com/s/mnb2my4kkld7tmt/Code%20With%20Me%20-%201hr%20Real%20Time%20w-%20Lo-Fi%20Beats.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            
            img:"https://www.dropbox.com/s/x42k1u9zv6c1l7e/codeWithMe.jpg?raw=1",            
            path:"https://www.dropbox.com/s/mji51mfp3ykjbtn/code1.mp4raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/zed8bgppzkcd0a7/codeWithMe2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3w9dbxgcaer0yk7/codeWithMe2.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="democode(${this.playVid+vidd.st})" onmouseleave="exdemocode(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-code${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-code${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-code${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-code${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-code${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function democode${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-code${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-code${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemocode${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-code${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-code${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".code .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videocode.start();
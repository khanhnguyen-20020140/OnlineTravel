const videonature ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/hve5kyogp52sj83/nature4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/6oy7f5o1sys2rah/nature4.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/0zwj6l1bbjcv6og/nature5.jpg?raw=1",            
            path:"https://www.dropbox.com/s/d2p7docz1sjncvy/nature5.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/3h9xmjho7uzwvy5/nature1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/6r5wlf7unb1ksw9/nature1.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/8r9alk60cilduex/nature2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/bp2vyxl0hz5zb56/nature2.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/mkh3kcko9icif6h/nature3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/dq6envo7ck8f0q5/nature3.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demonature(${this.playVid+vidd.st})" onmouseleave="exdemonature(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-nature${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-nature${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-nature${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-nature${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-nature${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demonature${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-nature${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-nature${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemonature${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-nature${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-nature${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".nature .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videonature.start();
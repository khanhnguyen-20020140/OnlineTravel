const videovietnam ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/to5acsw982qivs4/Ha%20Long%20Bay.jpg?raw=1",            
            path:"https://www.dropbox.com/s/oyo2e2i0p42e4n5/Ha%20Long%20Bay.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://theplanetd.com/images/Best-Things-to-do-in-Hanoi-Vietnam.jpg",            
            path:"https://www.dropbox.com/s/bnry33m5b5dhm62/Ha%20Noi.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://quangbinhgo.com/wp-content/uploads/2020/09/hang-son-doong-cave-phong-nha-tourism.jpg",            
            path:"https://www.dropbox.com/s/d68ohhcs6hn4r1w/Hang%20Son%20Doong.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://icdn.dantri.com.vn/thumb_w/660/2021/08/31/23986881529897329112401582810254906050405806n-1630403807603.jpeg",            
            path:"https://www.dropbox.com/s/d68iom92hal6pfr/Non%20Nuoc%20Cao%20Bang.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://cdn.baogiaothong.vn/upload/images/2020-2/article_img/2020-06-30/phuong-thanh-tham-gia-thi-cong-hang-loat-du-an-cao-toc-trong-do-co-tuyen-cao-toc-ha-noi-lao-cai-1593522452-width1004height565.jpg",            
            path:"https://www.dropbox.com/s/1rhyny8p9ahrm8g/Viet%20Nam.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demovietnam(${this.playVid+vidd.st})" onmouseleave="exdemovietnam(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-vietnam${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-vietnam${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-vietnam${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-vietnam${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-vietnam${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demovietnam${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-vietnam${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-vietnam${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemovietnam${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-vietnam${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-vietnam${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".vietnam .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videovietnam.start();
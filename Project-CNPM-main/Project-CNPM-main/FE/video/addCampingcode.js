const videocamping ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/61cwodbpej4654u/camping1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3cs16bv18a91ts7/camping1.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/on20s2gbxwrctu8/camping2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/e7koaon6g71zw9o/camping2.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/qkj4om1bsdjmvn0/camping3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3pgqdiu4n8p4q89/camping3.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/xxybdasdjvhaei4/camping4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/0bgp1ume3fefoxs/camping4.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/d8akrrxagupsrzd/camping5.jpg?raw=1",            
            path:"https://www.dropbox.com/s/mj4hde1gtrgvh5n/camping5.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="democamping(${this.playVid+vidd.st})" onmouseleave="exdemocamping(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-camping${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-camping${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-camping${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-camping${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-camping${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function democamping${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-camping${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-camping${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemocamping${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-camping${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-camping${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".camping .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videocamping.start();
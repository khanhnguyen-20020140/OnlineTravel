const videocooking ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/tslfrlyab1tqkxr/cookingASMR1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/0di1kgllsuu22f1/cookingASMR1.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/7loh9qem4n9qjdz/cookingASMR2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/s6cod2l8is0wdx7/cookingASMR2.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/b4alwxnouzz5e4s/cookingASMR3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/ifu5nq3zdcmaawx/cookingASMR3.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/s7rh8wxk0js5euf/cookingASMR4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/3rw8e0utkky14j2/cookingASMR4.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/s7h0o8woxobtdu3/cookingASMR5.jpg?raw=1",            
            path:"https://www.dropbox.com/s/zvtmqr1r28eimup/cookingASMR5.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="democooking(${this.playVid+vidd.st})" onmouseleave="exdemocooking(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')" >
                        <div  id="img-demo-cooking${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-cooking${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-cooking${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-cooking${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-cooking${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function democooking${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-cooking${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-cooking${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemocooking${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-cooking${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-cooking${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".cooking .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videocooking.start();
const videostudy ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/jfrzg4lquqcav99/studyWithJennyHuynh.jpg?raw=1",            
            path:"https://www.dropbox.com/s/nle4wyver6fzry9/studyWithJennyHuynh.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/930kqeyqwmsqtby/studyWithMe1.jpg?raw=1",            
            path:"https://www.dropbox.com/s/pnuhljbb8eoqw5l/studyWithMe1.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/zmhugx6egdbddc3/studyWithMe2.jpg?raw=1",            
            path:"https://www.dropbox.com/s/1np56k89wnc4jc4/studyWithMe2.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/lvsykjkh91cgke5/studyWithMe3.jpg?raw=1",            
            path:"https://www.dropbox.com/s/5zhgzpb7nf9irw6/studyWithMe3.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/hvj28bv94m07aik/studyWithMe4.jpg?raw=1",            
            path:"https://www.dropbox.com/s/i13ki9hflesxx2t/studyWithMe4.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demostudy(${this.playVid+vidd.st})" onmouseleave="exdemostudy(${this.playVid+vidd.st})" onclick="playVid('${vidd.path}')">
                        <div  id="img-demo-study${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-study${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-study${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-study${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-study${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demostudy${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-study${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-study${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemostudy${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-study${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-study${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".study .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videostudy.start();
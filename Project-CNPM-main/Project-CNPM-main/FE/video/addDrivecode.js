const videodrive ={
    playVid :1,
    vidd: [
        {   st:0,
            
            img:"https://www.dropbox.com/s/fkbnwovewxfjiix/Tokyo%204k.jpg?raw=1",            
            path:"https://www.dropbox.com/s/xq3ixm4xevm7qf1/Tokyo%204k.mp4?raw=1",
            title:"Tokyo",
        },
        {   st:1,
            
            img:"https://www.dropbox.com/s/fub2lk2hj7w7j6f/Driving%20Downtown%20Amsterdam.jpg?raw=1",            
            path:"https://www.dropbox.com/s/qvhg9uhj4tmqflc/Driving%20downtown%20Amsterdam.mp4?raw=1",
            title:"Amsterdam",
        },
        {   st:2,
            img:"https://www.dropbox.com/s/ffi1fkifdd7993r/Paris.jpg?raw=1",            
            path:"https://www.dropbox.com/s/7rp235nf3k9qy2d/Paris%20Drive%204K%20-%20Sunset%20Drive%20-%20France.mp4?raw=1",
            title:"Paris",
        },
        {   st:3,
            img:"https://www.dropbox.com/s/8oc3rkm6qwfaj9y/London.jpg?raw=1",            
            path:"https://www.dropbox.com/s/ka7zf8kfcoyv2rz/London.mp4?raw=1",
            title:"London",
        },
        {   st:4,
            img:"https://www.dropbox.com/s/8886tmcvl02oafi/newyork.jpg?raw=1",            
            path:"https://www.dropbox.com/s/qg1wbsa0wcvyve1/New%20York%20City%204K%20-%20Neon%20Nightlife%20Drive.mp4?raw=1",
            title:"New York",
        },
        


    ],

    
    render: function () {
        
        const htmls = this.vidd.map((vidd,index) => {
          return `
    

      <div class="select" style=" width: 293px;height: 198px;" onmouseenter="demodrive(${this.playVid+vidd.st})" onmouseleave="exdemodrive(${this.playVid+vidd.st})"
       onclick="playVid('${vidd.path}')" >
                        <div  id="img-demo-drive${index=this.playVid+vidd.st}">                            
                            <img  src="${vidd.img}"  alt="">
                            <h6 style="color: aliceblue;"> ${vidd.title}</h6>
                        </div>
                        
                        
                        
                        <video  id="video-demo-drive${index=this.playVid+vidd.st}"  autoplay muted loop >
                           
                            <source id="change-demo-drive${index=this.playVid+vidd.st}" src="${vidd.path}">
                        </video>
                    </div>
                    <style>
                        #img-demo-drive${index=this.playVid+vidd.st}{
                        display: block;
                        width: 100%;
                        height: 85%;
                    }

                    #video-demo-drive${index=this.playVid+vidd.st}{
                        
                        display: none;
                        width: 100%;
                        height: 100%;
                    }
                    </style>
                    <script type="text/javascript">
                    function demodrive${index=this.playVid+vidd.st}() {
                        console.log("aaa");
                        var t="z-index";
                        var obj1=document.getElementById("img-demo-drive${index=this.playVid+vidd.st}");
                        obj1.style.display="none";
                        var obj=document.getElementById("video-demo-drive${index=this.playVid+vidd.st}");
                        obj.style.display="block";
                        obj.style.t="99";
                        
                    }
                    function exdemodrive${index=this.playVid+vidd.st}() {
                        var obj3=document.getElementById("video-demo-drive${index=this.playVid+vidd.st}");
                        var obj4=document.getElementById("img-demo-drive${index=this.playVid+vidd.st}");
                        obj3.style.display="none";
                        obj4.style.display="block"
                    }
                        
                        
                    </script>
                        `;
        });
        $(".drive .vid").innerHTML = htmls.join("");
      },
      start: function () {
            this.render();
           
         
      }
}
videodrive.start();

//https://www.dropbox.com/s/qg1wbsa0wcvyve1/New%20York%20City%204K%20-%20Neon%20Nightlife%20Drive.mp4?raw=1
// onclick="playVid(" https:="" www.dropbox.com="" s="" qg1wbsa0wcvyve1="" new%20york%20city%204k%20-%20neon%20nightlife%20drive.mp4?raw="1&quot;)&quot;"
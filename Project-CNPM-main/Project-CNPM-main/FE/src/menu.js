function music(){
    var obj = document.getElementById("selection");
    var obj1=document.getElementById("displayhistory");
    var obj2=document.getElementById("player");
    var obj3=document.getElementById("yourlist") 

    obj.style.display="block";

    if(obj3.style.display=="block"){
        obj3.style.display="none";
    }

    if(obj2.style.display=="block"){
        obj2.style.display="none";
    }

    if(obj1.style.display=="block"){
        obj1.style.display="none";
    }
}

function dismusic(){
    var obj = document.getElementById("selection");
    obj.style.display="none";

    }

function list(){
    dismusic();
    var obj=document.getElementById("player");
    obj.style.display="block";
}

function history(){
    dismusic();
    var obj = document.getElementById("displayhistory");
    obj.style.display="block";
}

function yourlist(){
    dismusic();
    var obj = document.getElementById("yourlist");
    obj.style.display="block";
}
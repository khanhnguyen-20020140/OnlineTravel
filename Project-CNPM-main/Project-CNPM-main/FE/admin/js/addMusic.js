const apiAddUser = 'http://localhost:3000/api/admin/music';
const nameS = document.getElementById("nameSong");
const singer = document.getElementById("singerSong");
const path = document.getElementById("pathSong");
const image = document.getElementById("imageSong");
const message = document.getElementsByClassName("messageAddMusic")[0];

// add music

document.getElementById("submitMusic").onclick = async function () {
    try {
        console.log(nameS.value)
        await fetch("http://localhost:3000/api/admin/music",{
            method: "POST",
            headers: {                      
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": nameS.value,
                "singer": singer.value,
                "path": path.value,
                "image":image.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            return message.innerHTML = data.message;
        })
    } catch (error) {
        console.log(error)
    }
}   
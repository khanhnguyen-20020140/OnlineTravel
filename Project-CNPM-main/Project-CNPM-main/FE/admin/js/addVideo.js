const apiAddVideo = 'http://localhost:3000/api/admin/video';
const title = document.getElementById("titleVideo");
const path = document.getElementById("pathVideo");
const image = document.getElementById("imageVideo");
const message = document.getElementsByClassName("messageAddVideo")[0];

// add music

document.getElementById("submitVideo").onclick = async function () {
    try {
        await fetch("http://localhost:3000/api/admin/video",{
            method: "POST",
            headers: {                      
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": title.value,
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
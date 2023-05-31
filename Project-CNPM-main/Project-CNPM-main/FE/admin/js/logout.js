
// log out admin
document.getElementById("adminLogout").addEventListener('click', async function(){

        try {
            const response = await fetch('http://localhost:3000/api/user/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    token: localStorage.getItem('token'),
                    id : localStorage.getItem('id')
                })
            });
            const data = await response.json();
            if(data.token === null){
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('id');
                return window.location.href = 'http://127.0.0.1:5500/FE/index.html?';
            }
        } catch (error) {
            console.log(error);
        }
    });



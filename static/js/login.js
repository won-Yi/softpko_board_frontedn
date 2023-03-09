

async function handleLogin(){
    const email = document.getElementById('inputemail').value
    const password = document.getElementById('inputPassword').value

    const response = await fetch(`http://127.0.0.1:8000/user/api/token/`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({
            "email":email,
            "password": password
        })
    })


    if (response.status === 200){
    console.log('로그인 성공')
    const response_json = await response.json()

    localStorage.setItem('access', response_json.access)
    localStorage.setItem('refresh', response_json.refresh)

    const base64Url = response_json.access.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    localStorage.setItem('payload', jsonPayload)
    localStorage.setItem('handsup', JSON.stringify({}));

    window.location.href = "/board/index.html"

    
    }else if(response.status === 401){
        alert('이메일과 비밀번호를 확인해주세요.')
    }

}

// 로그아웃 
async function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
}
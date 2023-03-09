

async function handleJoin(){
    const email = document.getElementById('inputemail').value
    const username = document.getElementById('inputname').value
    const password = document.getElementById('inputPassword').value

    console.log(email, password)

    const response = await fetch(`http://127.0.0.1:8000/user/join/`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({
            "email":email,
            "username":username,
            "password": password
        })
    })

    if (response.status === 200){
    console.log('로그인 성공')

    window.location.href = "/login.html"

    }else if(response.status === 401){
        alert('다시 가입을 시도해주세요')
    }

}




async function handlePost(){

    // local에서 userID값 가져오기
    const local =  window.localStorage.getItem('payload')
    const personObj = JSON.parse(local);
    user = personObj['user_id']
    // console.log(user)

    // 게시글내용
    const title = document.getElementById('inputtitle').value
    const content = document.getElementById('inputtextarea').value
   
    const response = await fetch(`http://127.0.0.1:8000/board/`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({
            "title":title,
            "user": user,
            "content": content
        })
    })


    if (response.status === 200){
        alert('게시글이 등록되었습니다.')
        window.location.href = "/board/index.html"
    
    }else if(response.status === 401){
        alert('게시글 등록에 실패하였습니다.')
    }

}

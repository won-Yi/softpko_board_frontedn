window.onload = function(){
    id=window.location.search.split('=')[1]

    // local에서 userID값 가져오기
    const local =  window.localStorage.getItem('payload')
    const personObj = JSON.parse(local);
    user_id = personObj['user_id']
    console.log(user_id)
    
    $.ajax({
        
        type: 'GET',
        url: `http://127.0.0.1:8000/board/${id}`,
        dataType: 'json',
        success: function(result) {
            
            console.log(result)
            const title =result['title']
            const user = result['user']
            const content = result['content']
            
            console.log(user)

            
            // $('#title_modify').append(title_template)
            content_template=`${content}`
            
            $('input[name=inputvalue]').attr('value',title);
            $('#inputtextarea').append(content_template)

        },
        error: function() {
            console.log('통신에러')
        }
    });
}


async function handleModfy(){

    id=window.location.search.split('=')[1]
    

    // local에서 userID값 가져오기
    const local =  window.localStorage.getItem('payload')
    const personObj = JSON.parse(local);
    user = personObj['user_id']
    // console.log(user)

    // 게시글내용
    const title = document.getElementById('inputtitle').value
    const content = document.getElementById('inputtextarea').value
   
    const response = await fetch(`http://127.0.0.1:8000/board/${id}/`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'PUT',
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


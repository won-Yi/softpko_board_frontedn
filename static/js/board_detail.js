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

            title_template =`<div>${title}</div>`
            content_template=`<div>${content}</div>`
            button_template =` <div>
            <button type="button" class="btn btn-warning"><a href="/board/board_modify.html?id=${id}">수정</a></button>
            </div>
            <div>
                <button type="button" id="deletebnt" class="btn btn-danger" >삭제</button>
            </div>`

            

            $('#titlediv').append(title_template)
            $('#contentdiv').append(content_template)

            if (user_id === user){
                $('#buttons').append(button_template)
            }
            

        },
        error: function() {
            console.log('통신에러')
        }
    });
}
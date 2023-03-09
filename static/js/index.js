window.onload = function(){
        $.ajax({
        
            type: 'GET',
            url: 'http://127.0.0.1:8000/board/',
            dataType: 'json',
            success: function(result) {
                
                console.log(result)

                
              for(i =0 ; i < result.length ; i++){
                const title = result[i]['title']
                const id = result[i]['id']
                const updated_at = result[i]['updated_at']
                const username = result[i]['username']
                // 조회수 추가하기
                
                html_template=`
                <tr>
                    <th scope="row">${id}</th>
                    <td><a href="/board/board_detail.html?id=${id}" class="a_title">${title}</a></td>
                    <td>${username}</td>
                    <td>${updated_at.slice(0,10)}</td>
                </tr>
                `
                $('#boardlist').append(html_template)
              }
            },
            error: function() {
                console.log('통신에러')
            }
        });
    }
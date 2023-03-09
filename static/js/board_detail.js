window.onload = function(){
    id=window.location.search.split('=')[1]
    // console.log(id.split('=')[1])
    console.log(id)
    
    $.ajax({
        
        type: 'GET',
        url: `http://127.0.0.1:8000/board/${id}`,
        dataType: 'json',
        success: function(result) {
            
            console.log(result)
        },
        error: function() {
            console.log('통신에러')
        }
    });
}
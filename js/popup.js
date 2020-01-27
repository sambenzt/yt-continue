chrome.storage.local.get(['paused'],result =>{
    
    const container = document.getElementById('json')

    if( result.paused == undefined )
    {
        container.innerHTML = 'No hay videos pausados'
    }
    else
    {
        let videos = JSON.parse(result.paused)

        container.innerHTML = '<pre>' + JSON.stringify(videos,null,2) + '</pre>'
    }

});


document.getElementById('delete').addEventListener('click',function(){
    chrome.storage.local.set({'paused': null});
})
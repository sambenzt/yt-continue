window.onload = function(){
  var interval = setInterval(function(){
      const btn = document.getElementById('confirm-button')
      if( btn )
      {
          btn.click()
          clearInterval(interval);
          let log = new Logger()
          log.add()
          log.show()
      }
    },1000)
}


class Logger {

  add(){
    this.setStorage(this.getTitle())
  }

  getTitle(){
    return document
      .getElementsByClassName('ytd-video-primary-info-renderer')[0]
      .getElementsByTagName('h1')[0].innerText
  }

  getStorage(callback){
    chrome.storage.local.get(['paused'],callback);
  }

  setStorage(video){
    this.getStorage( result => {
      let videos = result.paused == undefined ? [] : JSON.parse(result.paused)
      let time   = new Date()
      let data   = { video:video , time:time.toLocaleString() }
      videos.push(data)
      chrome.storage.local.set({'paused': JSON.stringify(videos)});
    })
  }
}

var log = new Logger()

log.add()



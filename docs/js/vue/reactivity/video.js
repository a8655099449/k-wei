;(function(){
  let _v = document.getElementsByTagName("video")[0];
  if (_v) {
    _v.addEventListener("pause", handlePause);
    _v.addEventListener("ended", handleEnded);
  
  }


  function init(){
    let box =  document.createElement('div')
    let syDom =  document.createElement('style')
    box.innerHTML = "脚本加载成功"
    box.id = 'guaji'

    syDom.innerHTML = `
        #guaji {
          color: #f00;
          font-size: 30px;
          position: fixed;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0,.3);
          padding: 10px;
          border-radius: 4px;
          z-index: 10000;
        }
    `
    document.head.appendChild(syDom)
    document.body.appendChild(box)

  }

  function handlePause () {
    _v.play();
  }
  function handleEnded (){
    _v.removeEventListener("pause", handlePause);

    setTimeout(() => {
      _v.pause();
      clearInterval(timer)
      document.querySelector('#guaji').innerHTML ="❗❗视频播放结束❗❗"
      document.title ="❗❗视频播放结束❗❗"

    }, 1000);
  }
  let timer =  setInterval(function () {
    layer.closeAll();
  }, 1000);
  init()
})()
// javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//image.woai996.com/picGo/20210318191606.js';void(0);


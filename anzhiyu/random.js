var posts=["2024/12/09/hello-world/","2024/12/10/这是一篇新的博文/","2024/12/10/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
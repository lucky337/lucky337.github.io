var posts=["posts/59ce.html","posts/433d.html","posts/97d.html","posts/636.html","posts/8fd6.html","posts/be73.html","posts/3c29.html","posts/7eda.html","posts/77b1.html","posts/c1ca.html","posts/83a7.html","posts/d0e9.html","posts/14bf.html","posts/b6e6.html","posts/f70c.html","posts/70d2.html","posts/f593.html","posts/5630.html","posts/ae29.html","posts/5ca7.html","posts/ccdd.html","posts/50de.html","posts/b030.html","posts/1579.html","posts/3eeb.html","posts/f6c9.html","posts/f789.html","posts/3748.html","posts/df61.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Mr.D的笔记本","link":"https://lucky337.github.io/","avatar":"https://s2.loli.net/2023/08/30/oFG9IrXps5V73i1.webp","descr":"生命不息，奋斗不止","siteshot":"https://s2.loli.net/2023/08/30/WrKdJM7n6ybThsP.webp","color":"vip","tag":"技术"},{"name":"董同学","link":"https://lucky337.github.io/","avatar":"https://s2.loli.net/2023/08/30/oFG9IrXps5V73i1.webp","descr":"生命不息，奋斗不止","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
require.config({
    baseUrl: "./js",//默认值为data-main文件所在文件夹
    paths: {
      'jquery': 'jquery-1.7.2.min'
    }
});
//加载入口模块
require(["jquery"],function($){

  function setTime (){  //设置time标签时间
    var times = document.getElementsByTagName("time");
    var len   = times.length;
    for(var i = 0 ; i < len ; i ++) {
      var time = times[i].getAttribute("datetime");
      if( !!time ){
        times[i].innerHTML = time;
      }
    }
  }

  function view(obj){       //控制视图class
    this.view = obj.view;
  }
  view.prototype ={
    init : function(){

      this.navCollapse();
      this.sectionMargin();
      this.contact();
    },
    navCollapse : function(){   //nav控制接口
      var navBtn = $(".header-collapse-btn"), 
          nav    = navBtn.siblings(".nav");
      
      navBtn.click(collapse); //navCollapse按钮控制
      
      function collapse(){    //nav下拉控制
        nav.toggle("100");
      }

      $(window).resize(winResize);

      function winResize(){
        if( $(this).width() > 760 ){
          nav.show();
        }else{
          nav.hide()
        }
      }
    },
    contact : function(){       //底部contact控制接口
      var btn = $("#contactMe"),
          ctcBox = $("#contactBox");
      btn.click(toggle);

      function toggle(){
        ctcBox.toggle();
      }
    },
    sectionMargin : function(){  //设置视口margim-bottom
      var section = $("section"),
          footer  = $("footer");
      section.css("margin-bottom" , footer.height());
    }
  }

  //获取html片段class
  window.$http = (function(){
    
    return {
      loadView: function(html,data,view){
        if(!!data){
          for(key in data){
            var putIn = "{{" + key + "}}";
            while(html.indexOf(putIn) != -1){
              html = html.replace(putIn,data[key + ""])
            }
          }
        }   
        view.innerHTML = html;
      }
    }
  })();

  window.getPage = (function(win,doc){    // 获取html片段class
    
    return {
      init: function(){
        var self = win.getPage;
        if(win.location.href.indexOf("#=") != -1){
          self.page();
        } else {
          win.location.href = "#=home";
        }
        self.choosePage();
      },
      choosePage: function(){
        var self = this;
        win.onhashchange = function(){
          if(win.location.href.indexOf("#=") != -1) self.page();
        };
      },
      page: function(){
        var view = doc.getElementById("view-port"),
            pageTip = doc.getElementById("pageTip");
        // var url  = win.location.href.split("#=")[1];
        // var pageName = url.split(".htm")[0];
        var reg = /#=(\w+)\b/;
        var pageName = win.location.href.match(reg)[1];
        var htmlBox = doc.getElementById(pageName);
        if( !!htmlBox ) {
          var pageValue = htmlBox.getAttribute('value');
          win.$http.loadView(pageValue,null,view);
          pageTip.innerHTML = pageName;
          setTime();
        } else{
          win.location.href = "#=home";
        }
      }
    }
  })(window,document);

  $(document).ready(function(){
    var navCollapse = new view({view: "home"});
    navCollapse.init();
    setTime();
    window.getPage.init();
  });

});

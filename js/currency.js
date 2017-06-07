window.onload = function(){
  view.init();
};
var view = (function(win,doc){
  
  return {
    init: function(){
      
      var imgs = document.querySelectorAll("img[data-clickImg]");
      if( !!imgs[0] ) { //是否存在可点击img
        this.showImg(imgs);  
      }
    },
    showImg: function(imgs){  //img点击事件 
      var len  = imgs.length;
      for( var i = 0 ; i < len ; i++ ) {
        imgs[i].onclick = function(){
          change.call(this);
        };
      }
      function change(){ 
          var isMin = (/\bimg-click\b/).test(this.getAttribute("class"));
          var imgClass = isMin ? "img-clicked" : "img-click";
          this.setAttribute( "class" , imgClass);
        }
    }
  }
})(window,document);
var position = [
  "hero--lefttop",
  "hero--centertop",
  "hero--righttop",
  "hero--leftcenter",
  "hero--centercenter",
  "hero--rightcenter",
  "hero--leftbottom",
  "hero--centerbottom",
  "hero--rightbottom"
];

var gradientDirection = [
  "gradient--totop",
  "gradient--tobottom",
  "gradient--toleft",
  "gradient--toright"
];

var i = 0;
var n = 0;

$(".heroplugin").click(
  function(){
    var $this = $(this);
    if($this.hasClass("hero--position")){
      for(n = 0; n < position.length; n++){
        $this.removeClass(position[n]);
      }
      $this.addClass(position[i]);
      if(i >= position.length - 1){
        i = 0;
      } else {
        i ++;
      }
    }
    if($this.hasClass("hero--gradient")){
      for(n = 0; n < gradientDirection.length; n++){
        $this.removeClass(gradientDirection[n]);
      }
      $this.addClass(gradientDirection[i]);
      if(i >= gradientDirection.length - 1){
        i = 0;
      } else {
        i ++;
      }
    }
  }
);

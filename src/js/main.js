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

$(".heroplugin").click(
  function(){
    var $this = $(this);
    if($this.hasClass("hero--position")){
      if(i != 0){
        $this.removeClass(position[i - 1]);
      }
      $this.addClass(position[i]);
      if(i > position.length){
        i = 0;
      } else {
        i ++;
      }
    }
    if($this.hasClass("hero--gradient")){
      if(i != 0){
        $this.removeClass(gradientDirection[i - 1]);
      }
      $this.addClass(gradientDirection[i]);
      if(i > gradientDirection.length){
        i = 0;
      } else {
        i ++;
      }
    }
  }
);

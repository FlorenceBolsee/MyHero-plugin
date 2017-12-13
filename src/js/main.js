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
var $this;

function changeClass(list){
  for(n = 0; n < list.length; n++){
    $this.removeClass(list[n]);
  }
  $this.addClass(list[i]);
  $this.find("p").text(list[i]);
  if(i >= list.length - 1){
    i = 0;
  } else {
    i ++;
  }
}

$(".heroplugin").click(
  function(){
    $this = $(this);
    if($this.hasClass("hero--position")){
      changeClass(position);
    }
    if($this.hasClass("hero--gradient")){
      changeClass(gradientDirection);
    }
  }
);

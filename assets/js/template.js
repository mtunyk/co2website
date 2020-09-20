function onReady(){
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM Content Loaded!"); //the event occurred
    svgToPNG();
  });
};
onReady();

function svgToPNG(){
  console.log("SVG TO PNG!");


  var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var DOMURL = self.URL || self.webkitURL || self;
  var img = new Image();
  var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
  var url = DOMURL.createObjectURL(svg);
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    var png = canvas.toDataURL("image/png");
    document.querySelector('#png-container').innerHTML = '<img src="'+png+'" alt="CO₂ Birthdate Shield." />';
    DOMURL.revokeObjectURL(png);
  };
  img.src = url;
  console.log("url: "+url);
  console.log("image: "+img);

};
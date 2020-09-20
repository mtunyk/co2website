function onReady(){
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM Content Loaded!"); //the event occurred
    svgToPNG();
  });
};
onReady();

function svgToPNG(){
  console.log("SVG TO PNG!");
};
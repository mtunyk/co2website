function onReady(){
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM Content Loaded!"); //the event occurred
    copyToClipboard();
  });
};
onReady();

function copyToClipboard(){
  console.log("Copy to Clipboard!");
  var clipboardEle = document.getElementById("url-share");
  var clipboardText = clipboardEle.textContent;
  console.log("TEXT CONTENT");
  console.log(clipboardText)
};
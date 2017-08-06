document.addEventListener('DOMContentLoaded', function(){

var subTitle =document.querySelector("#subtitle");
var titlePage = document.querySelector("#title-page");

  function showSubTitle() {
    subTitle.style.visibility = "visible";
  };

  // function changeTitleBack() {
  //   titlePage.innerText = "Web Developer";
  // }

  titlePage.addEventListener("mouseover", showSubTitle);


});

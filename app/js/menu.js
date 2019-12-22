
window.onload = function(){
  var openMenu = document.getElementById('open-menu');
  var closeMenu = document.getElementById('close-menu');
  var navigation = document.getElementById('main-nav');

  console.log("TEST");

  openMenu.onclick = function(e){
    e.preventDefault();
    navigation.classList.add("show");
    openMenu.classList.add("hide");
  };
  closeMenu.onclick = function(e){
    e.preventDefault();
    navigation.classList.remove("show");
    openMenu.classList.remove("hide");
  };
}

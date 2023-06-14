function openOnglet(evt, name) {
  var i, content, link;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "None";
  }
  link = document.getElementsByClassName("onglet");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace("active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += "active";
}

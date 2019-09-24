function openTab(evt, name) {
    var i, content, tablinks;

    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("defaultOpen").click();

}
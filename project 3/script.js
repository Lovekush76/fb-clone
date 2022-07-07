var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
      settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classlist.toggle("dark-btn-on");
    document.body.classlist.toggle("dark-theme");
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classlist.remove("dark-btn-on");
    document.body.classlist.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classlist.add("dark-btn-on");
    document.body.classlist.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
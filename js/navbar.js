var navbar = document.getElementById('navbar');
window.onscroll = function () {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";

    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
        document.getElementById("progressContainer").style.display = 'block'
    }
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
        document.getElementById("progressContainer").style.display = 'none'
    }


};
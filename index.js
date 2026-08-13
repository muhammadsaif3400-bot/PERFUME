function changeimg() {
    var i = document.getElementById('image');

    if (i.src.includes("home.png")) {
        i.src = "./product.jpg";
    } else {
        i.src = "./home.png";
    }
}
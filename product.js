let search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let perfumes = document.querySelectorAll(".price");

    perfumes.forEach(function (perfume) {

        let name = perfume.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            perfume.style.display = "block";
        } else {
            perfume.style.display = "none";
        }

    });

});

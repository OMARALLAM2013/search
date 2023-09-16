let search = document.querySelector(".search-box input");
let images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    let searchValue = search.value,
      value = searchValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
    console.log(value);
  }
});

search.addEventListener("Keyup", function () {
  if (search.value != "") return;
  images.forEach((image) => {
    image.style.display = "block";
  });
});

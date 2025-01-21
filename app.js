for (let i = 1; i <= 3; i++) {
  let extend = document.getElementById(`extend${i}`);
  let expand = document.getElementById(`expand${i}`);
  let extendImg = extend.querySelector("img");
  extend.addEventListener("click", function () {
    if (expand.classList.contains("open")) {
      expand.classList.remove("open");
      extendImg.classList.remove("rotated");
    } else {
      expand.classList.add("open");
      extendImg.classList.add("rotated");
    }
  });
}


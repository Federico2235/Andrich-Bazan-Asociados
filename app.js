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

  for (let i = 1; i <= 3; i++) {
    let extendC = document.getElementById(`extendC${i}`);
    let expandC = document.getElementById(`expandC${i}`);
    let extendImg = extendC.querySelector("img");
    extendC.addEventListener("click", function () {
      if (expandC.classList.contains("open")) {
        expandC.classList.remove("open");
        extendImg.classList.remove("rotated");
      } else {
        expandC.classList.add("open");
        extendImg.classList.add("rotated");
      }
    });
  }
  

  
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const cardCar = document.querySelector('.cardCar');
    const gap = 10; // gap de 1rem
    const cardWidth = cardCar.offsetWidth + gap;

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });


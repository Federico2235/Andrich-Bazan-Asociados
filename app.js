document.addEventListener("DOMContentLoaded", function () {
  function setupExpandable(baseId, scrollTargetPrefix) {
    for (let i = 1; i <= 3; i++) {
      const toggle = document.getElementById(`${baseId}${i}`);
      const content = document.getElementById(`${baseId === "extend" ? "expand" : "expandC"}${i}`);
      const icon = toggle.querySelector("img");
      const scrollTarget = document.getElementById(`${scrollTargetPrefix}${i}`);

      toggle.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        if (isOpen) {
          content.classList.remove("open");
          icon.classList.remove("rotated");

          // Esperar un poco para que colapse visualmente antes de hacer scroll
          setTimeout(() => {
            const offset = 80; // altura del navbar
            const targetPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
          }, 200);
        } else {
          content.classList.add("open");
          icon.classList.add("rotated");
        }
      });
    }
  }

  setupExpandable("extend", "card");
  setupExpandable("extendC", "cardc");
});

  
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


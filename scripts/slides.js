export const initializeSlides = ({ data, isCrew, isTechnology }) => {
  const total = data.length;
  let current = 0;
  let timeoutId;

  const nextSlide = () => {
    timeoutId = setTimeout(() => {
      const next = (current + 1) % total;

      showSlide(next);
    }, 5000);
  };

  const showSlide = (idx) => {
    clearTimeout(timeoutId);

    for (let i = 0; i < total; i++) {
      const slide = document.getElementById(`slide${i}`);
      const dot = document.getElementById(`dot${i}`);

      slide.classList.remove("visible");
      slide.setAttribute("aria-hidden", "true");
      dot.removeAttribute("aria-current");
    }

    const currentSlide = document.getElementById(`slide${idx}`);
    const currentDot = document.getElementById(`dot${idx}`);

    currentSlide.classList.add("visible");
    currentSlide.setAttribute("aria-hidden", "false");
    currentDot.setAttribute("aria-current", "true");

    const container = document.querySelector(".slides");

    container.style.height = `${currentSlide.offsetHeight}px`;

    if (isCrew) {
      const {
        images: { webp, png },
        name,
      } = data[idx];

      document.getElementById("crewImageWebp").src = webp;
      document.getElementById("crewImageFallback").src = png;
      document.getElementById("crewImageFallback").alt = `Portrait of ${name}`;
    }

    if (isTechnology) {
      const {
        images: { portrait, landscape },
        name,
      } = data[idx];

      document.getElementById("technologyPictureSrcset").srcset = landscape;
      document.getElementById("technologyPictureSrc").src = portrait;
      document.getElementById("technologyPictureSrc").alt = `${name}`;
    }

    current = idx;

    nextSlide();
  };

  data.forEach((_, idx) => {
    document.getElementById(`dot${idx}`).addEventListener("click", () => {
      showSlide(idx);
    });
  });

  nextSlide();
};

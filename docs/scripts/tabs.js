export const initializeTabs = (data) => {
  const imageMap = data.reduce((acc, item) => {
    const {
      images: { png, webp },
      name,
    } = item;

    acc[name] = {
      png,
      webp,
      alt: `Image of ${name}`,
    };

    return acc;
  }, {});

  const webpSource = document.getElementById("celestialImageWebp");
  const fallbackImg = document.getElementById("celestialImageFallback");

  const tabButtons = document.querySelectorAll("[data-tab]");
  const tabPanels = document.querySelectorAll("[role=tabpanel]");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabKey = btn.getAttribute("data-tab");
      const targetPanelId = btn.getAttribute("aria-controls");

      tabButtons.forEach((tab) => {
        tab.setAttribute("aria-selected", "false");
        tab.setAttribute("tabindex", "-1");
        tab.classList.remove("is-active");
      });

      btn.setAttribute("aria-selected", "true");
      btn.setAttribute("tabindex", "0");
      btn.classList.add("is-active");
      btn.focus();

      tabPanels.forEach((panel) => {
        const isTarget = panel.id === targetPanelId;
        panel.hidden = !isTarget;
      });

      if (tabKey && tabKey in imageMap) {
        const { webp, png, alt } = imageMap[tabKey];
        webpSource.srcset = webp;
        fallbackImg.src = png;
        fallbackImg.alt = alt;
      }
    });
  });
};

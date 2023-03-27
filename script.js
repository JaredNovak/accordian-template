const accordianHeaders = document.querySelectorAll(".accordian-header");
const accordianIcons = document.querySelectorAll(".accordian-icon");

accordianHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const paragraph = header.querySelector("p");
    const icon = header.querySelector(".accordian-icon");

    const openAccordian = document.querySelector(".accordian-item.active");
    const openAccordianIcon = document.querySelector(
      ".accordian-item.active .accordian-icon"
    );

    if (header.parentElement.classList.contains("active")) {
      header.parentElement.classList.remove("active");
      icon.textContent = "+";
      paragraph.style.color = "grey";
    } else {
      if (openAccordian) {
        openAccordian.classList.remove("active");
        openAccordianIcon.textContent = "+";
        openAccordian.querySelector("p").style.color = "grey";
      }
      header.parentElement.classList.toggle("active");
      icon.textContent = "-";
      paragraph.style.color = "black";
    }
  });
});

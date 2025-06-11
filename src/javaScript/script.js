//FQA
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  let activeItem = null;

  // Initialize first FAQ as open
  const firstItem = faqItems[0];
  const firstQuestion = firstItem.querySelector(".faq-question");
  const firstAnswer = firstItem.querySelector(".faq-answer");
  const firstIcon = firstItem.querySelector("i");

  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
  firstAnswer.classList.add("pb-6");
  firstIcon.classList.add("rotate-180");
  activeItem = firstItem;

  // Add click event to all FAQ questions
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("i");

    question.addEventListener("click", () => {
      // If clicking the active item, close it
      if (item === activeItem) {
        answer.style.maxHeight = "0";
        answer.classList.remove("pb-6");
        icon.classList.remove("rotate-180");
        activeItem = null;
        return;
      }

      // Close currently active item if exists
      if (activeItem) {
        const activeAnswer = activeItem.querySelector(".faq-answer");
        const activeIcon = activeItem.querySelector("i");
        activeAnswer.style.maxHeight = "0";
        activeAnswer.classList.remove("pb-6");
        activeIcon.classList.remove("rotate-180");
      }

      // Open clicked item
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.add("pb-6");
      icon.classList.add("rotate-180");
      activeItem = item;

      // Smooth scroll to keep item in view if needed
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    // Update max-height when window resizes (for responsive design)
    answer.addEventListener("transitionend", () => {
      if (answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (activeItem) {
      const activeAnswer = activeItem.querySelector(".faq-answer");
      if (activeAnswer.style.maxHeight !== "0px") {
        activeAnswer.style.maxHeight = activeAnswer.scrollHeight + "px";
      }
    }
  });
});
// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check for saved theme preference
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

themeToggle.addEventListener("click", function () {
  // Toggle icon
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");

  // Toggle theme
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});

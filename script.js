const btn = document.getElementById("hum");
const menu = document.getElementById("dropdownMenu");

// Toggle dropdown when button is clicked
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up
  menu.classList.toggle("show");
});

// Hide dropdown when clicking any link inside it
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("show");
  }
  e.stopPropagation(); // Prevent closing from document click
});

// Hide dropdown when clicking anywhere else on the page
document.addEventListener("click", () => {
  menu.classList.remove("show");
});

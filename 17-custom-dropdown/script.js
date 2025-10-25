// Get elements
const dropdownBtn = document.getElementById("doprdownBtn");
const dropdownList = document.getElementById("dropdownList");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Toggle dropdown visibility
dropdownBtn.addEventListener("click", () => {
  dropdownList.classList.toggle("show");
});

// When an item is clicked
dropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    dropdownBtn.textContent = item.textContent; // update button text
    dropdownList.classList.remove("show"); // close dropdown
  });
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown-btn")) {
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  }
});

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");
const selectedText = document.getElementById("selectedText");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const arrow = document.querySelector(".arrow");

// Toggle dropdown open/close
dropdownBtn.addEventListener("click", () => {
  dropdownList.classList.toggle("show");
  dropdownBtn.classList.toggle("open");
});

// When an item is clicked
dropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove selected from all items
    dropdownItems.forEach(i => i.classList.remove("selected"));

    // Add selected state
    item.classList.add("selected");
    selectedText.textContent = item.textContent;

    // Close dropdown
    dropdownList.classList.remove("show");
    dropdownBtn.classList.remove("open");
  });
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownList.classList.remove("show");
    dropdownBtn.classList.remove("open");
  }
});

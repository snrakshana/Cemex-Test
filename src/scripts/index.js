// handler to toggle sidebar
const handleToggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
};

const handleToggleMode = (mode) => {
  const btnIndicator = document.getElementById("btn-indicator");
  const sidebar = document.getElementById("sidebar");
  if (mode === "light") {
    btnIndicator.classList.add("light");
    btnIndicator.classList.remove("dark");
    sidebar.classList.add("light-theme");
  }
  if (mode === "dark") {
    btnIndicator.classList.add("dark");
    btnIndicator.classList.remove("light");
    sidebar.classList.remove("light-theme");
  }
};

const handleOpenAddNewForm = () => {
  const form = document.getElementById("add-new-approval-form");
  const overlay = document.getElementById("add-new-approval-form-overlay");
  form.classList.add("active");
  overlay.classList.add("active");
};
const handleCloseAddNewForm = () => {
  const form = document.getElementById("add-new-approval-form");
  const overlay = document.getElementById("add-new-approval-form-overlay");
  form.classList.remove("active");
  overlay.classList.remove("active");
};

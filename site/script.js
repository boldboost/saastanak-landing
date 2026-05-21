document.getElementById("bookmark-btn")?.addEventListener("click", () => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const combo = isMac ? "Cmd + D" : "Ctrl + D";
  // No reliable cross-browser programmatic bookmark API exists; guide the user.
  alert(`To save this page, press ${combo}. On mobile, use your browser's Share or menu, then "Add to Home Screen" or "Bookmark".`);
});

const linkContainer = document.getElementById("link-container");

document.getElementById("menu-button").onclick = (ev) => linkContainer.classList.remove("nav-closed");
document.getElementById("menu-close-button").onclick = (ev) => linkContainer.classList.add("nav-closed");

// USE CLASS
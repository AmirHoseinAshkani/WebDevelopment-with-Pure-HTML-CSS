function MenuHandler() {
  let NB = document.getElementById("navBar");
  if (NB.className === "Nav") {
    NB.classList.add("responsive");
  } else {
    NB.classList.remove("responsive");
  }
}

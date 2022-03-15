const contacts = document.querySelector(".contacts");

function copyValue(e) {
  if (!e.target.classList.contains("contacts__copy")) return;
  navigator.clipboard.writeText(e.target.dataset.value);
}

contacts.addEventListener("click", (e) => copyValue(e));

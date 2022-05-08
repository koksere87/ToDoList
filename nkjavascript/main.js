let button = document.getElementById("button");
let input = document.getElementById("input");
let list = document.getElementById("list");

function addItem() {
  let li = document.createElement("li");
  list.appendChild(li);
  list.lastChild.innerHTML = input.value;

  if (
    list.lastChild.innerHTML == "francja" ||
    list.lastChild.innerHTML == "Francja" ||
    list.lastChild.innerHTML == "FRANCJA"
  ) {
    list.lastChild.innerHTML = "Wasal Rosji(Francja)";
  }
}

button.addEventListener("click", addItem);

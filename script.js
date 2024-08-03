var elForm = document.querySelector("#js-form"),
  elImput = elForm.querySelector("#js-input"),
  elBtn = elForm.querySelector("#js-btn"),
  elOl = elForm.querySelector("#js-ol");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

elBtn.addEventListener("click", () => {
  var newArr = [];
  newArr.push(elImput.value);

  for (let i = 0; i < newArr.length; i++) {
    var deleteBtn = document.createElement("button"),
      editBtn = document.createElement("button"),
      newItem = document.createElement("li");

    deleteBtn.textContent = "delete";

    editBtn.textContent = "edit";

    newItem.textContent = newArr[i];
    newItem.style.display = "flex";
    newItem.style.gap = "50px";
    newItem.append(deleteBtn, editBtn);
    elOl.appendChild(newItem);
  }
});

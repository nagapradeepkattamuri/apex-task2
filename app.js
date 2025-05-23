document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const check = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

      if (username.length <= 6) {
        alert("Username must be more than 6 characters long.");
        e.preventDefault();
      } else if (!check.test(email)) {
        alert("Please enter a valid Gmail address (e.g., abc@gmail.com). Only Gmail addresses are allowed.");
        e.preventDefault();
      } else {
        console.log("submitted successfully!");
      }
    });
  }
});

let deleteElement = (btn) => {
  btn.closest('.card').remove();
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

function addPic() {
  const fileInput = document.getElementById('imageInput');
  fileInput.click();

  fileInput.onchange = function () {
    const file = fileInput.files[0];
    if (!file) return;

    const title = prompt("Enter a name for the image:");
    if (!title || title.trim() === '') {
      alert("Image name is required.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const container = document.querySelector(".cards-container");
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.innerHTML = `
        <img src="${e.target.result}">
        <h3>${title}</h3>
        <button onclick="deleteElement(this)">delete</button>
      `;
      container.appendChild(newCard);
    };

    reader.readAsDataURL(file);
    fileInput.value = '';
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit");
  button.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Example validation (you can replace this with actual validation logic)
    if (username === "shabrina aulia kharisma" && password === "07072005") {
      window.open('./main-page.html');
    } else {
      errorMessage.textContent = "masukinn yg bnrr";
    }
  });
});

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");

  if(username === "admin" && password === "admin123") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
  } else {
    errorMsg.textContent = "Invalid Username or Password!";
  }
}

function logout() {
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
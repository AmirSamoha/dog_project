


function checkConnection() {
    //פונקציה לבדיקה האם המשתמש מחובר לדף זה
    if (
      sessionStorage.getItem("login_active") === "true"
    ) {
    } else if (
      sessionStorage.getItem("login_active") !== "true"
    ) {
      window.location = ("../doginfo/log_register/index.html");
    }
}
setInterval(checkConnection, 500);


const redirect = (link) => {
  // פונקציה לשינוי מיקום לאחר לחיצה
  window.location.assign(link);
};

function deleteItems() {
  // פונקציה למחיקת נתונים מ-sessionStorage
  sessionStorage.clear();
}

document.getElementById("userName").textContent = sessionStorage.getItem("text_value");

if (sessionStorage.getItem("login_active") === "true"){
  document.getElementById("btn_log_sign").style.display = "none";

  $(document).ready(function () {
    $(".navbar").prepend(`<button class="btn btn-primary me-md-2" type="button" id="btn_logout" onclick="deleteItems(); redirect('doginfo/log_register/index.html')"> Log Out </button>`)
    $("#btn_logout").css({"font-size": "12px"})
  });


}
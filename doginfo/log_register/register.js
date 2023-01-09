async function login_data() {
    const response = await fetch("data.json");
    const data = await response.json();
  
    const userName_val = document.getElementById("user").value;
    const userName_password_val = document.getElementById("pass").value;

    for (let key in data) {
      for (let i in data[key]) {
        let userName = data[key][i].username;
        let userName_password = data[key][i].password;

        if (userName === userName_val && userName_password === userName_password_val){
          alert("Username exists");
          sessionStorage.setItem("login_active", true);
          sessionStorage.setItem(
            "text_value",
            document.getElementById("user").value);
          location.assign("../../index.html");
          
        }
      }
    }

}
let nameVal;
let passwordVal;
let rePasswordVal;
let fnameVal;
let lnameVal;
function check(){
    nameVal = document.getElementById("uname").value;
    fnameVal = document.getElementById("fname").value;
    lnameVal = document.getElementById("lname").value;
    passwordVal = document.getElementById("pwd").value;
    rePasswordVal = document.getElementById("repwd").value;

    if(passwordVal == rePasswordVal){
        alert(nameVal + " Login success!" )
    }else{
        alert("Passwords do not match!Try again")
    }
}



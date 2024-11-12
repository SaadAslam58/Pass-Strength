let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

pass.addEventListener('input', () => {
if (pass.value.length > 0) {
  msg.style.display = "block";
} else {
    msg.style.display = "none";
 }

 if (pass.value.length < 4){
   str.innerHTML = "Weak";
   msg.style.color = "#ff5925";
   pass.style.borderColor = "#ff5925";
 } else if(pass.value.length >=4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    msg.style.color = "yellow";
    pass.style.borderColor = "yellow";
 } else if ( pass.value.length >= 8) {
    str.innerHTML = "Strong";
    msg.style.color = "#26d730";
    pass.style.borderColor = "#26d730";
 }
}); 

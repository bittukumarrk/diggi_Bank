let btn = document.getElementById("dBtn");
btn.addEventListener("click",function(){
    alert("Welcome to Dizzi Bank");
});



// account.addEventListener("click",function(){

//     prompt("Please enter your good name....");
// });


let account = document.getElementById("acc");
let acc_form = document.getElementById("acc_form");
let x = 0

account.addEventListener("click",function(){
   if(x == 0){
    acc_form.style.display = "block"
    x = 1
   }else{
   
     acc_form.style.display = "none"
    x = 0
   }
});



  var alertBox = document.querySelector(".alert");
 
  window.onload = function(){alertBox.style.display = "block"};

  function closeAlert() {
    var alertBox = document.querySelector(".alert");
    alertBox.style.display = "none";
}

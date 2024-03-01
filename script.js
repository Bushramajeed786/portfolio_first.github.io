window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}

function validateform()
{
  var name=document.myform.name.value;
  if(name==null||name==""||name.length<3)
  {
    alert("Please enter your name")
  }
  var phoneno=document.myform.phoneno.value;
  if(phoneno.length<10||phoneno.length>14)
  {
    alert("Please Enter valied phone number")
  }
  if(isNaN(phoneno))
  {
    alert("phone number must be a number")
    return false;
  }else
  {
  alert("Thank you.message send successfully");
  return true;
  }
}







































































































































































































































/*let form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  document.querySelector('#sub').value="submiting"
  let data=new FormData(form);
  fetch('"https://script.google.com/macros/s/AKfycby8momi7f9Lbnmn7-UgZgObz0Tan4kqEYb82tQBz_ji1MttDezZs_UQ2y4I-a_n9Vix/exec'{
    method:"post",
    body:data
  })
  .then(res=> res.js)
  .then(data=>{
    document.querySelector("#msg").innerHTML=data;
  document.querySelector("#sub").value="submit"
})
})*/


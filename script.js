function loginCheck(){
  let u=document.getElementById("user").value;
  let p=document.getElementById("pass").value;
  let ok=true;

  document.getElementById("userErr").innerText="";
  document.getElementById("passErr").innerText="";
  document.getElementById("msg").innerText="";

  if(u===""){
    document.getElementById("userErr").innerText="Username required";
    ok=false;
  }

  if(p.length<6){
    document.getElementById("passErr").innerText="Password must be 6+ characters";
    ok=false;
  }

  if(ok){
    document.getElementById("msg").innerText="✔ You have login successfully";
  }
  return false;
}

function checkPassword(){
  let p=document.getElementById("password").value;
  let hint=document.getElementById("hint");

  if(p.length>=6 && /\d/.test(p)){
    hint.style.color="green";
    hint.innerText="✔ Strong password";
  }else{
    hint.style.color="red";
    hint.innerText="Must contain: 6+ characters & 1 numeric digit";
  }
}

function signupCheck(){
  let n=document.getElementById("name").value;
  let e=document.getElementById("email").value;
  let p=document.getElementById("password").value;
  let ok=true;

  document.getElementById("nameErr").innerText="";
  document.getElementById("emailErr").innerText="";
  document.getElementById("passErr").innerText="";
  document.getElementById("msg").innerText="";

  if(n===""){
    document.getElementById("nameErr").innerText="Username required";
    ok=false;
  }

  if(!e.includes("@")){
    document.getElementById("emailErr").innerText="Valid email required";
    ok=false;
  }

  if(!(p.length>=6 && /\d/.test(p))){
    document.getElementById("passErr").innerText="Password must contain 6+ chars & number";
    ok=false;
  }

  if(ok){
    document.getElementById("msg").innerText="✔ Form submitted successfully";
  }
  return false;
}

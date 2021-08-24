function Submit(){

var name=document.myform.name.value;  
var password=document.myform.password.value;  

  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}
else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  } 

var email=document.myform.email.value;
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  {
    return true;

}
else{
      alert("You have entered an invalid email address!")
    return false;
     
}

var city=document.myform.city.value;

     if(name==null) 
     {
           alert("city name choose is compulsory");
            return true;
     }
     

else{
      alert("invalid city name");
       return false;
}


}  

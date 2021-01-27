var email= document.getElementById("exampleInputEmail1");
var pwd= document.getElementById("exampleInputPassword1");
var emailerror= document.getElementById("emailerror");
var pwderror= document.getElementById("pwderror");
var regexp1 = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var regexp2 =/^([A-Z]+)$/;
var regexp3 =/^([a-z]+)$/;
var regexp4 =/^([0-9]+\@!%*)$/;
function validate(){
    
    if(regexp1.test(email.value)){
        if((pwd.value.length>=8) && regexp2.test(pwd.value) && regexp3.test(pwd.value) && regexp4.test(pwd.value)){
            
        emailerror.innerHTML = "Valid";
        emailerror.style.color = "green";
        emailerror.style.fontSize = "25px";

        pwderror.innerHTML = "Medium";
        pwderror.style.color = "green";
        pwd.style.fontSize = "25px";         
        
        return true;
      
        }
        else{
            emailerror.innerHTML = "Valid";
        emailerror.style.color = "green";
        emailerror.style.fontSize = "25px";

            pwderror.innerHTML = "Password must contain atleast 8 characters, one uppercase character, one lower case character, and one number!";
            pwderror.style.color = "red";
            pwderror.style.fontSize = "25px";
            return false;
        }
        
       
    }
  
    else{
        emailerror.innerHTML = "Invalid email format";
        emailerror.style.color = "red";
        emailerror.style.fontSize = "30px";
        return false;
    }

}

// function validate2(){
//     if(regexp2.test(email.value)){
//         "Password must contain atleast 8 characters, one uppercase character, one lower case character, and one number!");
//         pwderror.innerHTML = "Valid";
//         pwderror.style.color = "green";
//         return true;
//     }
//     else{
//         pwderror.innerHTML =  "Password must contain atleast 8 characters, one uppercase character, one lower case character, and one number!");
//         pwderror.style.color = "red";
//         return false;
//     }

// }
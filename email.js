function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(feedback.email.value))
  {
    alert("valid email")
    return (true);
  }
    window.alert("You have entered an invalid email address!");
    return (false);
}

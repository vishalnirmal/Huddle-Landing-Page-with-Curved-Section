document.querySelector(".button-subscribe").addEventListener("click", ()=>{
    var email = document.querySelector(".input-email");
    var errmsg = document.querySelector(".error-msg");
    var pattern = /\w+@\w+\.\w+/g;
    var reg = RegExp(pattern);
    if(reg.test(email.value))
        errmsg.classList.remove("active");
    else
        errmsg.classList.add("active");
});
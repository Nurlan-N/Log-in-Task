function Check() {
    var name = document.querySelector('.name');
    var name_value =  name.value;   
    var email = document.querySelector('.email');
    var email_value = email.value;
    var pass = document.querySelector('.pass')
    var pass_value = pass.value;
    var name_info = document.querySelector('.name_info');
    var email_info = document.querySelector('.email_info');
    var pass_info = document.querySelector('.pass_info')
    var r_2 = document.querySelectorAll('.r-2');
    var r_1 = document.querySelectorAll('.r-1');
    var sname = document.querySelector('.sname');
    var semail = document.querySelector('.semail');
    var spass = document.querySelector('.spass');
    var pass_check  = /^[a-zA-Z0-9!@#$%^&*.]{6,16}$/;
    var name_check = /^[A-Z][a-z0-9]{5,19}$/;
    var email_check =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (!name_check.test(name_value)) {
        name.style.border = "red solid 2px";
        name_info.style.display = "block";
        return false;
    }
    else {
        name_info.style.display = "none";
        if (!email_check.test(email_value)) {
            email.style.border = "red solid 2px";
            email_info.style.display = "block";
            return false;
        }
        else{
            email_info.style.display = "none";
            if (!pass_check.test(pass_value)) {
                pass.style.border = "red solid 2px";
                pass_info.style.display = "block";
                return false;
            }

            
            for (const x of r_1) {
                x.style.display = "none";
            }
            for (const y of r_2) {
                y.style.display = "block"
            }
            pass_info.style.display = "none";
            sname.innerHTML = "User Name : " + name_value;
            semail.innerHTML ="Email :" + email_value;
            spass.innerHTML = "Password : " + pass_value;
            return true;

        }
    }
   
    
}
function Clear() {
    var name = document.querySelector('.name');
    var email = document.querySelector('.email');
    var pass = document.querySelector('.pass')
    var name_info = document.querySelector('.name_info');
    var email_info = document.querySelector('.email_info');
    var pass_info = document.querySelector('.pass_info');
    pass_info.style.display = "none";
    email_info.style.display = "none";
    name_info.style.display = "none";
    name.style.border = "2px solid #b1b1b1";
    email.style.border = "2px solid #b1b1b1";
    pass.style.border = "2px solid #b1b1b1";
    name.value = '';
    email.value = '';
    pass.value = '';
}

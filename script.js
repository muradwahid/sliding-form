let signinBtn=document.querySelector(".signinBtn");
let signupBtn=document.querySelector(".signupBtn");
let formBx=document.querySelector(".formBx");
let body=document.querySelector("body");
let form=document.forms[0];
let form2=document.forms[1];
//function
function errorMessage(input,message) {
        let inputArea=input.parentElement;
        inputArea.className="inputArea error"
        let span=inputArea.querySelector("span");
        span.innerText=message;
}
function successMessege(input) {
    let inputArea=input.parentElement;
    inputArea.className="inputArea success"
}
//Check length
function checkLength(input,min,max) {
    if (input.value.length===0) {
        errorMessage(input,`${capital(input)} is required.`)
    }else if (input.value.length<min) {
        errorMessage(input,`${capital(input)} must be at least ${min} characters`)
    }else if (input.value.length>max) {
        errorMessage(input,`${capital(input)} must be less then ${max} characters`)
    } else  {
        successMessege(input)
    }
}
//Capital 
function capital(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}
//function
function errorMessage2(input,message) {
        let inputArea=input.parentElement;
        inputArea.className="signupArea error"
        let span=inputArea.querySelector("span");
        span.innerText=message;
}
function successMessege2(input) {
    let inputArea=input.parentElement;
    inputArea.className="signupArea success"
}
//Check length
function checkLength2(input,min,max) {
    if (input.value.length===0) {
        errorMessage2(input,`${capital2(input)} is required.`)
    }else if (input.value.length<min) {
        errorMessage(input,`${capital2(input)} must be at least ${min} characters`)
    }else if (input.value.length>max) {
        errorMessage(input,`${capital2(input)} must be less then ${max} characters`)
    } else  {
        successMessege2(input)
    }
}
//Check email
function checkEmail(input) {
    const re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (re.test(input.value.trim())) {
        successMessege2(input)
    }else if (input.value==="") {
        errorMessage(input,"Email is required.")
    } else {
        errorMessage(input,"Email is not valid")
    }
}
//Check password
function checkPass(input,input2) {
    if (input.value==="") {
        errorMessage(input2,`${capital2(input)} is required.`)
    }else if (input2.value===input2.value) {
        errorMessage(input2,"Confirm password don't match")
    } else {
        successMessege2(input2)
    }
}
//Capital 
function capital2(input) {
    return input.className.charAt(0).toUpperCase()+input.className.slice(1)
}
//Event:
//Form event
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username=document.querySelector("#username")
    let password=document.querySelector("#password")
    checkLength(username,3,15)
    checkLength(password,6,15)
})
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=document.querySelector(".username")
    let email=document.querySelector(".email")
    let cPassword=document.querySelector(".confirm")
    let password=document.querySelector(".password")
    checkLength2(username,3,15)
    checkLength2(password,6,25)
    checkPass(password,cPassword)
    checkEmail(email)
})
signupBtn.addEventListener("click",()=>{
    formBx.classList.add("active")
    body.classList.add("active")
})
signinBtn.addEventListener("click",()=>{
    formBx.classList.remove("active")
    body.classList.remove("active")
})

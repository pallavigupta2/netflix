export const validateLoginData = ((email,password)=>{
    const emailValidation = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!passwordValidation && !emailValidation) return {passwordError:"Password is Invalid",emailError:"Email id is Invalid"}
    if(!emailValidation) return {emailError:"Email id is Invalid"}
    if(!passwordValidation) return {passwordError:"Password is Invalid"}
    return null;
})
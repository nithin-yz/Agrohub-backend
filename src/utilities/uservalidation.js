const bcrypt = require("bcrypt");

const validateEmail =(email)=>{

const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

return regex.test(email)


}

const validatePassword =(password)=>{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

return regex.test(password)

}

const checkPasswords=(p1,p2)=>{

if(p1==p2){
    const saltrounds=10
const hashedPassword = bcrypt.hash(p1,saltrounds)
return hashedPassword
}else{

    return false
}


}


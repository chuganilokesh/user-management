  const validateSignUp = ( data)=>{
    try{
    const {email,password}=data;
    
    let  startingString =  email.substr(0, email.indexOf('@'))
        var exp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(password.match(exp) &&  password.indexOf(startingString)===-1 && email.match(mailformat) ){
            return true;
        }
        else return false;

    }
    catch(e){
        console.log(e);

    }
    
}
module.exports = {validateSignUp}
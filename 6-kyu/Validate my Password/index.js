function validPass(password){
    console.log(password)
    const validator = /^[a-zA-Z0-9]{4,19}$/
    const validNum = /[a-z]/
    const validLetter = /[0-9]/
    return (validator.test(password) && validNum.test(password) && validLetter.test(password))?
        'VALID':
        'INVALID';
}
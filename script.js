const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const specialSymbols="!@#$%^&*()_+-=/?{}[]<>,{}[];:."
const number="0123456789"

// we should get the selectors
const passBox=document.getElementById("pass-box")
const totalChar=document.getElementById("total-char")
const upperInput=document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("numbers")
const specialSymbolInput=document.getElementById("symbols")


const randomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword=(password="")=>{
        if(upperInput.checked){
            password+=randomData(upperCase)
        }
        if(lowerInput.checked){
            password+=randomData(lowerCase)
        }
        if(numberInput.checked){
            password+=randomData(number)
        }
        if(specialSymbolInput.checked){
            password+=randomData(specialSymbols)
        }
        if(password.length<=totalChar.value){
            return generatePassword(password)
        }


       passBox.innerText= truncateString(password,totalChar.value);
}


document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword()
    }

)

function truncateString(str,num){
    if(str.length>num){
        let subStr=str.substring(0,num);
        return subStr
    }else{
        return str;
    }
}



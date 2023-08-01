const range=document.getElementById("range");
const genPass=document.getElementById("genPass");
const upperCase=document.getElementById("upperCase");
const lowerCase=document.getElementById("lowerCase");
const symbols=document.getElementById("symbols");
const number=document.getElementById("number");
const coptBtn = document.getElementById("copybtn");
const generatebtn=document.getElementById("generate");

const upperletter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletter="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const sym="!@#$%&";

range.addEventListener("input",()=>{
    document.getElementById("rangelabel").innerHTML=`Password Length ${range.value}`;
})

function getUpper()
{
    return upperletter[Math.floor(Math.random() * upperletter.length)];
}
function getLower()
{
    return lowerletter[Math.floor(Math.random() * lowerletter.length)];
}

function getNumber()
{
    return num[Math.floor(Math.random() * num.length)];
}

function getSymbol()
{
    return sym[Math.floor(Math.random() * sym.length)];
}


function generatePassword()
{
    const len=range.value;
    let password="";
    for(let i=0;i<len;i++)
    {
        password+=generateX();

    }
    console.log(password);
    genPass.value=password;
    coptBtn.addEventListener("click", (e) => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard");
        
    })
}


function generateX()
{
    let temp="";
    if(upperCase.checked)
    {
        temp+=getUpper();
    }
    if(lowerCase.checked)
    {
        temp+=getLower();
    }
    if(symbols.checked)
    {
        temp+=getSymbol();
    }
    if(number.checked)
    {
        temp+=getNumber();
    }

    return temp[Math.floor(Math.random()*temp.length)];
}

generatebtn.addEventListener("click",generatePassword);


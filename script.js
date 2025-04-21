


const input = document.getElementById("password");

const btn = document.getElementById("checkbtn");

const result = document.querySelector(".result");


const numberchar = "1234567890";
const specialchar = "!@#$%^&*()_-<>?/{}[]~`";


const checkpassword = () => {
    let haschar = false;
    let hasnumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    let password = input.value.trim();
    if (password == "") {
        alert("Please Enter something in password");
        return;
    }
    if (password.length < 8) {
        alert("password should be greater or equal to 8");
        return;
    }
    
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
            break;
        }
    }
    for(let char of password){
        if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
            break;
        }
        
    }
    for (let char of specialchar) {
        if (password.includes(char)) {
            haschar = true
            break;
        }
    }
    for (let num of numberchar) {
        if (password.includes(num)) {
            hasnumber = true
            break;
        }
    }

   let strengthCount = 0;
if (haschar) strengthCount++;
if (hasnumber) strengthCount++;
if (hasUpperCase) strengthCount++;
if (hasLowerCase) strengthCount++;

if (password.length < 8 || strengthCount === 1) {
    result.innerHTML = `<p style="color:red;">Weak</p>`;
} else if (strengthCount === 2) {
    result.innerHTML = `<p style="color:orange;">Medium</p>`;
} else if (strengthCount === 3) {
    result.innerHTML = `<p style="color:blue;">Strong</p>`;
} else if (strengthCount === 4) {
    result.innerHTML = `<p style="color:green;">Very Strong</p>`;
}


}



btn.addEventListener("click", () => {
    checkpassword();

})

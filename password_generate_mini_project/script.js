let length;
range.addEventListener("input", function(event){
    length = event.target.value;
    document.getElementById("length").innerHTML = length;
});

generate.addEventListener("click", function(event){
    const checkbox1= document.getElementById("checkbox1");
    const checkbox2= document.getElementById("checkbox2");
    const checkbox3= document.getElementById("checkbox3");
    const checkbox4= document.getElementById("checkbox4");
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789";
    const symbol="!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked && !checkbox4.checked){
        alert("Please select at least one checkbox");
        return;
    }
    while(password.length < length){ 
        let i=Math.floor(Math.random() * 4)+1;
        if(i==1 && checkbox1.checked){
            password += upper[Math.floor(Math.random() * upper.length)];
            console.log(password);
        }
        if(i==2 && checkbox2.checked){
            password += lower[Math.floor(Math.random() * lower.length)];
        }
        if(i==3 && checkbox3.checked){
            password += number[Math.floor(Math.random() * number.length)];
        }
        if(i==4 && checkbox4.checked){
            password += symbol[Math.floor(Math.random() * symbol.length)];
        }
    }
    document.getElementById("output").innerHTML = password;
    
});
   

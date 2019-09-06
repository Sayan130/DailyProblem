function result(){

    let email = document.getElementById("email_text").value;
    let english = Boolean(document.getElementById("english").checked);
    let math = Boolean(document.getElementById("math").checked);
    let programming = Boolean(document.getElementById("programming").checked);
    
    let obj = {email, english, math, programming};
    
    let res = fetch("/register", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method : "POST",
        body : JSON.stringify(obj),    
    })
    let response = res;
}
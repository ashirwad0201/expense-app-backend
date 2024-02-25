function onReset(){
    var email_=document.getElementById('idr1').value;
    let myObj={
        email: email_
    }
    if(email_!=''){
        axios.post(`${API_ENDPOINT}password/forgotpassword`,myObj)
        .then((res)=>{
            console.log(res)
            alert("Reset Link send")
            //localStorage.setItem('token',res.data.token)
            //window.location.href="../ExpenseTracker/expense.html"
        })
        .catch(err=>{
            alert(err)
        }); 
    }
}

async function onSet(){
    try{
        const currentUrl = window.location.href;
        let paramString = currentUrl.split('?')[1];
        let uuid=currentUrl.split('=')[1];
        console.log('User ID:', uuid);
        var password_=document.getElementById('idp1').value;
        await axios.post(`${API_ENDPOINT}password/newpassword`,{uuid: uuid,password: password_});
        window.location.href="../login/login.html"
        
    }catch(err){
        alert(err)
    }
    // let myObj={
    //     email: email_,
    //     password: password_
    // }
    // if(email_!='' && password_!=''){
    //     axios.post('${API_ENDPOINT}login-user',myObj)
    //     .then((res)=>{
    //         console.log(res)
    //         alert(res.data.message)
    //         localStorage.setItem('token',res.data.token)
    //         window.location.href="../ExpenseTracker/expense.html"
    //     })
    //     .catch(err=>{
    //         alert(err.response.data.message)
    //     }); 
    // }
}
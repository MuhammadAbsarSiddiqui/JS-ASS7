// ********Q1*********
document.getElementById('btn').addEventListener('click', function(){
    let username = document.getElementById('username').value;
    if(username.length >= 5)
    {       
        if(/^[a-zA-Z0-9]+$/.test(username))
        {
            alert("SUBMISSION SUCCEEDED");
            document.getElementById('form_id').submit();

        }
        else
        {
            alert("SUBMISSION FAILED PLEASE ENTER ONLY TEXT AND NUMBER");
        }
    }
    else
    {
        alert("PLEASE ENTER ATLEAST 5 CHARACTERS")
    }
});

// ********Q2*********
let btn1 = document.getElementById('btn1')
let divhid = document.getElementById('hidden_div')

btn1.addEventListener('click',function(){
    if(divhid.style.visibility=="hidden")
    {
        divhid.style.visibility="visible"
    }
    else{
        divhid.style.visibility="hidden"
    }
})

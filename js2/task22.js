
function validPhone(form)
{
    var regex = /^(8|\+7)[\- ]?(\d{3})[\- ]?(\d{3})[\- ]?(\d{2})[\- ]?(\d{2})$/;
    var content = form.value;
    if(!regex.test(content))
    {
        form.style.backgroundColor = "red";
    }
    else
    {
        form.style.backgroundColor = "white";
    }
}

function validMail(form)
{
    let regex = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
    console.log(regex.test(content));
    var content = form.value;
    if(!regex.test(content))
    {
        form.style.backgroundColor = "red";
    }
    else
    {
        form.style.backgroundColor = "white";
    }
}

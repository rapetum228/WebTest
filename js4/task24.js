class SubmitForm
{
    names = new Array();
    passports = new Array();
    mails = new Array();
    phones = new Array();
    

    addElement(id, value)
    {
        if(id == 'name')
        {
            this.names.push(value);
            console.log(this.names.length);
        }
        else if (id == 'pass')
        {
            this.passports.push(value);console.log(this.passports.length);
        }
        else if (id == 'email')
        {
            this.mails.push(value);console.log(this.mails.length);
        }
        else if (id == 'phone')
        {
            this.phones.push(value);console.log(this.phones.length);
        }
    }

    removeElement(id)
    {
        if(id == 'name')
        {
            this.names.pop();
            $('#name').val(this.names[this.names.length-1]);console.log(id +this.names.length);
            
        }
        else if (id == 'pass')
        {
            this.passports.pop();
            $('#pass').val(this.passports[this.passports.length-1]);console.log(id +this.passports.length);
        }
        else if (id == 'email')
        {
            this.mails.pop();
            $('#email').val(this.mails[this.mails.length-1]);console.log(id +this.mails.length);
        }
        else if (id == 'phone')
        {
            this.phones.pop();
            $('#phone').val(this.phones[this.phones.length-1]);console.log(id + this.phones.length);
        }
        
    }
    
    
}

let lastChangedInput = new Array();
let form = new SubmitForm();

$('.form-group input').on('change', 
function (e) 
{ 
    var data = $(e.target).val();
    console.log(data);
    nameId = $(e.target).attr('id');
    getLastChangedInput(nameId);
    form.addElement(lastChangedInput[lastChangedInput.length-1], data);
    console.log(lastChangedInput[lastChangedInput.length-1]);
});



function getLastChangedInput(element)
{
    lastChangedInput.push(element);
}

function undoForm()
{   console.log(lastChangedInput[lastChangedInput.length-1]);
    form.removeElement(lastChangedInput[lastChangedInput.length-1]);
    lastChangedInput.pop();
}
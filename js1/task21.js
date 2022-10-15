window.addEventListener('resize', resizeWindow);

let items = new Array();

function getHtmlElement(text)
{ 
    var item = `<div class='item'>${text}</div>`;
    return item;
}


function Append()
{
    if(items.length % 3 == 0)
    {
        var newContainer = createNewContainer();
        var target = $('.container');
        target.append(newContainer);
        if(items.length != 0)
            items = new Array();
    }
    var item = getHtmlElement('text');
    var target = $('.newContainer:last');
    target.append(item);
    items.push(item);
}

function createNewContainer(id)
{
    var newContainer = `<div class='newContainer'></div>`;
    return newContainer;
}

function resizeWindow()
{
    console.log(document.documentElement.clientWidth);
}

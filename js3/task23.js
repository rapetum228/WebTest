$('a').on('click', function (e) { e. preventDefault();});

$('a').on('click', function(e) {
    var url = e.target.href;
    var firstParentTagA = $(e.target).parents()[0]; //получить первого родителя
    var children = $(firstParentTagA).children('ul'); //получить дочерние элементы с тегом ul переменной а
    if(children.length == 0) //если потомков нет, то перейти по ссылке
    {
        window.open(url, '_blank').focus();
    }
    else
    {
        $(firstParentTagA).css('list-style-type', 'none');
        $(e.target).before('+');
    }
    return true;
});

// function aClick(element) {
//     var url = element.href;
//     var firstParentTagA = $(element).parents()[0]; //получить первого родителя
//     var children = $(firstParentTagA).children('ul'); //получить дочерние элементы с тегом ul переменной а
//     if(children.length == 0) //если потомков нет, то перейти по ссылке
//     {
//         window.open(url, '_blank').focus();
//     }
//     console.log(children.length );
// };

// function setPlusIcon()
// {
//     var linkes = document.getElementsByTagName('a').on('click', function (e) { e. preventDefault();});
    
// }


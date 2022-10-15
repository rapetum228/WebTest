let number = 0;
let count;
function load()
{
    console.log(number);
    $.get('getimage.php',{numberImage: number}, 
    function(data)
    {
        var jsonData = JSON.parse(data);
        
        $('img').attr('src',jsonData.path);
        count = jsonData.count;
        console.log(jsonData);
    });
}
$( ".next").on('click', function(){

    if(number >= count-1)
        {
            number = 0;
        }
        else{
            number++;
        }
    load();
});

$( ".back").on('click', function(){

    if(number <= 0)
        {
            number = count-1;
        }
        else{
            number--;
        }
    load();
});
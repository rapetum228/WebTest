<?php

if ($_FILES && $_FILES["filename"]["error"]== UPLOAD_ERR_OK)
{
    // $type = $_FILES["filename"]["type"];
    // if(strval($type) != 'image/png' || strval($type) != 'image/jpeg')
    // {
    //     echo "Только  image/png или image/jpeg, у вас: ".strval($type);
    //     return;
    // }

    $name = $_FILES["filename"]["name"];
    move_uploaded_file($_FILES["filename"]["tmp_name"], $name);
    
    echo "Файл загружен <br>";

    if (!rename($name, "images/".$name))
        echo "Ошибка перемещения файла";
    else 
        echo "Файл перемещен";
}
?>
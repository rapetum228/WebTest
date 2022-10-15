<?

$number_image = $_GET['numberImage'];
$file_paths = array();
get_image_paths();
$current_path = get_image($number_image);
echo json_encode(array('path' => $current_path, 'count' => count($file_paths)));

function get_image_paths() 
{
    $dir = getcwd();
    global $file_paths;
    if (is_dir($dir)) 
    {
        if ($dh = opendir($dir.'\images')) 
        {
            $file_paths = array();
            while (($file = readdir($dh)) !== false) 
            {
                if($file=='.' || $file=='..') continue;
                 
                $url = "../images/".$file;

                array_push($file_paths, $url);
            }
            closedir($dh); 
        }
    }
}

function get_image($number_image)
{
    global $file_paths;
    if(count($file_paths) == $number_image)
    {
        return $file_paths[0];
    }
    return $file_paths[$number_image];
}

?>
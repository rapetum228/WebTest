<?
$number1 = $_POST["num1"];
$number2 = $_POST["num2"];
$operation = $_POST["operation"];

$result = calculate($number1, $number2, $operation);
echo $result;

function calculate($number1, $number2, $operation)
{
    if (!preg_match("|^[\d][[\.]?|[\,]?][\d]+$|", $number1) ||!preg_match("|^[\d]+$|", $number2))
    {
        throw new Exception("Вводить только числа");
    }   
    if($operation == '+') return $number1+$number2;
    elseif($operation == '-') return $number1-$number2;
    elseif($operation == '*') return $number1*$number2;
    elseif($operation == '/') return $number1/$number2;
}

?>
<?
$summ = $_POST["summ"];
$percent_of_year = $_POST["percent"];
$deposite_term = $_POST["deposite_term"];
$result = find_income_from_deposite($summ, $percent_of_year, $deposite_term);
echo "New summ = ". $result;

function find_income_from_deposite($summ, $percent, $deposite_term)
{
    $income = $summ*(1+ ($percent/100)/12)**$deposite_term;
    return round($income);
}

?>
<?php
$hours = $_POST["hours"];
$minutes = $_POST["minutes"];

$watch = new Watch();
$result = $watch->get_angle_between_arrows($hours, $minutes);
echo $result;

class Watch
{
    private $step_degree_min = 360/60;
    private $step_degree_hour = 360/12;
    private $step_degree_hour_on_min = 360/12/60;
    function get_angle_between_arrows($hours, $minutes)
    {
        $hour_angle_from_start = $this->step_degree_hour * $hours + $this->step_degree_hour_on_min*$minutes;
        $min_angle_from_start = $this->step_degree_min * $minutes;
        $result = $hour_angle_from_start - $min_angle_from_start;

        if($result >= 0 && $result <= 180)
        {
             return $result;
        }
        elseif($result < 0 && $result >= -180)
        {
          return -$result;
        }
        elseif($result > 0 && $result > 180)
        {
            return 360-$result;
        }
        elseif($result < 0 && $result < -180)
        {
            return 360+$result;
        }
    }
}

?>
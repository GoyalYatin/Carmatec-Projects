<?php
$file = $_GET['file'];
header ("Content-type: octet/stream");
header ("Content-disposition: attachment; filename=".$file.";");
header("X-Accel-Redirect: ".$file);
# header("Content-Length: ".filesize($file));
#readfile($file);
exit;
?>

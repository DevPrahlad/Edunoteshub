<?phpsession_start();$host = "localhost"; /* Host name */$user = "ourwebpr_edu"; /* User */$password = "f8sGseH7EBp2"; /* Password */$dbname = "ourwebpr_edunoteshub"; /* Database name */$con = mysqli_connect($host, $user, $password,$dbname);// Check connectionif (!$con) {  die("Connection failed: " . mysqli_connect_error());}
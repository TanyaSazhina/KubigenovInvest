<?php
$email = isset($_POST['email']) ? $_POST['email'] : NULL;
// $resData = array();


    $db = mysqli_connect("127.0.0.1",  "root", "root" ,"log");
    $sql = "INSERT INTO `users`( `email`) VALUES ('$email')"; // запрос на добавление в бд
    $rs = mysqli_query($db, $sql);
    if ($rs) {
        $resData['message'] = "получилось";
        $resdata['success'] = 1;
    } else { 
        $resData['success'] = 0;
        $resData['message'] = "не получилось";
    }


echo json_encode($resData);
    <?php
    header('Content-Type:application/json');
    include_once('../config/config.php');
    $reqData = file_get_contents('php://input');
    $decodeData = json_decode($reqData, true);
    define('TABLE_USER', 'users');
    define('USER_ID', 'id');
    define('USER_NAME', 'user_name');
    define('USER_NAME_KH', 'user_name_kh');
    define('USER_REAL_NAME', 'real_name');
    define('USER_REAL_NAME_KH', 'real_name_kh');
    define('USER_PASSWORD', 'user_password');
    define('USER_GENDER', 'gender');
    define('USER_BIRTH_DATE', 'birth_date');
    define('USER_ADDRESS', 'address');
    define('USER_MAIL', 'mail');
    define('USER_PHONE', 'phone');
    define('USER_JOINED_DATE', 'joined_date');
    define('USER_IMAGE', 'image');
    echo json_encode(['res' => $decodeData]);
    $connection->close();
    die();
    ?>
    <?php
    include_once('../config/config.php');
    $userName = $decodeData['userName'];
    $login = $decodeData['login'];
    define('TABLE_USER', 'users');
    $password = $login ? $decodeData['password'] : null;
    $res = $login ? $sql->select([
        'table' => TABLE_USER,
        'condition' => [
            USER_NAME => $userName,
            USER_PASSWORD => $password,
        ],
        'comparison' => '=',
        'conjunction' => 'AND',
    ]) : $sql->select([
        'table' => TABLE_USER,
        'condition' => [
            USER_NAME => $userName,
        ],
        'comparison' => '=',
    ]);
    echo json_encode($res);
    $connection->close();
    die();
    ?>
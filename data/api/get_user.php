    <?php
    include_once('../config/config.php');
    include_once('../helper/helper.php');
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
    if ($login && $res['success'] && count($res['info']) > 0) {
        $encodedName = encodeUser($userName);
        setcookie(name: 'user', value: $encodedName, expires_or_options: time() + 60 * 60 * 24 * 30, path: '/', secure: true, httponly: true);
    }
    if ($res['success'] && count($res['info']) > 0) {
        $res['info'][0] = $user->toA($user->realFromA($res['info'][0]));
    }
    echo json_encode($res);
    $connection->close();
    die();
    ?>
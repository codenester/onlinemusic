    <?php
    header('Content-Type:application/json');
    include_once('../model/user.php');
    include_once('../sql/sql.php');
    $connection = new mysqli(
        '127.0.0.1',
        'root',
        'Rithea123',
        'music_online',
    );
    if ($connection->error) {
        echo json_encode(['msg' => $connection->error]);
        $connection->close();
        exit();
    }
    $reqData = file_get_contents('php://input');
    $decodeData = json_decode($reqData, true);
    $sql = new SQL($connection);
    $user = new User();
    ?>
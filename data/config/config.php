    <?php
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
    ?>
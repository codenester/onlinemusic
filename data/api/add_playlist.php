    <?php
    include_once('../config/config.php');
    define('TABLE_PLAYLIST', 'playlist');
    $playlistRes = $sql->select([
        'table' => TABLE_PLAYLIST,
        'condition' => [
            'user' => $decodeData['user']
        ],
        'comparison' => '='
    ]);
    if (!$playlistRes) {
        echo json_encode($playlistRes);
        $connection->close();
        die();
    }
    $id = count($playlistRes['info']) + 1;
    $res = $sql->insert([
        'table' => TABLE_PLAYLIST,
        'entries' => [
            'id' => $id,
            'created_date' => $decodeData['createdDate'],
            'user' => $decodeData['user'],
            'music' => $decodeData['music'],
            'listened_count' => 1,
        ],
    ]);
    echo json_encode($res);
    $connection->close();
    die();
    ?>
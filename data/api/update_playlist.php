    <?php
    include_once('../config/config.php');
    include_once('../model/playlist.php');
    define('TABLE_PLAYLIST', 'music');
    $id = $decodeData['id'];
    $oldVal = $sql->select([
        'table' => TABLE_PLAYLIST,
        'fields' => ['listened_count'],
        'condition' => ['id' => $id],
        'comparison' => '='
    ]);
    if (!$oldVal['success']) {
        echo json_encode($oldVal);
        $connection->close();
        die();
    }
    $count = (int)$oldVal['info'][0]['listened_count'];
    $res = $sql->update([
        'table' => TABLE_PLAYLIST,
        'entries' => ['listened_count' => $count + 1],
        'condition' => ['id' => $id],
        'comparison' => '='
    ]);
    echo json_encode($res);
    $connection->close();
    die();
    ?>
    <?php
    include_once('../config/config.php');
    include_once('../model/artist.php');
    include_once('../model/song.php');
    define('TABLE_MUSIC', 'music');
    define('TABLE_ARTIST', 'artist');
    define('TABLE_MUSIC_OF_ARTIST', 'music_of_artist');
    $id = $decodeData['id'];
    $forDownload = $decodeData['download'];
    $oldVal = $sql->select([
        'table' => TABLE_MUSIC,
        'fields' => $forDownload ? ['downloaded_count'] : ['listened_count'],
        'condition' => ['id' => $id],
        'comparison' => '='
    ]);
    if (!$oldVal['success']) {
        echo json_encode($oldVal);
        $connection->close();
        die();
    }
    $count = (int)$oldVal['info'][0][$forDownload ? 'downloaded_count' : 'listened_count'];
    $res = $sql->update([
        'table' => TABLE_MUSIC,
        'entries' => $forDownload ? ['downloaded_count' => $count + 1]
            : ['listened_count' => $count + 1],
        'condition' => ['id' => $id],
        'comparison' => '='
    ]);
    echo json_encode($res);
    $connection->close();
    die();
    ?>
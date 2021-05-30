    <?php
    include_once('../config/config.php');
    include_once('../model/artist.php');
    include_once('../model/song.php');
    include_once('../model/playlist.php');
    define('TABLE_MUSIC', 'music');
    define('TABLE_ARTIST', 'artist');
    define('TABLE_MUSIC_OF_ARTIST', 'music_of_artist');
    define('TABLE_PLAYLIST', 'playlist');
    $dataRes = $sql->select([
        'table' => TABLE_PLAYLIST,
        'condition' => ['user' => $decodeData['user']],
        'comparison' => '='
    ]);
    if (!$dataRes['success']) {
        echo json_encode($dataRes);
        $connection->close();
        die();
    }
    $res = [];
    foreach ($dataRes['info'] as $d) {
        $dataModel = new Playlist();
        $dataModel->fromDb($d);
        $data = $dataModel->toClient();
        $songRes = $sql->select([
            'table' => TABLE_MUSIC,
            'condition' => ['id' => $dataModel->song],
            'comparison' => '='
        ]);
        if (!$songRes['success']) {
            echo json_encode($songRes);
            $connection->close();
            die();
            break;
        }
        $songModel = new Song();
        $songModel->fromDb($songRes['info'][0]);
        $artists = [];
        $ma = $sql->select([
            'table' => TABLE_MUSIC_OF_ARTIST,
            'condition' => ['id' => $songModel->id],
            'comparison' => '='
        ]);
        if (!$ma['success']) {
            echo json_encode($ma);
            $connection->close();
            die();
            break;
        }
        foreach ($ma['info'] as $artistId) {
            $artistRes = $sql->select([
                'table' => TABLE_ARTIST,
                'condition' => ['id' => $artistId['artist']],
                'comparison' => '='
            ]);
            if (!$artistRes['success']) {
                echo json_encode($artistRes);
                $connection->close();
                die();
                break;
            }
            $artist = new Artist();
            $artist->fromDb($artistRes['info'][0]);
            array_push($artists, $artist->toClient());
        }
        $song = $songModel->toClient();
        $song['artists'] = $artists;
        $d['song'] = $song;
        array_push($res, $d);
    }
    echo json_encode(['success' => true, 'info' => $res]);
    $connection->close();
    die();
    ?>
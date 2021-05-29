    <?php
    include_once('../config/config.php');
    include_once('../model/artist.php');
    include_once('../model/song.php');
    define('TABLE_MUSIC', 'music');
    define('TABLE_ARTIST', 'artist');
    define('TABLE_MUSIC_OF_ARTIST', 'music_of_artist');
    $q = "SELECT * FROM " . TABLE_MUSIC;
    $stmt = $connection->query($q);
    if (!$stmt) {
        echo json_encode(['success' => false, 'info' => $connection->error]);
        die();
    }
    $songs = [];
    if (mysqli_num_rows($stmt) > 0) {
        while ($row = mysqli_fetch_assoc($stmt)) {
            $artists = [];
            $ma = $sql->select([
                'table' => TABLE_MUSIC_OF_ARTIST,
                'condition' => [
                    'music' => $row['id']
                ],
                'comparison' => '='
            ]);
            if (!$ma) {
                echo json_encode($ma);
                $connection->close();
                die();
                break;
            }
            $mas = $ma['info'];
            foreach ($mas as $m) {
                $st = $sql->select([
                    'table' => TABLE_ARTIST,
                    'condition' => [
                        'id' => $m['artist']
                    ],
                    'comparison' => '='
                ]);
                if (!$st) {
                    echo json_encode($st);
                    $connection->close();
                    die();
                    break;
                }
                $at = $st['info'][0];
                array_push($artists, $at);
            }
            $row['artists'] = $artists;
            $song = new Song();
            $song->fromDb($row);
            array_push($songs, $song->toClient());
        }
        $khSongs = [];
        $enSongs = [];
        foreach ($songs as $s) {
            if ($s['category'] == 1) {
                array_push($khSongs, $s);
            } else {
                array_push($enSongs, $s);
            }
        }
        echo json_encode(['success' => true, 'info' => ['khSongs' => $khSongs, 'enSongs' => $enSongs]]);
        $connection->close();
        die();
    }
    echo json_encode(['success' => true, 'info' => $songs]);
    $connection->close();
    die();
    ?>
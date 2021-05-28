    <?php
    include_once('../config/config.php');
    include_once('../model/artist.php');
    include_once('../model/song.php');
    define('TABLE_MUSIC', 'music');
    define('TABLE_ARTIST', 'artist');
    define('TABLE_MUSIC_OF_ARTIST', 'music_of_artist');
    $q = "SELECT * FROM " . TABLE_MUSIC . " WHERE category=1 ORDER BY listened_count DESC LIMIT 5";

    $popularKh = [];
    $popularFetch = $connection->query($q);
    if (!$popularFetch) {
        echo json_encode(['success' => false, 'info' => $connection->error]);
        $connection->close();
        die();
    }
    if (mysqli_num_rows($popularFetch) > 0) {
        while ($row = mysqli_fetch_assoc($popularFetch)) {
            $artists = [];
            $ma = $sql->select([
                'table' => TABLE_MUSIC_OF_ARTIST,
                'condition' => [
                    'music' => $row['id']
                ],
                'comparison' => '=',
            ]);
            if (!$ma['success']) {
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
                if (!$st['success']) {
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
            array_push($popularKh, $song->toClient());
        }
    }
    $q2 = "SELECT * FROM " . TABLE_MUSIC . " WHERE category=1 ORDER BY downloaded_count DESC LIMIT 5";
    $trendingKh = [];
    $trendingFetch = $connection->query($q2);
    if (!$trendingFetch) {
        echo json_encode(['success' => false, 'info' => $connection->error]);
        $connection->close();
        die();
    }
    if (mysqli_num_rows($trendingFetch) > 0) {
        while ($row = mysqli_fetch_assoc($trendingFetch)) {
            $artists2 = [];
            $ma2 = $sql->select([
                'table' => TABLE_MUSIC_OF_ARTIST,
                'condition' => [
                    'music' => $row['id']
                ],
                'comparison' => '=',
            ]);
            if (!$ma2['success']) {
                echo json_encode($ma2);
                $connection->close();
                die();
                break;
            }
            $mas2 = $ma2['info'];
            foreach ($mas2 as $m2) {
                $st2 = $sql->select([
                    'table' => TABLE_ARTIST,
                    'condition' => [
                        'id' => $m2['artist']
                    ],
                    'comparison' => '='
                ]);
                if (!$st2['success']) {
                    echo json_encode($st2);
                    $connection->close();
                    die();
                    break;
                }
                $at2 = $st2['info'][0];
                array_push($artists2, $at2);
            }
            $row['artists'] = $artists2;
            $song2 = new Song();
            $song2->fromDb($row);
            array_push($trendingKh, $song2->toClient());
        }
    }
    $q3 = "SELECT * FROM " . TABLE_MUSIC . " WHERE category=2 ORDER BY downloaded_count DESC LIMIT 5";
    $trendingEn = [];
    $trendingEnFetch = $connection->query($q3);
    if (!$trendingEnFetch) {
        echo json_encode(['success' => false, 'info' => $connection->error]);
        $connection->close();
        die();
    }
    if (mysqli_num_rows($trendingEnFetch) > 0) {
        while ($row = mysqli_fetch_assoc($trendingEnFetch)) {
            $artists3 = [];
            $ma3 = $sql->select([
                'table' => TABLE_MUSIC_OF_ARTIST,
                'condition' => [
                    'music' => $row['id']
                ],
                'comparison' => '=',
            ]);
            if (!$ma3['success']) {
                echo json_encode($ma3);
                $connection->close();
                die();
                break;
            }
            $mas3 = $ma3['info'];
            foreach ($mas3 as $m3) {
                $st3 = $sql->select([
                    'table' => TABLE_ARTIST,
                    'condition' => [
                        'id' => $m3['artist']
                    ],
                    'comparison' => '='
                ]);
                if (!$st3['success']) {
                    echo json_encode($st3);
                    $connection->close();
                    die();
                    break;
                }
                $at3 = $st3['info'][0];
                array_push($artists3, $at3);
            }
            $row['artists'] = $artists3;
            $song3 = new Song();
            $song3->fromDb($row);
            array_push($trendingEn, $song3->toClient());
        }
    }
    $q4 = "SELECT * FROM " . TABLE_MUSIC . " WHERE category=2 ORDER BY listened_count DESC LIMIT 5";
    $popularEn = [];
    $popularEnFetch = $connection->query($q4);
    if (!$popularEnFetch) {
        echo json_encode(['success' => false, 'info' => $connection->error]);
        $connection->close();
        die();
    }
    if (mysqli_num_rows($popularEnFetch) > 0) {
        while ($row = mysqli_fetch_assoc($popularEnFetch)) {
            $artists4 = [];
            $ma4 = $sql->select([
                'table' => TABLE_MUSIC_OF_ARTIST,
                'condition' => [
                    'music' => $row['id']
                ],
                'comparison' => '=',
            ]);
            if (!$ma4['success']) {
                echo json_encode($ma4);
                $connection->close();
                die();
                break;
            }
            $mas4 = $ma4['info'];
            foreach ($mas4 as $m4) {
                $st4 = $sql->select([
                    'table' => TABLE_ARTIST,
                    'condition' => [
                        'id' => $m4['artist']
                    ],
                    'comparison' => '='
                ]);
                if (!$st4['success']) {
                    echo json_encode($st4);
                    $connection->close();
                    die();
                    break;
                }
                $at4 = $st4['info'][0];
                array_push($artists4, $at4);
            }
            $row['artists'] = $artists4;
            $song4 = new Song();
            $song4->fromDb($row);
            array_push($popularEn, $song4->toClient());
        }
    }
    echo json_encode(['success' => true, 'info' => [
        'popularKh' => $popularKh,
        'trendingKh' => $trendingKh,
        'popularEn' => $popularEn,
        'trendingEn' => $trendingEn
    ]]);
    $connection->close();
    die();
    ?>
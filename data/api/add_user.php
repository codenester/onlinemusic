    <?php
    include_once('../config/config.php');
    
    $img = $decodeData['image'];
    if (gettype($img) != 'string') {
        $raw = implode(array_map('chr', $img['bytes']));
        $imgName = $decodeData['userName'];
        $ext = explode('/', $img['type'])[1];
        $path = "../upload/$imgName.$ext";
        file_put_contents($path, $raw);
        $img = "data" . substr($path, 2);
        $decodeData['image'] = $img;
    }
    $decodeData['image'] = $img;
    $user->fromA($decodeData);
    define('TABLE_USER', 'users');
    $res = $sql->insert([
        'table' => TABLE_USER,
        'entries' => $user->realForDbInsert()
    ]);
    echo json_encode(['res' => $res]);
    $connection->close();
    die();
    ?>
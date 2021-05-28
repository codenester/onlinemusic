    <?php
    if (isset($_COOKIE['user'])) {
        setcookie("user", "", time() - 3600, secure: true, path: '/', httponly: true);
    }
    echo json_encode(['success' => true, 'info' => 'logged out']);
    ?>
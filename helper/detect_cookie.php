    <?php
    function decodeUser($user)
    {
        $letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        $decoded = substr($user, 2);
        $decodedArr = explode('#&', $user);
        for ($i = 0; $i < count($decodedArr); $i++) {
            if (ctype_alpha($decodedArr[$i])) {
                $decodedArr[$i] = array_search($decodedArr[$i], $letters);
            } else if (ctype_digit($decodedArr[$i])) {
                $decodedArr[$i] = $letters[(int)$decodedArr[$i]];
            }
        }
        $decoded = join('', $decodedArr);
        return $decoded;
    }
    ?>
    <script>
        currentUser = <?php echo "'" . decodeUser($_COOKIE['user']) . "'" ?>;
    </script>
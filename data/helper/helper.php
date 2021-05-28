    <?php
    function encodeUser($userName)
    {
        $letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        $encoded = '';
        foreach (str_split(strtolower($userName)) as $ch) {
            $target = '';
            if (ctype_alpha($ch)) {
                $target = '' . array_search($ch, $letters);
            } else if (ctype_digit($ch)) {
                $target = $letters[(int)$ch];
            } else {
                $target = $ch;
            }
            $encoded = $encoded . "#&" . $target;
        }
        return $encoded;
    }
    
    ?>
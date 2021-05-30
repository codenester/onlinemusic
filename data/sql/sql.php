    <?php
    class SQL
    {
        private mysqli $con;
        public function __construct(mysqli $con)
        {
            $this->con = $con;
        }
        public function select($arr)
        {
            $tbl = $arr['table'];
            $keys = [];
            $dbKeys = '*';
            if (key_exists('fields', $arr)) {
                foreach ($arr['fields'] as $key) {
                    array_push($keys, $key);
                }
                $dbKeys = join(', ', $keys);
                $dbKeys = "($dbKeys)";
            }
            $q = "SELECT $dbKeys FROM $tbl";
            $conditions = [];
            $condition = '';
            if (key_exists('condition', $arr)) {
                foreach ($arr['condition'] as $f => $v) {
                    if (gettype($v) == 'string') {
                        $v = "'$v'";
                    }
                    array_push($conditions, $f . $arr['comparison'] . $v);
                }
                if (count($arr['condition']) > 1) {
                    $conjunction = $arr['conjunction'];
                    $condition = join(" $conjunction ", $conditions);
                } else {
                    $condition = $conditions[0];
                }
                $q = "$q WHERE $condition";
            }
            $res = $this->con->query($q);
            if (!$res) {
                return ['success' => false, 'info' => $this->con->error];
            }
            $data = [];
            if (mysqli_num_rows($res) > 0) {
                while ($row = mysqli_fetch_assoc($res)) {
                    array_push($data, $row);
                }
            } else {
                return ['success' => true, 'info' => []];
            }
            return ['success' => true, 'info' => $data];
        }
        public function insert($arr)
        {
            $tbl = $arr['table'];
            $keys = [];
            $values = [];
            foreach ($arr['entries'] as $key => $val) {
                if ($val != null && $val != '') {
                    if (gettype($val) == 'string') {
                        $val = "'$val'";
                    }
                    array_push($values, $val);
                    array_push($keys, $key);
                }
            }
            $dbKeys = join(", ", $keys);
            $dbValues = join(",", $values);
            $q = "INSERT INTO $tbl ($dbKeys) VALUES ($dbValues)";
            $insertRes = $this->con->query($q);
            if (!$insertRes) {
                return ['success' => false, 'info' => $this->con->error];
            }
            return ['success' => true, 'info' => 'inserted'];
        }
        public function update($arr)
        {
            $tbl = $arr['table'];
            $entries = [];
            foreach ($arr['entries'] as $key => $val) {
                if (gettype($val) == 'string') {
                    $val = "'$val'";
                }
                array_push($entries, "$key=$val");
            }
            $qEntries = join(', ', $entries);
            $q = "UPDATE $tbl SET $qEntries";
            $conditions = [];
            if (key_exists('condition', $arr)) {
                foreach ($arr['condition'] as $f => $v) {
                    if (gettype($v) == 'string') {
                        $v = "'$v'";
                    }
                    array_push($conditions, $f . $arr['comparison'] . $v);
                }
                if (count($arr['condition']) > 1) {
                    $conjunction = $arr['conjunction'];
                    $condition = join(" $conjunction ", $conditions);
                } else {
                    $condition = $conditions[0];
                }
                $q = "$q WHERE $condition";
            }
            $res = $this->con->query($q);
            if (!$res) {
                return ['success' => false, 'info' => $this->con->error];
            }
            return ['success' => true, 'info' => 'updated'];
        }
    }
    ?>
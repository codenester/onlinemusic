    <?php
    define('ARTIST_ID', 'id');
    define('ARTIST_NAME', 'artist_name');
    define('ARTIST_NAME_KH', 'artist_name_kh');
    define('ARTIST_GENDER', 'gender');
    define('ARTIST_NATIONALITY', 'nationality');
    define('ARTIST_AGE', 'age');
    define('ARTIST_STATUS', 'status');
    class Artist
    {
        public int $id;
        public String $name;
        public ?String $nameKh = null;
        public String $gender;
        public String $nationality;
        public ?int $age = null;
        public bool $active;
        public function fromDb($arr)
        {
            $this->id = $arr[ARTIST_ID];
            $this->name = $arr[ARTIST_NAME];
            if (key_exists(ARTIST_NAME_KH, $arr) && $arr[ARTIST_NAME_KH] != null && $arr[ARTIST_NAME_KH] != '') {
                $this->nameKh = $arr[ARTIST_NAME_KH];
            }
            $this->gender = $arr[ARTIST_GENDER];
            $this->nationality = $arr[ARTIST_NATIONALITY];
            if (key_exists(ARTIST_AGE, $arr) && $arr[ARTIST_AGE] != null && $arr[ARTIST_AGE]) {
                $this->age = $arr[ARTIST_AGE];
            }
            $this->active = $arr[ARTIST_STATUS] == 1;
        }
        public function toClient(): array
        {
            $res = [
                'id' => $this->id,
                'name' => $this->name,
                'gender' => $this->gender,
                'nationality' => $this->nationality,
                'active' => $this->active,
            ];
            if ($this->nameKh != null && $this->nameKh != '') {
                $res['nameKh'] = $this->nameKh;
            }
            if ($this->age != null) {
                $res['age'] = $this->age;
            }
            return $res;
        }
    }
    ?>
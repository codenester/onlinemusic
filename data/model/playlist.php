    <?php
    include_once('../model/artist.php');
    include_once('../model/song.php');
    define('PLAYLIST_ID', 'id');
    define('PLAYLIST_NAME', 'playlist_name');
    define('PLAYLIST_NAME_KH', 'playlist_name_kh');
    define('PLAYLIST_USER', 'user');
    define('PLAYLIST_MUSIC', 'music');
    define('PLAYLIST_CREATED_DATE', 'created_date');
    define('PLAYLIST_LISTENED_COUNT', 'listened_count');
    class Playlist
    {
        public ?int $id;
        public ?String $name = null;
        public ?String $nameKh = null;
        public int $user;
        public int $song;
        public String $createdDate;
        public int $listenedCount;
        public function fromDb($arr)
        {
            $this->id = $arr[PLAYLIST_ID];
            if (key_exists(PLAYLIST_NAME, $arr) && $arr[PLAYLIST_NAME] != null && $arr[PLAYLIST_NAME] != '') {
                $this->name = $arr[PLAYLIST_NAME];
            }
            if (key_exists(PLAYLIST_NAME_KH, $arr) && $arr[PLAYLIST_NAME_KH] != null && $arr[PLAYLIST_NAME_KH] != '') {
                $this->nameKh = $arr[PLAYLIST_NAME_KH];
            }
            $this->user = $arr[PLAYLIST_USER];
            $this->song = $arr[PLAYLIST_MUSIC];
            $this->createdDate = $arr[PLAYLIST_CREATED_DATE];
            $this->listenedCount = $arr[PLAYLIST_LISTENED_COUNT];
        }
        public function toClient()
        {
            $res = [
                'id' => $this->id,
                'user' => $this->user,
                'song' => $this->song,
                'createdDate' => $this->createdDate,
                'listenedCount' => $this->listenedCount
            ];
            if ($this->name != null && $this->name != '') {
                $res['name'] = $this->name;
            }
            if ($this->nameKh != null && $this->nameKh != '') {
                $res['nameKh'] = $this->nameKh;
            }
            return $res;
        }
    }
    ?>
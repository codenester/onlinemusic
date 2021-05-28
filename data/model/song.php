    <?php
    include_once('../model/artist.php');
    define('MUSIC_NAME', 'music_name');
    define('MUSIC_NAME_KH', 'music_name_kh');
    define('MUSIC_ID', 'id');
    define("MUSIC_CATEGORY", 'category');
    define('MUSIC_RELEASED_DATE', 'released_date');
    define('MUSIC_DURATION', 'duration');
    define('MUSIC_POPULAR', 'popular');
    define('MUSIC_TRENDING', 'trending');
    define('MUSIC_DOWNLOAD_COUNT', 'downloaded_count');
    define('MUSIC_LISTENED_COUNT', 'listened_count');
    define('MUSIC_IMAGE', 'image');
    define('MUSIC_LYRIC', 'lyric');
    define('MUSIC_SOURCE', 'source');
    class Song
    {
        public int $id;
        public String $name;
        public ?String $nameKh = null;
        public String $category;
        public ?String $releasedDate = null;
        public int $duration;
        public bool $popular;
        public bool $trending;
        public int $downloadedCount;
        public int $listenedCount;
        public String $image;
        public ?String $lyric = null;
        public String $source;
        public ?array $artists = [];
        public function fromDb($arr)
        {
            $this->id = $arr[MUSIC_ID];
            $this->name = $arr[MUSIC_NAME];
            $this->category = $arr[MUSIC_CATEGORY];
            $this->duration = $arr[MUSIC_DURATION];
            $this->popular = $arr[MUSIC_POPULAR];
            $this->trending = $arr[MUSIC_TRENDING];
            $this->downloadedCount = $arr[MUSIC_DOWNLOAD_COUNT];
            $this->listenedCount = $arr[MUSIC_LISTENED_COUNT];
            $this->image = $arr[MUSIC_IMAGE];
            $this->source = $arr[MUSIC_SOURCE];
            if (key_exists(MUSIC_NAME_KH, $arr) && $arr[MUSIC_NAME_KH] != null && $arr[MUSIC_NAME_KH] != '') {
                $this->nameKh = $arr[MUSIC_NAME_KH];
            }
            if (key_exists(MUSIC_LYRIC, $arr) && $arr[MUSIC_LYRIC] != null && $arr[MUSIC_LYRIC] != '') {
                $this->lyric = $arr[MUSIC_LYRIC];
            }
            if (key_exists(MUSIC_RELEASED_DATE, $arr) && $arr[MUSIC_RELEASED_DATE] != null && $arr[MUSIC_RELEASED_DATE] != '') {
                $this->releasedDate = $arr[MUSIC_RELEASED_DATE];
            }
            if (key_exists('artists', $arr) && $arr['artists'] != null && count($arr['artists']) > 0) {
                foreach ($arr['artists'] as $song) {
                    $artist = new Artist();
                    $artist->fromDb($song);
                    array_push($this->artists, $artist);
                }
            }
        }
        public function toClient()
        {
            $res = [
                'id' => $this->id,
                'name' => $this->name,
                'category' => $this->category,
                'duration' => $this->duration,
                'popular' => $this->popular,
                'trending' => $this->trending,
                'downloadCount' => $this->downloadedCount,
                'listenedCount' => $this->listenedCount,
                'image' => $this->image,
                'source' => $this->source
            ];
            if ($this->nameKh != null && $this->nameKh != '') {
                $res['nameKh'] = $this->nameKh;
            }
            if ($this->releasedDate != null && $this->releasedDate != '') {
                $res['releasedDate'] = $this->releasedDate;
            }
            if ($this->lyric != null && $this->lyric != '') {
                $res['lyric'] = $this->lyric;
            }
            if ($this->artists != null && count($this->artists) > 0) {
                $arr = [];
                foreach ($this->artists as $artist) {
                    array_push($arr, $artist->toClient());
                }
                $res['artists'] = $arr;
            }
            return $res;
        }
    }
    ?>
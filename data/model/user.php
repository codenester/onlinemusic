    <?php
    define('USER_ID', 'id');
    define('USER_NAME', 'user_name');
    define('USER_NAME_KH', 'user_name_kh');
    define('USER_REAL_NAME', 'real_name');
    define('USER_REAL_NAME_KH', 'real_name_kh');
    define('USER_PASSWORD', 'user_password');
    define('USER_GENDER', 'gender');
    define('USER_BIRTH_DATE', 'birth_date');
    define('USER_ADDRESS', 'address');
    define('USER_MAIL', 'mail');
    define('USER_PHONE', 'phone');
    define('USER_JOINED_DATE', 'joined_date');
    define('USER_IMAGE', 'image');
    class User
    {
        public int $id;
        public String $userName;
        public String $realName;
        public String $userNameKh;
        public String $realNameKh;
        public String $password;
        public String $gender;
        public String $birthDate;
        public String $address;
        public String $mail;
        public String $phone;
        public String $joinedDate;
        public String $image;
        public function toA()
        {
            return [
                'id' => $this->id,
                'userName' => $this->userName,
                'userNameKh' => $this->userNameKh,
                'realName' => $this->realName,
                'realNameKh' => $this->realNameKh,
                'password' => $this->password,
                'gender' => $this->gender,
                'birthDate' => $this->birthDate,
                'address' => $this->address,
                'mail' => $this->mail,
                'phone' => $this->phone,
                'joinedDate' => $this->joinedDate,
                'image' => $this->image
            ];
        }
        public function realToA()
        {
            return [
                USER_ID => $this->id,
                USER_NAME => $this->userName,
                USER_NAME_KH => $this->userNameKh ?? null,
                USER_REAL_NAME => $this->realName ?? null,
                USER_REAL_NAME_KH => $this->realNameKh ?? null,
                USER_PASSWORD => $this->password,
                USER_GENDER => $this->gender,
                USER_BIRTH_DATE => $this->birthDate ?? null,
                USER_ADDRESS => $this->address ?? null,
                USER_MAIL => $this->mail ?? null,
                USER_PHONE => $this->phone ?? null,
                USER_JOINED_DATE => $this->joinedDate,
                USER_IMAGE => $this->image
            ];
        }
        public function realForDbInsert()
        {
            return [
                USER_NAME => $this->userName,
                USER_NAME_KH => $this->userNameKh ?? null,
                USER_REAL_NAME => $this->realName ?? null,
                USER_REAL_NAME_KH => $this->realNameKh ?? null,
                USER_PASSWORD => $this->password,
                USER_GENDER => $this->gender,
                USER_BIRTH_DATE => $this->birthDate ?? null,
                USER_ADDRESS => $this->address ?? null,
                USER_MAIL => $this->mail ?? null,
                USER_PHONE => $this->phone ?? null,
                USER_JOINED_DATE => $this->joinedDate,
                USER_IMAGE => $this->image
            ];
        }
        public function fromA(array $arr)
        {
            if ($arr['id']) $this->id = $arr['id'];
            $this->userName = $arr['userName'];
            $this->userNameKh = $arr['userNameKh'] ?? '';
            $this->realName = $arr['realName'] ?? '';
            $this->realNameKh = $arr['realNameKh'] ?? '';
            $this->password = $arr['password'];
            $this->gender = $arr['gender'];
            $this->birthDate = $arr['birthDate'] ?? '';
            $this->address = $arr['address'] ?? '';
            $this->mail = $arr['mail'] ?? '';
            $this->phone = $arr['phone'] ?? '';
            $this->joinedDate = $arr['joinedDate'];
            $this->image = $arr['image'];
        }
        public function realFromA(array $arr)
        {
            if ($arr['id']) $this->id = $arr[USER_ID];
            $this->userName = $arr[USER_NAME];
            $this->userNameKh = $arr[USER_NAME_KH] ?? '';
            $this->realName = $arr[USER_REAL_NAME] ?? '';
            $this->realNameKh = $arr[USER_REAL_NAME_KH] ?? '';
            $this->password = $arr[USER_PASSWORD];
            $this->gender = $arr[USER_GENDER];
            $this->birthDate = $arr[USER_BIRTH_DATE] ?? '';
            $this->address = $arr[USER_ID] ?? '';
            $this->mail = $arr[USER_MAIL] ?? '';
            $this->phone = $arr[USER_PHONE] ?? '';
            $this->joinedDate = $arr[USER_JOINED_DATE];
            $this->image = $arr[USER_IMAGE];
        }
    }
    ?>
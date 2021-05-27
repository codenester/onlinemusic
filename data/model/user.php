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
                'id' => $this->id,
                'user_name' => $this->userName,
                'user_name_kh' => $this->userNameKh,
                'real_name' => $this->realName,
                'real_name_kh' => $this->realNameKh,
                'user_password' => $this->password,
                'gender' => $this->gender,
                'birth_date' => $this->birthDate,
                'address' => $this->address,
                'mail' => $this->mail,
                'phone' => $this->phone,
                'joinedDate' => $this->joinedDate,
                'image' => $this->image
            ];
        }
        public function realForDbInsert()
        {
            return [
                'user_name' => $this->userName,
                'user_name_kh' => $this->userNameKh ?? null,
                'real_name' => $this->realName ?? null,
                'real_name_kh' => $this->realNameKh ?? null,
                'user_password' => $this->password,
                'gender' => $this->gender,
                'birth_date' => $this->birthDate ?? null,
                'address' => $this->address ?? null,
                'mail' => $this->mail ?? null,
                'phone' => $this->phone ?? null,
                'joined_date' => $this->joinedDate,
                'image' => $this->image
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
    }
    ?>
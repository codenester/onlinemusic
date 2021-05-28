export default class HelperString {
  get filePath() {
    return {
      femaleAvatar: "/assets/images/avatar/f_avatar1.png",
      maleAvatar: "/assets/images/avatar/m_avatar1.png",
    };
  }
  get api() {
    return {
      register: "/data/api/add_user.php",
      getUser: "/data/api/get_user.php",
      logout: "/data/api/logout.php",
      getTopSongs: "/data/api/get_top_songs.php",
    };
  }
}

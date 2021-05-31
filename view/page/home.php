<script>
    let currentUser;
</script>
<?php
include_once('../layout/head.php');
include_once('../../helper/state.php');
if (isset($_COOKIE['user'])) {
    include_once('../../helper/detect_cookie.php');
}
?>
<link rel="stylesheet" href="/css/home.css">
<div id="container">
    <div id="background"></div>
    <div id="foreground">
        <div id="layer-1">
            <div id="small-part"> </div>
            <div id="big-part"></div>
        </div>
        <?php
        include_once('./main_home.php');
        include_once('./signup.php');
        include_once('./login.php');
        include_once('./music.php');
        include_once('./about.php');
        ?>
    </div>
</div>
<?php include_once('../layout/foot.php'); ?>
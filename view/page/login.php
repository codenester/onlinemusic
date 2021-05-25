<?php include_once('../layout/head.php'); ?>
<link rel="stylesheet" href="/css/login.css">
<div id="login-page">
    <div id="login-title">User Login</div>
    <div id="login-wrap">
        <div id="l-username-wrap">
            <label id="l-username-label">User Name</label>
            <input type="text" id="l-username" placeholder="Enter username">
        </div>
        <div id="l-password-wrap">
            <label id="l-password-label">Password</label>
            <input type="password" id="l-password" placeholder="Enter password">
        </div>
        <div id="login-validator" class="validator"></div>
        <div id="l-btn-wrap">
            <button id="cancel" class="btn-type1">cancel</button>
            <button id="btn-login" class="btn-type1">login</button>
        </div>
    </div>
</div>
<?php include_once('../layout/foot.php'); ?>
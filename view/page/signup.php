<link rel="stylesheet" href="/css/signup.css">
<div id="signup-page">
    <input type="file" id="file" hidden>
    <div id="s-wrap">
        <div id="s-avatar">
            <div id="avatar-wrap">
                <div id="avatar-cover">
                    <button id="upload">Choose</button>
                </div>
            </div>
        </div>
        <div id="s-info">
            <div id="s-top">
                <div id="s-left">
                    <div id="username-wrap">
                        <label id='username-label'>User Name *</label>
                        <input type="text" id="username" placeholder="Enter user name" require>
                        <span id="username-validate"></span>
                    </div>
                    <div id="password-wrap">
                        <label id='password-label'>Password *</label>
                        <input type="password" id="password" placeholder="Enter password" require>
                        <span id="password-validate"></span>
                    </div>
                    <div id="confirm-password-wrap">
                        <label id='confirm-password-label'>Confirm Password *</label>
                        <input type="password" id="confirm-password" placeholder="Re-enter password" require>
                        <span id="confirm-password-validate"></span>
                    </div>
                </div>
                <div id="s-right">
                    <div id="birth-date-wrap">
                        <label id='birth-date-label'>Birth Date</label>
                        <input type="text" id="birth-date" placeholder="Select date">
                    </div>
                    <div id="mail-wrap">
                        <label id='mail-label'>E-Mail</label>
                        <input type='text' id="mail" placeholder="Ex: example@gmail.com">
                    </div>
                    <div id="phone-wrap">
                        <label id='phone-label'>Phone</label>
                        <input type='text' id="phone" placeholder="Ex: 010102020">
                    </div>
                </div>
            </div>
            <div id="s-bot">
                <div id="gender-wrap">
                    <label id='gender-label'>Gender</label>
                    <div id="gender-val">
                        <div class="gender-val-wrap">
                            <input type="radio" name='gender' id="male" value='male'><span>Male</span>
                        </div>
                        <div class="gender-val-wrap">
                            <input type="radio" name='gender' id="female" value='female'><span>Female</span>
                        </div>
                    </div>
                </div>
                <div id="term-wrap">
                    <input type='checkbox' id="term"> Accept term of services
                </div>
                <div id="s-btn-wrap">
                    <button id="discard">Discard</button>
                    <button id="register">Register</button>
                </div>
            </div>
        </div>
    </div>
    <div id="signup-title">User Registration</div>
</div>
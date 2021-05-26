export default class HelperEvent {
  timeOut(millisecond) {
    return new Promise((resolve) => setTimeout(resolve, millisecond ?? 400));
  }
  validateMail(email) {
    let reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(email);
  }
  validatePassword(password) {
    if (!password) {
      return {
        valid: false,
        msg: "Password is required!",
      };
    }
    if (password.includes(" "))
      return {
        valid: false,
        msg: "Password must not contains whitespace!",
      };
    if (password.length < 6) {
      return {
        valid: false,
        msg: "Password length at least 6 characters!",
      };
    }
    return {
      valid: true,
      msg: "This password is valid",
    };
  }
  validateUsername(username) {
    if (!username) {
      return {
        valid: false,
        msg: "Username is required!",
      };
    }
    if (username.includes(" "))
      return {
        valid: false,
        msg: "Username must not contains whitespace!",
      };
    if (username.length < 6) {
      return {
        valid: false,
        msg: "Username length at least 4 characters!",
      };
    }
    return {
      valid: true,
      msg: "This username is valid",
    };
  }
  validatePhone(phone) {
    var validate = {
      valid: false,
      msg: "Invalid phone number!",
    };
    if (phone.charAt(0) != "0") {
      return validate;
    }
    if (!/\d+$/.test(phone)) {
      return validate;
    }
    if (phone.length < 9 || phone.length > 10) {
      return validate;
    }
    validate.valid = true;
    validate.msg = "This phone number is valid";
    return validate;
  }
  isContainNumberAll(str) {
    return str.split("").every((v) => parseInt(v));
  }
  imageToBytes(imageFile, fn) {
    let reader = new FileReader();
    let type = imageFile.type;
    reader.onloadend = () => {
      let bytes = new Uint8Array(reader.result);
      fn(bytes, type);
    };
    reader.readAsArrayBuffer(imageFile);
  }
}

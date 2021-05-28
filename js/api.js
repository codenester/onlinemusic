import HelperString from "./helper_string.js";
export default class API {
  constructor() {
    this.helper = new HelperString();
  }
  async post(url, requestData) {
    let option = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    };
    if (requestData) {
      option.body = JSON.stringify(requestData);
    }
    let res = await fetch(url, option);
    if (res.status != 200) {
      return {
        success: false,
        msg: `(status: ${res.status}) ${res.statusText}`,
      };
    }
    let data = await res.json();
    return {
      success: true,
      result: data,
    };
  }
  async register(requestData) {
    try {
      let res = await this.post(this.helper.api.register, requestData);
      return res;
    } catch (e) {
      return {
        success: false,
        msg: e,
      };
    }
  }
  async getUser(requestData) {
    try {
      let res = await this.post(this.helper.api.getUser, requestData);
      return res;
    } catch (e) {
      return {
        success: false,
        msg: e,
      };
    }
  }
  async logout() {
    try {
      await this.post(this.helper.api.logout);
      return {
        success: true,
        info: "logged out",
      };
    } catch (e) {
      return {
        success: false,
        msg: e,
      };
    }
  }
  async getTopSongs() {
    try {
      let res = await this.post(this.helper.api.getTopSongs);
      return res;
    } catch (e) {
      return {
        success: false,
        msg: e,
      };
    }
  }
}

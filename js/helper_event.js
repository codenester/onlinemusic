export default class HelperEvent {
  get timeOut() {
    return new Promise((resolve) => setTimeout(resolve, 400));
  }
}

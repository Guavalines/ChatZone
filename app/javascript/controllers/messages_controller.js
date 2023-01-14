import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="messages"
export default class extends Controller {
  static targets = ["container", "input_form"];
  connect() {
    console.log(this.containerTarget);
  }
}

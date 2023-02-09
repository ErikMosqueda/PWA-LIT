import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
  static properties = {
  message: {},
};

constructor() {
  super();
  this.message = 'Hello again.';
}

  render() {
    return html`
      ${this.message}
    `;
  }
}
customElements.define('my-element', MyElement);
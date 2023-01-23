// Import HTMLElement here
import HTMLElement from './HTMLElement.mjs';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    // this.content = content;
  };
}

// Usage Tests
// const andIThinkToMyself = new DivElement('What a wonderful world');

// console.log(andIThinkToMyself.render());
// prints "<div>What a wonderful world</div>"

// Export class here
export default DivElement;

// Detta är våran gamla func $

async function $(selector, chosenDriver = driver) {
    let elements = await chosenDriver.findElements(by.css(selector));
    if (elements.length === 0) {
      return null;
    }
    if (elements.length === 1) {
      return elements[0];
    }
    return elements;
  }
  
  module.exports.$ = $;
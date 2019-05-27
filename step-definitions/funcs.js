// Function for selecting and returning element or elements by.css
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

// Function for clicking on button by using function $ above
async function clickButton(x, y) {
    x = await $(y)
    await x.click()
    await sleep(500)
}
module.exports.clickButton = clickButton;

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.sleep = sleep;
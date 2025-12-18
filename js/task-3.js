function getElementWidth(content, padding, border) {
    const contentWidth = Number(content.replace("px", ""));
    const paddingWidth = Number(padding.replace("px", ""));
    const borderWidth = Number(border.replace("px", ""));
    return contentWidth + (2 * paddingWidth) + (2 * borderWidth);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

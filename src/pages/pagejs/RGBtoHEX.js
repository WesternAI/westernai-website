const RGBtoHEX = (rbg) => {
    // remove the rgb from the string
    let color = rbg.toString().replace('rgb(', '').replace(')', '').split(',');
    let r = parseInt(color[0], 10).toString(16);
    let g = parseInt(color[1], 10).toString(16);
    let b = parseInt(color[2], 10).toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
}

const getInverseHex = (hex) => {
    // remvove the #
    hex = hex.replace('#', '')
    // convert to rgb
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    // invert the colours
    r = 255 - r
    g = 255 - g
    b = 255 - b
    
    // convert back to hex
    hex = RGBtoHEX('rgb(' + r + ', ' + g + ', ' + b + ')')

    return hex
}

export { RGBtoHEX, getInverseHex};
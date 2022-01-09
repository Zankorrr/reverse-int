module.exports = function reverse (n) {
    let m = String(Math.abs(n));
    let result = '';
    for (let i = m.length; i > 0; i--) {
        result = result + m[i - 1];
    }
    return result;
}

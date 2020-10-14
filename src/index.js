module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(el => el.join(''));
    for (let i = 0; i < arr.length;) {
        if (str.includes(arr[i])) {
            str = str.replace(arr[i], '');
            i = 0
        } else {i++}
    }
    return !str
}

// const config1 = [['(', ')']];
// str = '((()))()(';

// console.log(check(str, config1))
